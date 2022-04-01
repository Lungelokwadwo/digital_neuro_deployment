import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <header>OUR VALUES</header>
      <p>
        Our Values Strong value: Define our culture and help us execute the Digital Neuro strategy in line with our mission and vision. 
        We have introduced Values and Behaviours that describe the professional behaviours’ we expect from our employees.
        These values were selected by the Executive Committee of DIGITAL NEURO, with input from associates and facilitators.
        We will hold ourselves to account against these values and behaviours’.
      </p>
      <p>These values and behaviours’ are:</p>
      <ul>
        <li>Innovation: By experimenting and delivering solutions</li>
        <li> Quality: By taking pride in doing ordinary things extraordinarily well </li>
        <li>Collaboration: By championing high performing teams with diversity and inclusion</li>
        <li>Performance: By prioritizing and making things happen with urgency </li>
        <li>Courage: By speaking up, giving and receiving feedback</li>
        <li>Integrity: By advocating and applying high ethical standards every day</li>
      </ul>
      <header>OUR MISSION AND VISION</header>
      <div>
        <h5> Mission:</h5>
        <ul>
          <li>is to discover new ways to improve and extend people's lives.</li>
          <li>We will use Software Application to address some of society's most challenging mental issues.</li>
          <li>We discover and develop breakthrough treatments and find new ways to deliver them to as many people as possible</li>
          <li>We also aim to provide the best service to patients.</li>
        </ul>
      </div>
      <div>
          <h5>Vision:</h5>
          <ul>
            <li>is to be a trusted leader in changing the practice of healthcare</li>
            <li>We have a belief in maintaining a healthy work/life balance</li>
          </ul>
      </div>
    </div>
  )
}

export default About