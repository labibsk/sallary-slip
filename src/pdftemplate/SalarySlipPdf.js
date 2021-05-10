import { Document, Page } from '@react-pdf/renderer'
import React from 'react'
import Header from './Header'
import { Border } from './layouts'
import SalarySlipTable from './SalarySlipTable'

function SalarySlipPdf({ data }) {
    return (
        <Document>
            <Page style={{ margin: '0px', paddingBottom: '24pt', paddingTop: '24pt', paddingLeft: '24pt', paddingRight: '24pt' }}>
                <Border>
                    <Header
                        companyName="EDigital Wolf"
                        addressLine1="Shri Siddhi Above SBI Bank, Sasane Nagar "
                        addressLine2="Hadapsar, Pune"
                        addressLine3="Maharashtra 411028"
                        date={data.date}
                    />
                    <SalarySlipTable data={data} />
                </Border>
            </Page>
        </Document>
    )
}

export default SalarySlipPdf
