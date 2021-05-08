import React from 'react'
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import './Dates.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import { updateDateOfJoining, updateDateOfSeperation, updateHasSeperated } from '../actions';

function Dates() {

    const dateOfJoining = useSelector(state => state.dateOfJoining);
    const hasSeperated = useSelector(state => state.hasSeperated);
    const dateOfSeperation = useSelector(state => state.dateOfSeperation);

    const dispatch = useDispatch();

    return (
        <div className="Dates">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <DatePicker
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    margin="none"
                    id="dateOfJoining"
                    label="Date of Joining"
                    format="MMM, dd yyyy"
                    value={dateOfJoining}
                    onChange={(date) => dispatch(updateDateOfJoining(date))}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />

                <div style={{ display: 'flex', height: '70px', alignItems: 'center' }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={hasSeperated}
                                onChange={(event) => dispatch(updateHasSeperated(event.target.checked))}
                                name="Seperated"
                                color="primary"
                            />
                        }
                        label="Seperated"
                    />
                    {hasSeperated &&
                        <DatePicker style={{ flexGrow: '1' }}
                            autoOk
                            variant="inline"
                            inputVariant="outlined"
                            margin="none"
                            id="dateOfSeperation"
                            label="Date of Seperation"
                            format="MMM, dd yyyy"
                            value={dateOfSeperation}
                            onChange={(date) => dispatch(updateDateOfSeperation(date))}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />}
                </div>
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default Dates
