import React from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import './Dates.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Dates({ hasSeperated, setHasSeperated, dateOfSeperation, dateOfJoining, setDateOfSeperation, setDateOfJoining }) {
    const onHasSeperatedChange = (event) => {
        setHasSeperated(event.target.checked)
    }
    return (
        <div className="Dates">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <KeyboardDatePicker
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    margin="none"
                    id="date-picker-inline"
                    label="Date of Joining"
                    format="MMM, dd yyyy"
                    value={dateOfJoining}
                    onChange={setDateOfJoining}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />

                <div style={{ display: 'flex', height: '70px', alignItems: 'center' }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={hasSeperated}
                                onChange={onHasSeperatedChange}
                                name="Seperated"
                                color="primary"
                            />
                        }
                        label="Seperated"
                    />
                    {hasSeperated &&
                        <KeyboardDatePicker style={{ flexGrow: '1' }}
                            autoOk
                            variant="inline"
                            inputVariant="outlined"
                            margin="none"
                            id="date-picker-inline"
                            label="Date of Seperation"
                            format="MMM, dd yyyy"
                            value={dateOfSeperation}
                            onChange={setDateOfSeperation}
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
