import React from 'react';
import BlueButton from "../../shareds/ui/BlueButton/BlueButton";
import {Link} from "react-router-dom";

function Registration() {
    return (
        <form className='start-form'>
            <input
                className='start-form__pass'
                type="text"
                required
                pattern={'[A-Za-z]*'}
                placeholder='Your Name'
            />
            <input
                className='start-form__email'
                type="email"
                required
                pattern={'[A-Za-z1-9]*@[mail | com | ru | rambler | bk].[ru | com]'}
                placeholder='Your Email'
            />
            <input
                className='start-form__pass'
                type="password"
                required
                pattern={'[A-Za-z1-9]*'}
                placeholder='Your Password'
            />
            <BlueButton paddingGtn={'17px 50px'} type={"submit"} fontSIzeBnt={'14px'}
                        fontWeightBnt={'bold'}>Registration</BlueButton>
            <span>Have an account? <Link to="/login" style={{color: '#79A6EC'}}>Login</Link></span>
        </form>
    );
}

export default Registration;