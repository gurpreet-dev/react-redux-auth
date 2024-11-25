import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { authService } from '../services'
import { logout } from '../store/slices/AuthSlice'

function LogoutBtn() {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then((res) => {
            dispatch(logout());
        }).catch((error) => {
            alert('Something went wrong!')
        })
    }

    return (
        <>
            <Button
                variant="outline-danger"
                onClick={logoutHandler}
            >Logout</Button>
        </>
    )
}

export default LogoutBtn