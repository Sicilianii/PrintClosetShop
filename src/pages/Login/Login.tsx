import React from 'react';
import BlueButton from "../../shareds/ui/BlueButton/BlueButton";
import './_Login.scss';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <form className='start-form'>
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
                        fontWeightBnt={'bold'}>Login</BlueButton>
            <span>Don't have an account? <Link to="/login/registration" style={{color: '#79A6EC'}}>Registration</Link></span>
        </form>
    );
}

export default Login;