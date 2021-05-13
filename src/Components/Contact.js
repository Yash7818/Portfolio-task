import React from 'react';

export default function Contact(){
    return(
        <>
            <h1>Contact</h1>
            <div className="contact-spec" >
                <div className="speci1_cont"> 
                    <div className="instagram"><i className="fas fa-phone-square-alt"></i><span>+91-7017005842</span></div>
                    <div className="mail"><i className="far fa-envelope"></i><span>sourabhvarshney111@gmail.com</span></div>
                    <div className="twitter"><i className="fab fa-twitter"></i><span>@VarshneySourabh</span></div>
                </div>
                <div className="speci2_cont">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56351.801681239784!2d79.09396595503058!3d28.024854661190094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397545b8ad7dec33%3A0x995aeefd69565aa5!2sBudaun%2C%20Uttar%20Pradesh%20243601!5e0!3m2!1sen!2sin!4v1620893838288!5m2!1sen!2sin" width="450" height="300" frameborder="0" style={{border:0,borderRadius:"1em",boxShadow:"#afaaaaab 1px 1px 6px 4px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
               
            </div>
        </>
    );
}