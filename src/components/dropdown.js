import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const menuStyle = makeStyles({
    button: {
        margin: '0px',
        background: 'black',
        zIndex: 10,
    },
    input: {
        display: 'none',
    },
})

export default function SimpleMenu() {
    const menu = menuStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={menu.button}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Date & Location</MenuItem>
                <MenuItem onClick={handleClose}>Tickets</MenuItem>
                <MenuItem onClick={handleClose}>Checkout</MenuItem>
                <MenuItem onClick={handleClose}>Confirm</MenuItem>
            </Menu>
        </div>
    );
}