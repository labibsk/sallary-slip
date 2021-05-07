import React from 'react'
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

function EmployeeId({ employeeIds, employeeId, setEmployeeId }) {

    const onEmployeeIdChange = (event) => {
        setEmployeeId(event.target.value);
    };

    return (
        <Autocomplete
            freeSolo
            id="employeeIdAutocomplete"
            disableClearable
            value={employeeId}
            onChange={onEmployeeIdChange}
            options={employeeIds.map((option) => option)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="EmployeeId"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps }}
                />
            )}
        />
    )
}

export default EmployeeId
