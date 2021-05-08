import store from './store';
import { useDispatch } from 'react-redux';
import {
    updateEmployeeIdError,
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
    updateArrearsError
} from './actions';

const dispatch = useDispatch();

export default () => {
    const state = store.getState();

    if (state.companyPan.length === 0) {
        dispatch(updateCompanyPanError(true));
        return;
    }
    dispatch(updateCompanyPanError(false));

    if (state.employeeId.length === 0) {
        dispatch(updateEmployeeIdError(true));
        return;
    }
    dispatch(updateEmployeeIdError(false));

    if (state.bankName.length === 0) {
        dispatch(updateBankNameError(true));
        return;
    }
    dispatch(updateBankNameError(false));

    if (state.bankAccountNo.length === 0) {
        dispatch(updateBankAccountNoError(true));
        return;
    }
    dispatch(updateBankAccountNoError(false));

    if (state.daysMonth.length === 0) {
        dispatch(updateDaysMonthError(true));
        return;
    }
    dispatch(updateDaysMonthError(false));

    if (state.daysPayable.length === 0) {
        dispatch(updateDaysPayableError(true));
        return;
    }
    dispatch(updateDaysPayableError(false));

    if (state.monthlyBasic.length === 0) {
        dispatch(updateMonthlyBasicError(true));
        return;
    }
    dispatch(updateMonthlyBasicError(false));

    if (state.monthlyGross.length === 0) {
        dispatch(updateMonthlyGrossError(true));
        return;
    }
    dispatch(updateMonthlyGrossError(false));


    if (state.pan.length === 0) {
        dispatch(updatePanError(true));
        return;
    }
    dispatch(updatePanError(false));


    if (state.opening.length === 0) {
        dispatch(updateOpeningError(true));
        return;
    }
    dispatch(updateOpeningError(false));

    if (state.earned.length === 0) {
        dispatch(updateEarnedError(true));
        return;
    }
    dispatch(updateEarnedError(false));

    if (state.availed.length === 0) {
        dispatch(updateAvailedError(true));
        return;
    }
    dispatch(updateAvailedError(false));

    if (state.closing.length === 0) {
        dispatch(updateClosingError(true));
        return;
    }
    dispatch(updateClosingError(false));

    if (state.basic.length === 0) {
        dispatch(updateBasicError(true));
        return;
    }
    dispatch(updateBasicError(false));

    if (state.conveyanceAllowance.length === 0) {
        dispatch(updateConveyanceAllowanceError(true));
        return;
    }
    dispatch(updateConveyanceAllowanceError(false));

    if (state.incentive.length === 0) {
        dispatch(updateIncentiveError(true));
        return;
    }
    dispatch(updateIncentiveError(false));

    if (state.incomeTax.length === 0) {
        dispatch(updateIncomeTaxError(true));
        return;
    }
    dispatch(updateIncomeTaxError(false));

    if (state.arrears.length === 0) {
        dispatch(updateArrearsError(true));
        return;
    }
    dispatch(updateArrearsError(false));

}