import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Home function is used as the component that display what is inside of DigitalNeuroApp function.
const Home = () => {
  return (
    <>
        <DigitalNeuroApp/>
    </>
  )
}
// DigitalNeuroApp returns data from news list
function DigitalNeuroApp(){
  return (
    <section>
      <NewsList/>
    </section>
  )
}
// NewsList calls Content function to set and display properties or data from object News1, news2 etc,
function NewsList(){
  return(
    <section >
      <h5 className='feed'>News feed</h5>
      {/* Add content anywhere first you'll need to create an object you'll use in your content */}
      <Content heading={News4.heading} img={News4.img} author={News4.author} text={News4.text} link={News4.link}/>
      <Content heading={News5.heading} img={News5.img} author={News5.author} text={News5.text} link={News5.link}/>
      <Content heading={News6.heading} img={News6.img} author={News6.author} text={News6.text} link={News6.link}/>
      <Content heading={News1.heading} img={News1.img} author={News1.author} text={News1.text} link={News1.link}/>
      <Content heading={News2.heading} img={News2.img} author={News2.author} text={News2.text} link={News2.link}/>
      <Content heading={News3.heading} img={News3.img} author={News3.author} text={News3.text} link={News1.link}/>
    </section>
  )
}
// These objects hold data that will be used by Content function
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
const News4={
  heading: "African mask sold for over R67m in France despite protest",
  img: "https://cdn.24.co.za/files/Cms/General/d/1783/973999820d9f4bf8a25b1a8405f677a6.jpg",
  author: "via News24",
  text: "A carved mask from Central Africa, dating from the 19th century, was sold in France for 4.2 million euros (over $67 million) on Saturday, despite Gabonese protesters in the auction house calling for the item’s “‘restitution”.",
  link: "https://www.news24.com/news24/Africa/News/african-mask-sold-for-over-r67m-in-france-despite-protest-20220327"
}
const News5={
  heading: "Pandemic impact on mental health: A global overview",
  img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/03/covid-19-silent-pandemic-thumb-732x549.jpg?w=304",
  author: "Katharine Lang",
  text: "After 2 years of living with COVID-19, the physical toll of the pandemic is evident, in terms of cases, hospitalizations and deaths, but what of the mental effects? Frontline workers and young people have been some of the hardest hit, but no one has escaped the impact of the pandemic.",
  link: "https://www.medicalnewstoday.com/articles/pandemic-impact-on-mental-health-a-global-overview"
}
const News6={
  heading: "Sleeping with the light on may increase diabetes risk",
  img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/03/bedside-lamp-sleeping-diabetes-header-1024x575.jpg?w=1155&h=1528",
  author: "Annie Lennon",
  text: "Light exposure during sleep may increase the risk for heart disease, diabetes, and metabolic syndrome. Gregor Prelog/EyeEm/Getty Images",
  link: "https://www.medicalnewstoday.com/articles/sleeping-with-the-light-on-may-increase-diabetes-risk"
}
// Create an object you want to use in NewsList

//  Content function grabs properties from the NewsList that have heading, img, author, text, and link.
//  We use these properties inside tags to display them.
const Content=(props)=>{
  return(
    <section className='content'>
    <h4 className='background'>{props.heading}</h4>
    <img src={props.img} alt="" />
    <p className='background font'>{props.text} <a className='background' href={props.link}>Read More</a></p>
    <h6 className='background'>{props.author}</h6>
  </section>
  )
}
export default Home