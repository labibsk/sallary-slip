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
    updateAadharError,
    updateBasicError,
    updateConveyanceAllowanceError,
    updateIncentiveError,
    updateIncomeTaxError,
    updateArrearsError
} from './actions';

export default function isFormValid(store) {
    const state = store.getState();

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
    if (state.aadhar.length === 0) {
        store.dispatch(updateAadharError(true));
        return false;
    }
    store.dispatch(updateAadharError(false));

    // if (state.basic.length === 0) {
    //     store.dispatch(updateBasicError(true));
    //     return false;
    // }
    // store.dispatch(updateBasicError(false));

    // if (state.conveyanceAllowance.length === 0) {
    //     store.dispatch(updateConveyanceAllowanceError(true));
    //     return false;
    // }
    // store.dispatch(updateConveyanceAllowanceError(false));

    // if (state.incentive.length === 0) {
    //     store.dispatch(updateIncentiveError(true));
    //     return false;
    // }
    // store.dispatch(updateIncentiveError(false));

    // if (state.incomeTax.length === 0) {
    //     store.dispatch(updateIncomeTaxError(true));
    //     return false;
    // }
    // store.dispatch(updateIncomeTaxError(false));

    // if (state.arrears.length === 0) {
    //     store.dispatch(updateArrearsError(true));
    //     return false;
    // }
    return true;
}