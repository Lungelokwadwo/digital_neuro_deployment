import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <>
        <DigitalNeuroApp/>
    </>
  )
}
function DigitalNeuroApp(){
  return (
    <section>
      <NewsList/>
    </section>
  )
}
function NewsList(){
  return(
    <section >
      <Content heading={News1.heading} img={News1.img} author={News1.author} text={News1.text} link={News1.link}/>
      <Content heading={News2.heading} img={News2.img} author={News2.author} text={News2.text} link={News2.link}/>
      <Content heading={News3.heading} img={News3.img} author={News3.author} text={News3.text} link={News1.link}/>
    </section>
  )
}
const News1={
  heading: "West Midlands Ambulance Service helps Ukraine cancer patients",
  img:  "https://ichef.bbci.co.uk/news/1024/branded_news/100CC/production/_123704756_fn03fyrxeaalmoq.jpg",
  author: "via BBC News",
  text: "More than 50 ambulance staff assisted an operation to get child patients to UK hospitals..",
  link: "https://www.bbc.co.uk/news/uk-england-birmingham-60748511?at_medium=RSS&at_campaign=KARANGA"
}
const News2={
  heading: "Covid-19 pandemic hit outlook for lung cancer patients",
  img: "https://ichef.bbci.co.uk/news/1024/branded_news/AB5B/production/_96876834_gettyimages-100974359.jpg",
  author: "via BBC News",
  text: "Surgery was down by 40%, affecting an estimated 52 patients, while radiotherapy treatment fell by 27%.",
  link: "https://www.bbc.co.uk/news/uk-northern-ireland-60751744?at_medium=RSS&at_campaign=KARANGA"
}
const News3={
  heading: "In Africa, a Mix of Shots Drives an Uncertain Covid Vaccination Push",
  img: "https://static01.nyt.com/images/2022/03/15/science/00sci-virus-vaccination-global1/00sci-virus-vaccination-global1-facebookJumbo.jpg",
  author: "via New York Times",
  text: "Supplies are more plentiful now but they are unpredictable and often a jumble of brands. Many places can’t meet the W.H.O.’s recommended dosing schedules.",
  link: "https://www.nytimes.com/2022/03/15/health/covid-vaccines-africa.html"
}

const Content=(props)=>{
  return(
    <section className='content'>
    <h4 className='background'>{props.heading}</h4>
    <img src={props.img} alt="" />
    <p className='background font'>{props.text} <a className='background' href={props.link}>Read More</a></p>
    <p className='background'></p>
    <h6 className='background'>{props.author}</h6>
  </section>
  )
}
export default Home