import React from 'react'
import './EnterUser.scss';


const EnterUser:React.FC = () => {
    return (
        <div className='enter-user d-flex flex-column justify-content-center align-items-center'>
            <img src="https://i.ibb.co/p4Tkh8t/undraw-Programming-re-kg9v.png" alt="undraw-Programming-re-kg9v" width="400px" />
            <h2 className='text-white'>Ingresa el nombre de un usuario</h2>
        </div>
    )
}

export default EnterUser;
