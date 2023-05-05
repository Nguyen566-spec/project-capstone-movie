import React from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastMessage = () => {
    const toastClone = {
        error: (message) => toast(message, { type: 'errror' }),
        success: (message) => toast(message, { type: 'success' }),
    }
    Object.assign(message, toastClone)
    return (
        <div>
            <ToastContainer position='top-center'/>
        </div>
    )
}

export const message = {}
