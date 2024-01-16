import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import LeaveList from './LeaveList'
import ActionForm from './ActionForm'
import { useState } from 'react'
import axiosInstance from '../Utils/axiosInstance'
import { useDispatch } from 'react-redux'
import { addLeave } from '../Utils/leaveSlice'

const LeaveManagement = () => {

    const [open, setOpen] = useState(false)
    const [action, setAction] = useState("")
    const [leaveId, setLeaveId] = useState("")
    const [comment, setComment] = useState('');
    const dispatch = useDispatch()

    const leaveAction = async (action, comment) => {
        const response = await axiosInstance.post("/users/leave-action", {
            id: leaveId,
            action: action,
            comment: comment
        })
            .then(response => {
                dispatch(addLeave(response.data));
                setOpen(false)
            }).catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>  <Header />
            <Sidebar active={"leave"} />
            <LeaveList setOpen={setOpen} setAction={setAction} setLeaveId={setLeaveId} setComment={setComment} />
            <ActionForm setOpen={setOpen} action={action} open={open} leaveAction={leaveAction} setComment={setComment} comment={comment} />
        </>
    )
}

export default LeaveManagement