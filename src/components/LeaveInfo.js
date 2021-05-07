import React from 'react';
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';


function LeaveInfo(
    {
        opening,
        earned,
        availed,
        closing,
        setOpening,
        setEarned,
        setAvailed,
        setClosing
    }

) {
    return (
        <Card className="card">
            <p className="title">Leave Balance</p>

            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Opening"
                    variant="outlined"
                    type="number"
                    value={opening}
                    onChange={(e) => setOpening(e.target.value)} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Earned"
                    variant="outlined"
                    type="number"
                    value={earned}
                    onChange={(e) => setEarned(e.target.value)} />
            </div>
            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Availed"
                    variant="outlined"
                    type="number"
                    value={availed}
                    onChange={(e) => setAvailed(e.target.value)} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Closing"
                    variant="outlined"
                    type="number"
                    value={closing}
                    onChange={(e) => setClosing(e.target.value)} />
            </div>
        </Card>
    )
}

export default LeaveInfo
