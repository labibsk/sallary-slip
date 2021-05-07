import React from 'react'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function SlipFor({ payslipFor, setPayslipFor, payslipForError }) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <DatePicker
                autoOk
                views={["month", "year"]}
                variant="inline"
                inputVariant="outlined"
                margin="none"
                error={payslipForError}
                fullWidth={true}
                id="date-picker-inline"
                label="Payslip For"
                value={payslipFor}
                onChange={setPayslipFor}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    )
}

export default SlipFor
