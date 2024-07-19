import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between gap-[50px]
            lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* About img */}
                <div className='relative w-3/4 lg:w-1/2
                xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} alt='about' />
                    <div className="absolute z-20 bottom-4 w-[200px]
                    md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[-22%]">
                        <img 
                            src={aboutCardImg}
                            alt=''
                        />
                    </div>
                </div>    
                {/* About content */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className='heading'>
                        Proud to be one of the nations best
                    </h2>
                    <p className="text__para">
                    Our hospital is honored to be home to some of the nation's best doctors. These esteemed professionals are renowned for their exceptional skills, compassionate care, and dedication to medical excellence. Each doctor brings a wealth of experience and knowledge, ensuring that our patients receive the highest standard of treatment.
                    </p>
                    <p className="text__para mt-[30px]">
                    Their commitment to innovation and continuous learning keeps our hospital at the forefront of healthcare, providing outstanding care and improving patient outcomes every day.
                    </p>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About