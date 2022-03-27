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
                <img className='split C-img' src="https://scontent.fgcj1-1.fna.fbcdn.net/v/t39.30808-6/277178082_104069242258739_1239683435336153117_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&ccb=1-5&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeGl-wvWodo4WlfIa9Hp4lU6msrnuDYoff-ayue4Nih9_6YLPz3gCc46mT_020BVAB4M_VBi0vKenT15rIUL15lq&_nc_ohc=1x33NOGFo7YAX_E8zaf&_nc_ht=scontent.fgcj1-1.fna&oh=00_AT-rfzsV3vVWLphkomGI0qGQ96Vb1_VRp7CzAemtqxwZ7Q&oe=62440CAE" alt="Lungelo_image" />
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