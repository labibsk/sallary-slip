import './App.css';
import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import 'date-fns';
import EmployeeInfo from './components/EmployeeInfo';
import Header from './components/Header';
import PaymentInfo from './components/PaymentInfo';
import LeaveInfo from './components/LeaveInfo';
import SalaryBreakdown from './components/SalaryBreakdown';
import Total from './components/Total';
import NavBar from './components/NavBar';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import Fab from '@material-ui/core/Fab'
import { PictureAsPdf } from '@material-ui/icons';
import onSaveClick from './save';
import { db } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployeeIds } from './actions';
import SavingDialog from './components/SavingDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function App() {

  const classes = useStyles();

  let prevScrollPos = useRef(0)
  const [visible, setVisible] = useState(true);

  const isMobile = useMediaQuery("(max-width: 500px)")

  const dispatch = useDispatch();

  const getEmployeeIds = () => {
    db.collection("employeeIds").onSnapshot((snapshot) => {
      const ids = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      }));
      dispatch(updateEmployeeIds(ids));
    })
  }

  useEffect(() => {
    getEmployeeIds();
  }, [])

  useLayoutEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset;
      setVisible(prevScrollPos.current > current);
      prevScrollPos.current = current;
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const open = useSelector(state => state.saving);

  return (
    <Fragment>
      <div className={"App " + (open ? "no_scroll" : "scroll")}>
        <NavBar visible={visible} isMobile={isMobile} classes={classes} onSaveClick={onSaveClick} />
        <div className="Container">
          <Header />
          <EmployeeInfo />
          <PaymentInfo />
          <LeaveInfo />
          <SalaryBreakdown />
          <Total />
          {
            isMobile && <Fab onClick={onSaveClick}
              style={{ position: "fixed", bottom: "20px", zIndex: "10", right: "20px", transition: "transform 300ms", transform: visible ? "translateY(0%)" : "translateY(150%)" }} color="primary" variant="extended">
              <PictureAsPdf className={classes.extendedIcon} />  Save to PDF
            </Fab>
          }

          {
            open && <SavingDialog />
          }
        </div>
      </div>
    </Fragment>

  );
}

export default App;
