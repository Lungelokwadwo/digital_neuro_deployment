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
                <img className='split C-img' src="https://scontent.fgcj1-1.fna.fbcdn.net/v/t39.30808-6/219962963_950793562158957_3184897497503640917_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGJms9jRu8Pug7XtiePWilhdno8KJSDcXd2ejwolINxd1fMxB3SucEkT9kmbrD6noPdQQJ7nwreS4zMgQ3UjB88&_nc_ohc=DEuv_2IKTm4AX8dtPP2&_nc_ht=scontent.fgcj1-1.fna&oh=00_AT8qbE_5AlVhRri9ur9DFhTgx6vPgtFxaCPWgbffkNZBHA&oe=62410FCE" alt="Lungelo_image" />
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
                <a className='split' href="https://www.facebook.com/lungelo.ngobese.581?__tn__=-UC*F">Lungelo Adu-Yamoah</a>
            </div>
            <div>
                <span>Instagram :</span>
                <a className='split' href="https://www.instagram.com/lungelo_adu_yamoah/">@lungelo_adu_yamoah</a>
            </div>
            <p>
                Contact No : 0606888581
            </p>
        </div>
    )
}
export default chatWithUs