import logo from '../assets/edigital_wolf_logo.png'
import './companyinfo.css'
import React from 'react'

const CompanyInfo = () => {
    return (
        <div className="companyInfo">
            <img src={logo} className="logo" alt="Logo" />
            <div>
                <h3 className="name">EDigital Wolf</h3>
                <p className="address">Shri Siddhi  Above SBI Bank, Sasane Nagar <br />Hadapsar, Pune, Maharashtra 411028</p>
            </div>
        </div>
    )
}

export default CompanyInfo;
