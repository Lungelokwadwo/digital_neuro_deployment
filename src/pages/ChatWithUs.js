import React from 'react'
import "./chatWithUs.css"

const chatWithUs = () => {
    return (
        <div className='chatWithUs'>
            <h3 className='underline'>Chat with us via Facebook/Instagram anytime.</h3>
            <Contact />
        </div>
    )
}

function Contact() {
    return (
        <div>
            <Contact1 />
        </div>
    )
}
const Contact1 = () => {
    return (
        <section className='combined_content'>
            <div className='images'>
                <img className='split C-img' src="./digital.jpg" alt="Digital Neuro Profile Picture on Facebook/Instagram" />
                <Cdetails1 />
            </div>
        </section>
    )
}
function Cdetails1() {
    return (
        <div>
            <div>
                <span>Facebook :</span>
                <a className='split' href="https://m.facebook.com/Digital-Neuro-100310489301281/">Digital Neuro</a>
            </div>
            <div>
                <span>Instagram :</span>
                <a className='split' href="https://instagram.com/digital_neuro7?utm_medium=copy_link">digital_neuro7</a>
            </div>
            <p>
                Contact No : 035 301 5842
            </p>
        </div>
    )
}
export default chatWithUs