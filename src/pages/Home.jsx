import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import featureImg from '../assets/images/feature-img.png'
import faqImg from '../assets/images/faq-img.png'
import { Link } from 'react-router-dom'
import { BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'
import ServicesList from '../components/Services/ServicesList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'

const Home = () => {
  return (
    
    <>
        {/* // Hero section */}
        <section className='hero__section pt-[60px] 2xl:h-[800px]
        mb-20'>
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px]
            items-center justify-between">
                {/* hero content */}
                <div>
                  <div className="lg:w-[570px]">
                    <h1 className='text-[36px] leading-[46px] text-headingColor
                    font-[800] md:text-[60px] md:leading-[70px]'>
                      We help patients live a healthy, longer life.
                    </h1>
                    <p className='text__para'>
                    Welcome to Medicare, where your health is our top priority. Our online appointment booking system is designed to make scheduling a doctor's visit quick and convenient.
                    </p>
                    <Link to="/doctors">
                        <button className='btn'>Request an Appointment</button>
                    </Link>
                  </div>

                  {/* hero counter */}
                  <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row
                  lg:items-center gap-5 lg:gap-[30px]'>
                    <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px]
                      lg:leading-[54px] font-[700] text-headingColor'>
                        30+
                      </h2>
                      <span className='w-[100px] h-2 bg-yellowColor rounded-full
                      block mt-[-14px]'></span>
                      <p className='text__para'>Years of Experience</p>
                    </div>
                    <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px]
                      lg:leading-[54px] font-[700] text-headingColor'>
                        15+
                      </h2>
                      <span className='w-[100px] h-2 bg-purpleColor rounded-full
                      block mt-[-14px]'></span>
                      <p className='text__para'>Clinic Location</p>
                    </div>
                    <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px]
                      lg:leading-[54px] font-[700] text-headingColor'>
                        100%
                      </h2>
                      <span className='w-[100px] h-2 bg-irisBlueColor rounded-full
                      block mt-[-14px]'></span>
                      <p className='text__para'>Patient Satisfaction</p>
                    </div>
                  </div>

                </div>
                {/* hero content */}
                <div className='flex gap-[30px] justify-end'>
                  <div>
                    <img src={heroImg01} alt="" className='w-full'/>
                  </div>
                  <div className='mt-[30px]'>
                  <img src={heroImg02} alt="" className='w-full mb-[30px]'/>
                  <img src={heroImg03} alt="" className='w-full'/>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* // Hero section Ends */}
        

           
                
                  
          
                

                  
              
                
                  
            

        <About />

        {/* service section */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className='heading text-center'>
                Our Medical Services
              </h2>
              <p className="text__para text-center">
              Our medical services at Medicare offer a wide range of specialties, ensuring personalized care for every patient. 
              </p>
            </div>
            <ServicesList />
          </div>
        </section>

        {/* feature sectoin */}
        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col
            lg:flex-row">
              {/* feature content */}
              <div className='xl:w-[670]'>
                <h2 className="heading">
                  Get virtual treatement <br /> anytime.
                </h2>
                <ul className="pl-4">
                  <li className="text__para">
                    1.Schedule the appoinemnt directly
                  </li>
                  <li className="text__para">
                    2.Know your healty standarts
                  </li>
                  <li className="text__para">
                    3.Be ready to live like a healthy life
                  </li>
                </ul>
                
              </div>
              {/* feature img */}
              <div className="relative z-10 xl:w-[770px] flex justify-end
              mt-[50px] lg:mt-0">
                <img 
                  src={featureImg}
                  alt=''
                  className='w-3/4'
                />
                <div className='w-[150px] lg:w-[248px] bg-white absolute
                bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20
                p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px]
                    lg:gap-3">
                      
                      
                    </div>
                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px]
                    flex items-center justify-center bg-yellowColor py-1
                    px-[6px] lg:py-3 lg:px-[9px]">
                      <img 
                        src={videoIcon}
                        alt=''
                      />
                    </span>
                  </div>

                  
                  
                  
                </div>  
              </div>
            </div>
          </div>
        </section>

        {/* our great doctors */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
                  <h2 className='heading text-center'>
                    Our Great Doctors
                  </h2>
                  <p className="text__para text-center">
                  Our hospital boasts a team of exceptional doctors renowned for their expertise and compassion.<br></br> They deliver outstanding care, prioritizing patient well-being and satisfaction. 
                  </p>
                </div>
                <DoctorList />
            </div>
        </section>

        {/* faq */}
        

        {/* testimonial */}
        
    </>
  )
}

export default Home