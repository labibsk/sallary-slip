import { Box, Card, CircularProgress, Dialog, IconButton, Paper } from '@material-ui/core'
import React, { Fragment } from 'react'
import wordLogo from '../assets/word.svg'
import pdfLogo from '../assets/pdf.svg'
import generateDoc from '../generateDoc'
import { format } from 'date-fns';
import convert from '../convertToWords';
import { PDFDownloadLink } from '@react-pdf/renderer'
import { reset } from '../actions'
import { db } from '../firebase'
import SalarySlipPdf from '../pdftemplate/SalarySlipPdf'
import { useDispatch, useSelector } from 'react-redux'
import { Close } from '@material-ui/icons'

function DownloadPayslipDialog({ open }) {

    const data = useSelector(state => {
        console.log(state);
        const basic = (parseFloat(state.basic) || 0);
        const conveyanceAllowance = (parseFloat(state.conveyanceAllowance) || 0);
        const incentive = (parseFloat(state.incentive) || 0);
        const incomeTax = (parseFloat(state.incomeTax) || 0);
        const arrears = (parseFloat(state.arrears) || 0);
        const totalEarnings = basic + conveyanceAllowance + incentive;
        const totalDeductions = incomeTax + arrears;
        const netPayable = totalEarnings - totalDeductions
        return ({
            dateObject: state.date,
            date: format(state.date, "MMM yyyy"),
            employeeName: state.employeeName,
            companyPan: state.companyPan,
            monthlyGross: (parseFloat(state.monthlyGross) || 0).toFixed(2),
            employeeId: state.employeeId,
            monthlyBasic: (parseFloat(state.monthlyBasic) || 0).toFixed(2),
            dateOfJoining: format(state.dateOfJoining, "dd MMM yyyy"),
            daysMonth: state.daysMonth,
            dateOfSeperation: state.hasSeperated ? format(state.dateOfSeperation, "dd MMM yyyy") : "N/A",
            daysPayable: state.daysPayable,
            bankName: state.bankName,
            pan: state.pan,
            aadhar: state.aadhar,
            bankAccountNo: state.bankAccountNo,
            basic: basic.toFixed(2),
            incomeTax: incomeTax.toFixed(2),
            conveyanceAllowance: conveyanceAllowance.toFixed(2),
            arrears: arrears.toFixed(2),
            incentive: incentive.toFixed(2),
            totalEarnings: totalEarnings.toFixed(2),
            totalDeductions: totalDeductions.toFixed(2),
            netPayable: `${netPayable.toFixed(2)}`,
            netPayableInWords: `Rupees ${convert(netPayable)} Only`,
            fileName: `Salary_Slip_${state.employeeId}_${format(state.date, "MMM_yyyy")}`
        })
    })

    const dispatch = useDispatch();

    const saveToFirebase = () => {
        db.collection("employeeIds").doc(data.employeeId).set({
            pan: data.pan,
            aadhar: data.aadhar,
            employeeName: data.employeeName,
            bankName: data.bankName,
            bankAccountNo: data.bankAccountNo,
            dateOfJoining: data.dateOfJoining,
            dateOfSeperation: data.dateOfSeperation,
            monthlyGross: data.monthlyGross,
            monthlyBasic: data.monthlyBasic,
            basic: data.basic,
            conveyanceAllowance: data.conveyanceAllowance,
            incentive: data.incentive,
            incomeTax: data.incomeTax,
            arrears: data.arrears
        }).then(() => {
            console.log("Document Written successfully");
        }).catch((error) => {
            console.log("Error while writing document");
        });
    }

    return (
        <Dialog open={open}>
            <Paper style={{ backgroundColor: "#e9e9e9" }}>
                <IconButton onClick={(e) => {
                    dispatch(reset());
                }} style={{ position: 'absolute', right: '10px', top: '10px' }}>
                    <Close style={{ color: '#000' }} />
                </IconButton>
                <Box style={{ fontWeight: 'bold', gap: '50px', paddingTop: '20px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '40px' }}>
                    <Box style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p>Download Payslip</p>
                        <Box style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
                            <Card style={{ padding: "20px" }}>
                                <PDFDownloadLink
                                    document={<SalarySlipPdf data={data} />}
                                    fileName={data.fileName}

                                    style={{
                                        textDecoration: "none",
                                        color: "#4a4a4a",
                                        display: "flex",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: "#fff",
                                    }}>{({ blob, url, loading, error }) => {
                                        if (!loading) {
                                            saveToFirebase()
                                        }
                                        return (<Fragment>
                                            <img src={pdfLogo} style={{ width: "64px", height: "64px" }} alt="Word" />
                                            {loading && <CircularProgress style={{ position: 'absolute' }} />}
                                        </Fragment>
                                        )
                                    }
                                    }
                                </PDFDownloadLink>
                            </Card>
                            <Card style={{ padding: "20px", margin: "0px" }} onClick={(e) => {
                                saveToFirebase();
                                generateDoc(data);
                            }}>
                                <img src={wordLogo} style={{ width: "64px", height: "64px", padding: "0px" }} alt="Pdf" />
                            </Card>
                        </Box>
                    </Box>
                </Box>

            </Paper>
        </Dialog>
    )
}

export default DownloadPayslipDialog
