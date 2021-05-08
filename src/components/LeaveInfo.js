import React from 'react';
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { updateEarned, updateOpening, updateAvailed, updateClosing } from '../actions';


function LeaveInfo() {

    const opening = useSelector(state => state.opening);
    const earned = useSelector(state => state.earned);
    const availed = useSelector(state => state.availed);
    const closing = useSelector(state => state.closing);

    const openingError = useSelector(state => state.openingError);
    const earnedError = useSelector(state => state.earnedError);
    const availedError = useSelector(state => state.availedError);
    const closingError = useSelector(state => state.closingError);

    const dispatch = useDispatch();

    return (
        <Card className="card">
            <p className="title">Leave Balance</p>

            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="opening"
                    label="Opening"
                    variant="outlined"
                    type="number"
                    value={opening}
                    error={openingError}
                    helperText={openingError ? "Please Enter Opening" : ""}
                    onChange={(e) => dispatch(updateOpening(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="earned"
                    label="Earned"
                    variant="outlined"
                    type="number"
                    value={earned}
                    error={earnedError}
                    helperText={earnedError ? "Please Enter Earned" : ""}
                    onChange={(e) => dispatch(updateEarned(e.target.value))} />
            </div>
            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="availed"
                    label="Availed"
                    variant="outlined"
                    type="number"
                    value={availed}
                    error={availedError}
                    helperText={availedError ? "Please Enter Availed" : ""}
                    onChange={(e) => dispatch(updateAvailed(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="closing"
                    label="Closing"
                    variant="outlined"
                    type="number"
                    value={closing}
                    error={closingError}
                    helperText={closingError ? "Please Enter Closing" : ""}
                    onChange={(e) => dispatch(updateClosing(e.target.value))} />
            </div>
        </Card>
    )
}

export default LeaveInfo
