import React from 'react';
import './sidebar.css';
import logo from './asserts/logo.svg';
import response from './asserts/response.svg';
import home from './asserts/home.svg';
import messages from './asserts/messages.svg';
import task from './asserts/tasks.svg';
import members from './asserts/members.svg';
import settings from './asserts/settings.svg';
import 'bootstrap/dist/css/bootstrap.css';



const Sidebar = () => {
    return (
        <>
        <section className='cont'>
            <section className='logo p-4'>
                <div className='logo1' >
                    <img src={logo} alt='Project M.' />
                </div>
                <div className='text'>Project M.</div>
                <div className='r1'>
                     <img className='' src={response}></img>
                </div>
            </section>
            <section className='menu p-4'>
                <div className='menu1'>
                    {/* <img src={home}></img>
                    <img src={messages}></img>
                    <img src={task}></img>
                    <img src={members}></img>
                    <img src={settings}></img> */}
                    <p><img src={home}></img></p>
                    <p><img src={messages}></img></p>
                    <p><img src={task}></img></p>
                    <p><img src={members}></img></p>
                    <p><img src={settings}></img></p>
                    
                </div>
            <link></link>

            </section>
            
            </section>
            
        </>
    )
}

export default Sidebar
