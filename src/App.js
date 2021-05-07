import './App.css';
import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import 'date-fns';
import EmployeeInfo from './components/EmployeeInfo';
import Header from './components/Header';
import PaymentInfo from './components/PaymentInfo';
import LeaveInfo from './components/LeaveInfo';
import SalaryStructureInfo from './components/SalaryStructureInfo';
import Total from './components/Total';
import NavBar from './components/NavBar';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import Fab from '@material-ui/core/Fab'
import { PictureAsPdf } from '@material-ui/icons';

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

  const employeeIds = [
    '2986',
    '2987',
    '2988',
    '2989',
    '2990',
    '2991',
    '2992',
    '2993'
  ]
  const [employeeId, setEmployeeId] = React.useState("");
  const [employeeIdError, setEmployeeIdError] = React.useState(false);
  const [companyPan, setCompanyPan] = React.useState("");
  const [companyPanError, setCompanyPanError] = React.useState(false);
  const [pan, setPan] = React.useState("");
  const [panError, setPanError] = React.useState(false);
  const today = new Date();
  const [dateOfJoining, setDateOfJoining] = React.useState(today);
  const [payslipFor, setPayslipFor] = React.useState(today);
  const [dateOfSeperation, setDateOfSeperation] = React.useState(today);
  const [hasSeperated, setHasSeperated] = React.useState(false);
  const [bankName, setBankName] = React.useState("");
  const [bankNameError, setBankNameError] = React.useState(false);
  const [bankAccountNo, setBankAccountNo] = React.useState("");
  const [bankAccountNoError, setBankAccountNoError] = React.useState(false);
  const [monthlyBasic, setMonthlyBasic] = React.useState("");
  const [monthlyBasicError, setMonthlyBasicError] = React.useState(false);
  const [monthlyGross, setMonthlyGross] = React.useState("");
  const [monthlyGrossError, setMonthlyGrossError] = React.useState(false);
  const [daysMonth, setDaysMonth] = React.useState("");
  const [daysMonthError, setDaysMonthError] = React.useState(false);
  const [daysPayable, setDaysPayable] = React.useState("");
  const [daysPayableError, setDaysPayableError] = React.useState(false);
  const [opening, setOpening] = React.useState("");
  const [openingError, setOpeningError] = React.useState(false);
  const [earned, setEarned] = React.useState("");
  const [earnedError, setEarnedError] = React.useState(false);
  const [availed, setAvailed] = React.useState("");
  const [availedError, setAvailedError] = React.useState(false);
  const [closing, setClosing] = React.useState("");
  const [closingError, setClosingError] = React.useState(false);
  const [basic, setBasic] = React.useState("");
  const [basicError, setBasicError] = React.useState(false);
  const [conveyanceAllowance, setConveyanceAllowance] = React.useState("");
  const [conveyanceAllowanceError, setConveyanceAllowanceError] = React.useState(false);
  const [incentive, setIncentive] = React.useState("");
  const [incentiveError, setIncentiveError] = React.useState(false);
  const [incomeTax, setIncomeTax] = React.useState("");
  const [incomeTaxError, setIncomeTaxError] = React.useState(false);
  const [arrears, setArrears] = React.useState("");
  const [arrearsError, setArrearsError] = React.useState(false);

  let prevScrollPos = 0
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const current = window.pageYOffset;
    setVisible(prevScrollPos > current);
    prevScrollPos = current;
  }

  const isMobile = useMediaQuery("(max-width: 500px)")

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const onSaveClick = () => {
    console.log(employeeId, employeeId.length)
    if (employeeId.length === 0) {
      setEmployeeIdError(true);
      return;
    }
    setEmployeeIdError(false);
    if (companyPan.length === 0) {
      setCompanyPanError(true);
      return;
    }
    setCompanyPanError(false);
    if (pan.length === 0) {
      setPanError(true);
      return;
    }
    setPanError(false);
    if (bankName.length === 0) {
      setBankNameError(true);
      return;
    }
    setBankNameError(false);
    if (bankAccountNo.length === 0) {
      setBankAccountNoError(true);
      return;
    }
    setBankAccountNoError(false);
    if (monthlyBasic.length === 0) {
      setMonthlyBasicError(true);
      return;
    }
    setMonthlyBasicError(false);
    if (monthlyGross.length === 0) {
      setMonthlyGrossError(true);
      return;
    }
    setMonthlyGrossError(false);
    if (daysMonth.length === 0) {
      setDaysMonthError(true);
      return;
    }
    setDaysMonthError(false);
    if (daysPayable.length === 0) {
      setDaysPayableError(true);
      return;
    }
    setDaysPayableError(false);
    if (opening.length === 0) {
      setOpeningError(true);
      return;
    }
    setOpeningError(false);
    if (earned.length === 0) {
      setEarnedError(true);
      return;
    }
    setEarnedError(false);
    if (availed.length === 0) {
      setAvailedError(true);
      return;
    }
    setAvailedError(false);
    if (closing.length === 0) {
      setClosingError(true);
      return;
    }
    setClosingError(false);
    if (basic.length === 0) {
      setBasicError(true);
      return;
    }
    setBasicError(false);
    if (conveyanceAllowance.length === 0) {
      setConveyanceAllowanceError(true);
      return;
    }
    setConveyanceAllowanceError(false);
    if (incentive.length === 0) {
      setIncentiveError(true);
      return;
    }
    setIncentiveError(false);
    if (incomeTax.length === 0) {
      setIncomeTaxError(true);
      return;
    }
    setIncomeTaxError(false);
    if (arrears.length === 0) {
      setArrearsError(true);
      return;
    }
    setArrearsError(false);
    console.log(true);
  }

  return (
    <Fragment>
      <div className="App">
        <NavBar visible={visible} isMobile={isMobile} classes={classes} onSaveClick={onSaveClick} />
        <div className="Container">
          <Header
            payslipFor={payslipFor}
            setPayslipFor={setPayslipFor}
            employeeId={employeeId}
            employeeIdError={employeeIdError}
            employeeIds={employeeIds}
            setEmployeeId={setEmployeeId}
            companyPan={companyPan}
            setCompanyPan={setCompanyPan}
          />
          <EmployeeInfo
            dateOfJoining={dateOfJoining}
            dateOfSeperation={dateOfSeperation}
            hasSeperated={hasSeperated}
            bankName={bankName}
            bankNameError={bankNameError}
            bankAccountNo={bankAccountNo}
            bankAccountNoError={bankAccountNoError}
            setDateOfJoining={setDateOfJoining}
            setDateOfSeperation={setDateOfSeperation}
            setHasSeperated={setHasSeperated}
            setBankName={setBankName}
            setBankAccountNo={setBankAccountNo}
          />
          <PaymentInfo
            monthlyBasic={monthlyBasic}
            monthlyBasicError={monthlyBasicError}
            setMonthlyBasic={setMonthlyBasic}
            monthlyGross={monthlyGross}
            monthlyGrossError={monthlyGrossError}
            setMonthlyGross={setMonthlyGross}
            daysMonth={daysMonth}
            daysMonthError={daysMonthError}
            setDaysMonth={setDaysMonth}
            daysPayable={daysPayable}
            daysPayableError={daysPayableError}
            setDaysPayable={setDaysPayable}
            pan={pan}
            panError={panError}
            setPan={setPan}
          />
          <LeaveInfo
            opening={opening}
            openingError={openingError}
            earned={earned}
            earnedError={earnedError}
            availed={availed}
            availedError={availedError}
            closing={closing}
            closingError={closingError}
            setOpening={setOpening}
            setEarned={setEarned}
            setAvailed={setAvailed}
            setClosing={setClosing}
          />
          <SalaryStructureInfo
            basic={basic}
            basicError={basicError}
            conveyanceAllowance={conveyanceAllowance}
            conveyanceAllowanceError={conveyanceAllowanceError}
            incentive={incentive}
            incentiveError={incentiveError}
            incomeTax={incomeTax}
            incomeTaxError={incomeTaxError}
            arrears={arrears}
            arrearsError={arrearsError}
            setBasic={setBasic}
            setConveyanceAllowance={setConveyanceAllowance}
            setIncentive={setIncentive}
            setIncomeTax={setIncomeTax}
            setArrears={setArrears}
          />

          <Total
            basic={basic}
            conveyanceAllowance={conveyanceAllowance}
            incentive={incentive}
            incomeTax={incomeTax}
            arrears={arrears}
          />

          {
            isMobile && <Fab onClick={onSaveClick}
              style={{ position: "fixed", bottom: "20px", zIndex: "10", right: "20px", transition: "transform 300ms", transform: visible ? "translateY(0%)" : "translateY(150%)" }} color="primary" variant="extended">
              <PictureAsPdf className={classes.extendedIcon} />  Save to PDF
            </Fab>
          }

        </div>
      </div>
    </Fragment>

  );
}

export default App;
