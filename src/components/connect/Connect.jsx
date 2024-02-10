import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import ConnectContainer from './ConnectContainer'

const Connect = () => {

return (
    <>
        <Header />
        <Sidebar active={"connect"} />
        <ConnectContainer />
    </>
)};


export default Connect;