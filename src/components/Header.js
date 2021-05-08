import React from 'react';
import { Card, TextField } from "@material-ui/core";
import EmployeeId from './EmployeeId';
import SlipFor from './SlipFor';
import { useSelector, useDispatch } from 'react-redux';
import { updateCompanyPan } from '../actions';

function Header() {

    const companyPan = useSelector(state => state.companyPan);
    const error = useSelector(state => state.companyPanError);
    const dispatch = useDispatch();

    return (
        <Card className="card">
            <div className="horizontal">
                <SlipFor className="horizontalItem" />

                <TextField
                    className="horizontalItem"
                    id="outlined-basic"
                    label="Company PAN"
                    variant="outlined"
                    fullWidth={true}
                    value={companyPan}
                    error={error}
                    helperText={error ? "Please Enter Company PAN" : ""}
                    onChange={(e) => dispatch(updateCompanyPan(e.target.value))} />
            </div>

            <EmployeeId className="employeeId" />
        </Card>
    )
}

export default Header
