import React from 'react'
import './NavBar.css'
import Fab from '@material-ui/core/Fab'
import GetAppIcon from '@material-ui/icons/GetApp';
import CompanyInfo from './CompanyInfo';


function NavBar({ visible, isMobile, classes, onSaveClick }) {

    return (
        <div className={"NavBar " + (visible ? "NavBar__normal" : "NavBar__hidden")}>
            <CompanyInfo />
            {!isMobile && <Fab onClick={onSaveClick} color="primary" variant="extended">
                <GetAppIcon className={classes.extendedIcon} />  Download Payslip
            </Fab>}
        </div>
    )
}

export default NavBar