// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const AppointmentForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_zs2vu3r', 'template_rhoc95p', form.current, 'dMWAQhZPhirkmSI8Y')
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//     e.target.reset();
//   };

//   return (
//     <section className='my-10'>
//       <div className="px-4 mx-auto max-w-screen-md">
//         <h2 className="heading text-center">
//           Book an Appointment
//         </h2>
//         <p className="mb-8 lg:mb-16 font-light text-center text__para">
//           Please fill out the form below to book an appointment.
//         </p>
//         <form ref={form} onSubmit={sendEmail} className='space-y-8'>
//           <div>
//             <label htmlFor="name" className='form__label'>
//               Your Name
//             </label>
//             <input 
//               type="text" 
//               name="user_name"
//               placeholder='Full Name'
//               className='form__input mt-1'
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className='form__label'>
//               Your Email
//             </label>
//             <input 
//               type="email" 
//               name="user_email"
//               placeholder='example@gmail.com'
//               className='form__input mt-1'
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="doctor_name" className='form__label'>
//               Doctor's Name
//             </label>
//             <input 
//               type="text" 
//               name="doctor_name"
//               placeholder='Doctor Name'
//               className='form__input mt-1'
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="date" className='form__label'>
//               Date
//             </label>
//             <input 
//               type="date" 
//               name="date"
//               className='form__input mt-1'
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="time" className='form__label'>
//               Time
//             </label>
//             <input 
//               type="time" 
//               name="time"
//               className='form__input mt-1'
//               required
//             />
//           </div>
//           <button type="submit" className='btn rounded sm:w-fit'>
//             Book Appointment
//           </button>
//         </form>
//       </div>
//     </section>  
//   );
// }

// export default AppointmentForm;


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const AppointmentForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zs2vu3r', 'template_bt59wif', form.current, 'dMWAQhZPhirkmSI8Y')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <section className='my-10'>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">
          Book an Appointment
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Please fill out the form below to book an appointment.
        </p>
        <form ref={form} onSubmit={sendEmail} className='space-y-8'>
          <div>
            <label htmlFor="name" className='form__label text-sm'>
              Your Name
            </label>
            <input 
              type="text" 
              name="user_name"
              placeholder='Full Name'
              className='form__input mt-1'
              required
            />
          </div>
          <div>
            <label htmlFor="email" className='form__label text-sm'>
              Your Email
            </label>
            <input 
              type="email" 
              name="user_email"
              placeholder='example@gmail.com'
              className='form__input mt-1'
              required
            />
          </div>
          <div>
            <label htmlFor="doctor_name" className='form__label text-sm'>
              Doctor's Name
            </label>
            <input 
              type="text" 
              name="doctor_name"
              placeholder='doctor_name'
              className='form__input mt-1'
              required
            />
          </div>
          <div>
            <label htmlFor="date" className='form__label text-sm'>
              Date
            </label>
            <input 
              type="date" 
              name="date"
              className='form__input mt-1'
              required
            />
          </div>
          <div>
            <label htmlFor="time" className='form__label text-sm'>
              Time
            </label>
            <input 
              type="time" 
              name="time"
              className='form__input mt-1'
              required
            />
          </div>
          <button 
            type="submit" 
            className='btn rounded sm:w-fit hover:bg-blue-700 hover:text-white hover:font-bold transition duration-300'
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>  
  );
}

export default AppointmentForm;
