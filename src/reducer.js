import * as actionTypes from './actionTypes';

const today = new Date();
const initial = {
    date: today,
    companyPan: '',
    employeeId: '',
    dateOfJoining: today,
    hasSeperated: false,
    dateOfSeperation: today,
    bankName: '',
    bankAccountNo: '',
    monthlyGross: '',
    monthlyBasic: '',
    daysMonth: '',
    daysPayable: '',
    pan: '',
    opening: '',
    earned: '',
    availed: '',
    closing: '',
    basic: '',
    conveyanceAllowance: '',
    incentive: '',
    incomeTax: '',
    arrears: '',
    employeeIds: [
        "2986",
    ]
}

export default function reducer(state = initial, action) {
    switch (action.type) {
        case actionTypes.DATE: return { ...state, date: action.payload }
        case actionTypes.COMPANY_PAN: return { ...state, companyPan: action.payload }
        case actionTypes.EMPLOYEE_ID: return { ...state, employeeId: action.payload }
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
        case actionTypes.OPENING: return { ...state, opening: action.payload }
        case actionTypes.EARNED: return { ...state, earned: action.payload }
        case actionTypes.AVAILED: return { ...state, availed: action.payload }
        case actionTypes.CLOSING: return { ...state, closing: action.payload }
        case actionTypes.BASIC: return { ...state, basic: action.payload }
        case actionTypes.CONVEYANCE_ALLOWANCE: return { ...state, conveyanceAllowance: action.payload }
        case actionTypes.INCENTIVE: return { ...state, incentive: action.payload }
        case actionTypes.INCOME_TAX: return { ...state, incomeTax: action.payload }
        case actionTypes.ARREARS: return { ...state, arrears: action.payload }
        case actionTypes.EMPLOYEE_IDS: return { ...state, employeeIds: action.payload }

        // Errors
        case actionTypes.EMPLOYEE_ID_ERROR: return { ...state, employeeIdError: action.payload }
        case actionTypes.COMPANY_PAN_ERROR: return { ...state, companyPanError: action.payload }
        case actionTypes.PAN_ERROR: return { ...state, panError: action.payload }
        case actionTypes.BANK_NAME_ERROR: return { ...state, bankNameError: action.payload }
        case actionTypes.BANK_ACCOUNT_NO_ERROR: return { ...state, bankAccountNoError: action.payload }
        case actionTypes.MONTHLY_BASIC_ERROR: return { ...state, monthlyBasicError: action.payload }
        case actionTypes.MONTHLY_GROSS_ERROR: return { ...state, monthlyGrossError: action.payload }
        case actionTypes.DAYS_MONTH_ERROR: return { ...state, daysMonthError: action.payload }
        case actionTypes.DAYS_PAYABLE_ERROR: return { ...state, daysPayableError: action.payload }
        case actionTypes.OPENING_ERROR: return { ...state, openingError: action.payload }
        case actionTypes.EARNED_ERROR: return { ...state, earnedError: action.payload }
        case actionTypes.AVAILED_ERROR: return { ...state, availedError: action.payload }
        case actionTypes.CLOSING_ERROR: return { ...state, closingError: action.payload }
        case actionTypes.BASIC_ERROR: return { ...state, basicError: action.payload }
        case actionTypes.CONVEYANCE_ALLOWANCE_ERROR: return { ...state, conveyanceAllowanceError: action.payload }
        case actionTypes.INCENTIVE_ERROR: return { ...state, incentiveError: action.payload }
        case actionTypes.INCOME_TAX_ERROR: return { ...state, incomeTaxError: action.payload }
        case actionTypes.ARREARS_ERROR: return { ...state, arrearsError: action.payload }
        default: return { ...initial };
    }
}