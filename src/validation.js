import {
    updateCompanyPanError,
    updateEmployeeIdError,
    updateEmployeeNameError,
    updateBankNameError,
    updateBankAccountNoError,
    updateDaysMonthError,
    updateDaysPayableError,
    updateMonthlyBasicError,
    updateMonthlyGrossError,
    updatePanError,
    updateOpeningError,
    updateEarnedError,
    updateAvailedError,
    updateClosingError,
    updateBasicError,
    updateConveyanceAllowanceError,
    updateIncentiveError,
    updateIncomeTaxError,
    updateArrearsError
} from './actions';

export default function isFormValid(store) {
    const state = store.state;

    if (state.companyPan.length === 0) {
        store.dispatch(updateCompanyPanError(true));
        return false;
    }
    store.dispatch(updateCompanyPanError(false));

    if (state.employeeId.length === 0) {
        store.dispatch(updateEmployeeIdError(true));
        return false;
    }
    store.dispatch(updateEmployeeIdError(false));

    if (state.employeeName.length === 0) {
        store.dispatch(updateEmployeeNameError(true));
        return false;
    }
    store.dispatch(updateEmployeeNameError(false));

    if (state.bankName.length === 0) {
        store.dispatch(updateBankNameError(true));
        return false;
    }
    store.dispatch(updateBankNameError(false));

    if (state.bankAccountNo.length === 0) {
        store.dispatch(updateBankAccountNoError(true));
        return false;
    }
    store.dispatch(updateBankAccountNoError(false));

    if (state.daysMonth.length === 0) {
        store.dispatch(updateDaysMonthError(true));
        return false;
    }
    store.dispatch(updateDaysMonthError(false));

    if (state.daysPayable.length === 0) {
        store.dispatch(updateDaysPayableError(true));
        return false;
    }
    store.dispatch(updateDaysPayableError(false));

    if (state.monthlyBasic.length === 0) {
        store.dispatch(updateMonthlyBasicError(true));
        return false;
    }
    store.dispatch(updateMonthlyBasicError(false));

    if (state.monthlyGross.length === 0) {
        store.dispatch(updateMonthlyGrossError(true));
        return false;
    }
    store.dispatch(updateMonthlyGrossError(false));


    if (state.pan.length === 0) {
        store.dispatch(updatePanError(true));
        return false;
    }
    store.dispatch(updatePanError(false));


    if (state.opening.length === 0) {
        store.dispatch(updateOpeningError(true));
        return false;
    }
    store.dispatch(updateOpeningError(false));

    if (state.earned.length === 0) {
        store.dispatch(updateEarnedError(true));
        return false;
    }
    store.dispatch(updateEarnedError(false));

    if (state.availed.length === 0) {
        store.dispatch(updateAvailedError(true));
        return false;
    }
    store.dispatch(updateAvailedError(false));

    if (state.closing.length === 0) {
        store.dispatch(updateClosingError(true));
        return false;
    }
    store.dispatch(updateClosingError(false));

    if (state.basic.length === 0) {
        store.dispatch(updateBasicError(true));
        return false;
    }
    store.dispatch(updateBasicError(false));

    if (state.conveyanceAllowance.length === 0) {
        store.dispatch(updateConveyanceAllowanceError(true));
        return false;
    }
    store.dispatch(updateConveyanceAllowanceError(false));

    if (state.incentive.length === 0) {
        store.dispatch(updateIncentiveError(true));
        return false;
    }
    store.dispatch(updateIncentiveError(false));

    if (state.incomeTax.length === 0) {
        store.dispatch(updateIncomeTaxError(true));
        return false;
    }
    store.dispatch(updateIncomeTaxError(false));

    if (state.arrears.length === 0) {
        store.dispatch(updateArrearsError(true));
        return false;
    }
    return true;
}