import React from 'react'
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import {
    updateEmployeeId,
    updateEmployeeInfo
} from '../actions';

function EmployeeId() {

    const employeeId = useSelector(state => state.employeeId);
    const error = useSelector(state => state.employeeIdError);
    const employeeIds = useSelector(state => state.employeeIds);
    const dispatch = useDispatch();

    return (
        <Autocomplete
            freeSolo
            id="employeeIdAutocomplete"
            disableClearable
            options={employeeIds}
            getOptionLabel={(option) => option.id}
            onChange={(event, newValue) => {
                dispatch(updateEmployeeId(newValue.id));
                dispatch(updateEmployeeInfo(newValue.data));
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Employee Id"
                    margin="normal"
                    variant="outlined"
                    value={employeeId}
                    error={error}
                    helperText={error ? "Please Enter Employee Id" : ""}
                    onChange={(event) => dispatch(updateEmployeeId(event.target.value))}
                    InputProps={{ ...params.InputProps }}
                />
            )}
        />

    )
}

export default EmployeeId
