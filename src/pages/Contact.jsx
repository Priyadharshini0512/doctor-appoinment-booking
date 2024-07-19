import {useRef} from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zs2vu3r', 'template_rhoc95p', form.current, {
            publicKey: 'dMWAQhZPhirkmSI8Y',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };

  return (
    <section className='my-10'>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
        Feel free to contact us here if you encounter any issues.
        </p>
        <form ref={form} onSubmit={sendEmail} action="#" className='space-y-8'>
        <div>
            <label htmlFor="text" className='form__label'>
              Your Name
            </label>
            <input 
              type="text" 
              name="user_name"
              placeholder='Full Name'
              className='form__input mt-1'
              />
          </div>
          <div>
            <label htmlFor="email" className='form__label'>
              Your Email
            </label>
            <input 
              type="email" 
              name="user_email"
              placeholder='example@gmail.com'
              className='form__input mt-1'
              />
          </div>
          <div>
            <label htmlFor="subject" className='form__label'>
              Subject
            </label>
            <input 
              type="text" 
              name="subject"
              placeholder='write the subject or title'
              className='form__input mt-1'
              />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form__label'>
              Your Message
            </label>
            <textarea 
              rows='6'
              name="message"
              placeholder='your message here'
              className='form__input mt-1'
              />
          </div>
          <button type="submit" className='btn rounded sm:w-fit'>
            Send Message
          </button>
        </form>
      </div>
    </section>  
)
}

export default Contact