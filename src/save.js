import store from './store';
import {
    updateEmployeeIdError,
    updateEmployeeNameError,
    updateCompanyPanError,
    updatePanError,
    updateBankNameError,
    updateBankAccountNoError,
    updateMonthlyBasicError,
    updateMonthlyGrossError,
    updateDaysMonthError,
    updateDaysPayableError,
    updateOpeningError,
    updateEarnedError,
    updateAvailedError,
    updateClosingError,
    updateBasicError,
    updateConveyanceAllowanceError,
    updateIncentiveError,
    updateIncomeTaxError,
    updateArrearsError,
    updateSavingMessage,
    updateSaving
} from './actions';
import generateDoc from './generateDoc';
import { format } from 'date-fns';
import convert from './convertToWords';
import isFormValid from './validation';

const onSaveClick = () => {
    const state = store.getState();

    if (!isFormValid(store)) {
        return;
    }
    window.webkitRequestFileSystem(window.TEMPORARY, 1024 * 1024, SaveDatFileBro);

    store.dispatch(updateArrearsError(false));
    store.dispatch(updateSavingMessage("Generating Salary slip"));
    store.dispatch(updateSaving(true));

    const basic = (parseFloat(state.basic) || 0);
    const conveyanceAllowance = (parseFloat(state.conveyanceAllowance) || 0);
    const incentive = (parseFloat(state.incentive) || 0);
    const incomeTax = (parseFloat(state.incomeTax) || 0);
    const arrears = (parseFloat(state.arrears) || 0);
    const totalEarnings = basic + conveyanceAllowance + incentive;
    const totalDeductions = incomeTax + arrears;
    const netPayable = totalEarnings - totalDeductions

    const data = {
        dateObject: state.date,
        date: format(state.date, "MMM yyyy"),
        companyPan: state.companyPan,
        employeeId: state.employeeId,
        employeeName: state.employeeName,
        dateOfJoining: format(state.dateOfJoining, "dd MMM yyyy"),
        dateOfSeperation: state.hasSeperated ? format(state.dateOfSeperation, "dd MMM yyyy") : "N/A",
        bankName: state.bankName,
        bankAccountNo: state.bankAccountNo,
        monthlyGross: (parseFloat(state.monthlyGross) || 0).toFixed(2),
        monthlyBasic: (parseFloat(state.monthlyBasic) || 0).toFixed(2),
        daysMonth: state.daysMonth,
        daysPayable: state.daysPayable,
        pan: state.pan,
        opening: state.opening,
        earned: state.earned,
        availed: state.availed,
        closing: state.closing,
        basic: basic.toFixed(2),
        conveyanceAllowance: conveyanceAllowance.toFixed(2),
        incentive: incentive.toFixed(2),
        incomeTax: incomeTax.toFixed(2),
        arrears: arrears.toFixed(2),
        totalEarnings: totalEarnings.toFixed(2),
        totalDeductions: totalDeductions.toFixed(2),
        netPayable: `${netPayable.toFixed(2)}`,
        netPayableInWords: `${convert(netPayable)}`
    }
    generateDoc(data);
};

export default onSaveClick;