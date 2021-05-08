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

const onSaveClick = () => {
    const state = store.getState();

    if (state.companyPan.length === 0) {
        store.dispatch(updateCompanyPanError(true));
        return;
    }
    store.dispatch(updateCompanyPanError(false));

    if (state.employeeId.length === 0) {
        store.dispatch(updateEmployeeIdError(true));
        return;
    }
    store.dispatch(updateEmployeeIdError(false));

    if (state.employeeName.length === 0) {
        store.dispatch(updateEmployeeNameError(true));
        return;
    }
    store.dispatch(updateEmployeeNameError(false));

    if (state.bankName.length === 0) {
        store.dispatch(updateBankNameError(true));
        return;
    }
    store.dispatch(updateBankNameError(false));

    if (state.bankAccountNo.length === 0) {
        store.dispatch(updateBankAccountNoError(true));
        return;
    }
    store.dispatch(updateBankAccountNoError(false));

    if (state.daysMonth.length === 0) {
        store.dispatch(updateDaysMonthError(true));
        return;
    }
    store.dispatch(updateDaysMonthError(false));

    if (state.daysPayable.length === 0) {
        store.dispatch(updateDaysPayableError(true));
        return;
    }
    store.dispatch(updateDaysPayableError(false));

    if (state.monthlyBasic.length === 0) {
        store.dispatch(updateMonthlyBasicError(true));
        return;
    }
    store.dispatch(updateMonthlyBasicError(false));

    if (state.monthlyGross.length === 0) {
        store.dispatch(updateMonthlyGrossError(true));
        return;
    }
    store.dispatch(updateMonthlyGrossError(false));


    if (state.pan.length === 0) {
        store.dispatch(updatePanError(true));
        return;
    }
    store.dispatch(updatePanError(false));


    if (state.opening.length === 0) {
        store.dispatch(updateOpeningError(true));
        return;
    }
    store.dispatch(updateOpeningError(false));

    if (state.earned.length === 0) {
        store.dispatch(updateEarnedError(true));
        return;
    }
    store.dispatch(updateEarnedError(false));

    if (state.availed.length === 0) {
        store.dispatch(updateAvailedError(true));
        return;
    }
    store.dispatch(updateAvailedError(false));

    if (state.closing.length === 0) {
        store.dispatch(updateClosingError(true));
        return;
    }
    store.dispatch(updateClosingError(false));

    if (state.basic.length === 0) {
        store.dispatch(updateBasicError(true));
        return;
    }
    store.dispatch(updateBasicError(false));

    if (state.conveyanceAllowance.length === 0) {
        store.dispatch(updateConveyanceAllowanceError(true));
        return;
    }
    store.dispatch(updateConveyanceAllowanceError(false));

    if (state.incentive.length === 0) {
        store.dispatch(updateIncentiveError(true));
        return;
    }
    store.dispatch(updateIncentiveError(false));

    if (state.incomeTax.length === 0) {
        store.dispatch(updateIncomeTaxError(true));
        return;
    }
    store.dispatch(updateIncomeTaxError(false));

    if (state.arrears.length === 0) {
        store.dispatch(updateArrearsError(true));
        return;
    }
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