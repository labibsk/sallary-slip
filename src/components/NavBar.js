import React from 'react'
import './NavBar.css'
import Fab from '@material-ui/core/Fab'
import { PictureAsPdf } from '@material-ui/icons';
import CompanyInfo from './CompanyInfo';


function NavBar({ visible, isMobile, classes, onSaveClick }) {


    return (
        <div className={"NavBar " + (visible ? "NavBar__normal" : "NavBar__hidden")}>
            <CompanyInfo />
            {!isMobile && <Fab onClick={onSaveClick} color="primary" variant="extended">
                <PictureAsPdf className={classes.extendedIcon} />  Save to PDF
            </Fab>}
        </div>
    )
}

export default NavBar