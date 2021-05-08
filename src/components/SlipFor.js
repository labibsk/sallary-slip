import React from 'react'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { updateDate } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function SlipFor() {
    const date = useSelector(state => state.date);
    const dispatch = useDispatch();

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <DatePicker
                autoOk
                views={["month", "year"]}
                variant="inline"
                inputVariant="outlined"
                margin="none"
                fullWidth={true}
                id="date-picker-inline"
                label="Payslip For"
                value={date}
                onChange={(date) => dispatch(updateDate(date))}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    )
}

export default SlipFor
