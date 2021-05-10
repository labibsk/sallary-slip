import * as actionTypes from './actionTypes';
import { parse } from 'date-fns';

export function updateDate(value) {
    return {
        type: actionTypes.DATE,
        payload: value
    }
}
export function updateCompanyPan(value) {
    return {
        type: actionTypes.COMPANY_PAN,
        payload: value
    }
}
export function updateEmployeeId(value) {
    return {
        type: actionTypes.EMPLOYEE_ID,
        payload: value
    }
}
export function updateEmployeeName(value) {
    return {
        type: actionTypes.EMPLOYEE_NAME,
        payload: value
    }
}
export function updateDateOfJoining(value) {
    return {
        type: actionTypes.DATE_OF_JOINING,
        payload: value
    }
}
export function updateHasSeperated(value) {
    return {
        type: actionTypes.HAS_SEPERATED,
        payload: value
    }
}
export function updateDateOfSeperation(value) {
    return {
        type: actionTypes.DATE_OF_SEPERATION,
        payload: value
    }
}
export function updateBankName(value) {
    return {
        type: actionTypes.BANK_NAME,
        payload: value
    }
}
export function updateBankAccountNo(value) {
    return {
        type: actionTypes.BANK_ACCOUNT_NO,
        payload: value
    }
}
export function updateMonthlyGross(value) {
    return {
        type: actionTypes.MONTHLY_GROSS,
        payload: value
    }
}
export function updateMonthlyBasic(value) {
    return {
        type: actionTypes.MONTHLY_BASIC,
        payload: value
    }
}
export function updateDaysMonth(value) {
    return {
        type: actionTypes.DAYS_MONTH,
        payload: value
    }
}
export function updateDaysPayable(value) {
    return {
        type: actionTypes.DAYS_PAYABLE,
        payload: value
    }
}
export function updatePan(value) {
    return {
        type: actionTypes.PAN,
        payload: value
    }
}

export function updateBasic(value) {
    return {
        type: actionTypes.BASIC,
        payload: value
    }
}
export function updateConveyanceAllowance(value) {
    return {
        type: actionTypes.CONVEYANCE_ALLOWANCE,
        payload: value
    }
}
export function updateIncentive(value) {
    return {
        type: actionTypes.INCENTIVE,
        payload: value
    }
}
export function updateIncomeTax(value) {
    return {
        type: actionTypes.INCOME_TAX,
        payload: value
    }
}
export function updateArrears(value) {
    return {
        type: actionTypes.ARREARS,
        payload: value
    }
}

export function updateEmployeeIds(value) {
    return {
        type: actionTypes.EMPLOYEE_IDS,
        payload: value
    }
}


// Errors
export function updateEmployeeIdError(value) {
    return {
        type: actionTypes.EMPLOYEE_ID_ERROR,
        payload: value
    }
}

export function updateEmployeeNameError(value) {
    return {
        type: actionTypes.EMPLOYEE_NAME_ERROR,
        payload: value
    }
}

export function updateCompanyPanError(value) {
    return {
        type: actionTypes.COMPANY_PAN_ERROR,
        payload: value
    }
}

export function updatePanError(value) {
    return {
        type: actionTypes.PAN_ERROR,
        payload: value
    }
}

export function updateBankNameError(value) {
    return {
        type: actionTypes.BANK_NAME_ERROR,
        payload: value
    }
}

export function updateBankAccountNoError(value) {
    return {
        type: actionTypes.BANK_ACCOUNT_NO_ERROR,
        payload: value
    }
}

export function updateMonthlyBasicError(value) {
    return {
        type: actionTypes.MONTHLY_BASIC_ERROR,
        payload: value
    }
}

export function updateMonthlyGrossError(value) {
    return {
        type: actionTypes.MONTHLY_GROSS_ERROR,
        payload: value
    }
}

export function updateDaysMonthError(value) {
    return {
        type: actionTypes.DAYS_MONTH_ERROR,
        payload: value
    }
}

export function updateDaysPayableError(value) {
    return {
        type: actionTypes.DAYS_PAYABLE_ERROR,
        payload: value
    }
}

export function updateBasicError(value) {
    return {
        type: actionTypes.BASIC_ERROR,
        payload: value
    }
}

export function updateConveyanceAllowanceError(value) {
    return {
        type: actionTypes.CONVEYANCE_ALLOWANCE_ERROR,
        payload: value
    }
}

export function updateIncentiveError(value) {
    return {
        type: actionTypes.INCENTIVE_ERROR,
        payload: value
    }
}

export function updateIncomeTaxError(value) {
    return {
        type: actionTypes.INCOME_TAX_ERROR,
        payload: value
    }
}

export function updateArrearsError(value) {
    return {
        type: actionTypes.ARREARS_ERROR,
        payload: value
    }
}

export function updateSaving(value) {
    return {
        type: actionTypes.SAVING,
        payload: value
    }
}

export function updateSavingMessage(value) {
    return {
        type: actionTypes.SAVING_MESSAGE,
        payload: value
    }
}

export function updateEmployeeInfo(data) {
    return {
        type: actionTypes.EMPLOYEE_INFO,
        payload: {
            pan: data.pan,
            employeeName: data.employeeName,
            bankName: data.bankName,
            bankAccountNo: data.bankAccountNo,
            dateOfJoining: parse(data.dateOfJoining, "dd MMM yyyy", new Date()),
            hasSeperated: data.dateOfSeperation !== "N/A",
            dateOfSeperation: data.dateOfSeperation === "N/A" ? new Date() : parse(data.dateOfSeperation, "dd MMM yyyy", new Date()),
            monthlyGross: data.monthlyGross,
            monthlyBasic: data.monthlyBasic,
            basic: data.basic,
            conveyanceAllowance: data.conveyanceAllowance,
            incentive: data.incentive,
            incomeTax: data.incomeTax,
            arrears: data.arrears
        }
    }
}

export function updateState() {
    return {
        type: "STATE"
    }
}

export function reset() {
    return {
        type: actionTypes.RESET
    }
}