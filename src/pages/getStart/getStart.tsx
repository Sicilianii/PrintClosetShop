import React from 'react';
import BlueButton from "../../shareds/ui/BlueButton/BlueButton";
import './_getStart.scss';

const GetStart = () => {
    return (
        <section className='container start'>
            <div className='start-banner'>
                <img className='start-banner__img' src={require('../../shareds/assets/banner.jpg')} alt="Registration & Login"/>
            </div>
            <div className='start-des'>
                <h1 className='start-des__h1'>PrintClosetShop</h1>
                <h2 className='start-des__h2'>Registration & Login</h2>
                <BlueButton paddingGtn={'17px 50px'} type={"button"} fontSIzeBnt={'14px'} fontWeightBnt={'bold'}>Sing Up</BlueButton>
            </div>
        </section>
    );
}

export default GetStart;