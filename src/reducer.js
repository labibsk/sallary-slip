import * as actionTypes from './actionTypes';

function monthDays(date) {
    var d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return d.getDate();
}

const today = new Date();
const daysMonth = monthDays(today);
const initial = {
    date: today,
    companyPan: 'AAIFE5015H',
    employeeId: '',
    employeeName: '',
    dateOfJoining: today,
    hasSeperated: false,
    dateOfSeperation: today,
    bankName: '',
    bankAccountNo: '',
    monthlyGross: '',
    monthlyBasic: '',
    daysMonth: daysMonth.toString(),
    daysPayable: '',
    pan: '',
    basic: '',
    conveyanceAllowance: '',
    incentive: '',
    incomeTax: '',
    arrears: '',
    employeeIds: [],
    saving: false,
    savingMessage: 'Saving..'
}

export default function reducer(state = initial, action) {
    console.log("Reducer called : ", action)
    switch (action.type) {
        case actionTypes.DATE: return { ...state, date: action.payload }
        case actionTypes.COMPANY_PAN: return { ...state, companyPan: action.payload }
        case actionTypes.EMPLOYEE_ID: return { ...state, employeeId: action.payload }
        case actionTypes.EMPLOYEE_NAME: return { ...state, employeeName: action.payload }
        case actionTypes.DATE_OF_JOINING: return { ...state, dateOfJoining: action.payload }
        case actionTypes.HAS_SEPERATED: return { ...state, hasSeperated: action.payload }
        case actionTypes.DATE_OF_SEPERATION: return { ...state, dateOfSeperation: action.payload }
        case actionTypes.BANK_NAME: return { ...state, bankName: action.payload }
        case actionTypes.BANK_ACCOUNT_NO: return { ...state, bankAccountNo: action.payload }
        case actionTypes.MONTHLY_GROSS: return { ...state, monthlyGross: action.payload }
        case actionTypes.MONTHLY_BASIC: return { ...state, monthlyBasic: action.payload }
        case actionTypes.DAYS_MONTH: return { ...state, daysMonth: action.payload }
        case actionTypes.DAYS_PAYABLE: return { ...state, daysPayable: action.payload }
        case actionTypes.PAN: return { ...state, pan: action.payload }
        case actionTypes.BASIC: return { ...state, basic: action.payload }
        case actionTypes.CONVEYANCE_ALLOWANCE: return { ...state, conveyanceAllowance: action.payload }
        case actionTypes.INCENTIVE: return { ...state, incentive: action.payload }
        case actionTypes.INCOME_TAX: return { ...state, incomeTax: action.payload }
        case actionTypes.ARREARS: return { ...state, arrears: action.payload }
        case actionTypes.EMPLOYEE_IDS: return { ...state, employeeIds: action.payload }
        case actionTypes.SAVING: return { ...state, saving: action.payload }
        case actionTypes.SAVING_MESSAGE: return { ...state, savingMessage: action.payload }

        // Errors
        case actionTypes.EMPLOYEE_ID_ERROR: return { ...state, employeeIdError: action.payload }
        case actionTypes.EMPLOYEE_NAME_ERROR: return { ...state, employeeNameError: action.payload }
        case actionTypes.COMPANY_PAN_ERROR: return { ...state, companyPanError: action.payload }
        case actionTypes.PAN_ERROR: return { ...state, panError: action.payload }
        case actionTypes.BANK_NAME_ERROR: return { ...state, bankNameError: action.payload }
        case actionTypes.BANK_ACCOUNT_NO_ERROR: return { ...state, bankAccountNoError: action.payload }
        case actionTypes.MONTHLY_BASIC_ERROR: return { ...state, monthlyBasicError: action.payload }
        case actionTypes.MONTHLY_GROSS_ERROR: return { ...state, monthlyGrossError: action.payload }
        case actionTypes.DAYS_MONTH_ERROR: return { ...state, daysMonthError: action.payload }
        case actionTypes.DAYS_PAYABLE_ERROR: return { ...state, daysPayableError: action.payload }
        case actionTypes.BASIC_ERROR: return { ...state, basicError: action.payload }
        case actionTypes.CONVEYANCE_ALLOWANCE_ERROR: return { ...state, conveyanceAllowanceError: action.payload }
        case actionTypes.INCENTIVE_ERROR: return { ...state, incentiveError: action.payload }
        case actionTypes.INCOME_TAX_ERROR: return { ...state, incomeTaxError: action.payload }
        case actionTypes.ARREARS_ERROR: return { ...state, arrearsError: action.payload }
        case actionTypes.EMPLOYEE_INFO: return { ...state, ...action.payload }
        case actionTypes.RESET: return { ...initial, employeeIds: state.employeeIds }

        default: return { ...initial };
    }
}