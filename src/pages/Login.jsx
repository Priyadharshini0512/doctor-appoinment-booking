import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HashLoader from 'react-spinners/HashLoader.js';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result.data);  // Check the structure of the response
        if (result.data.status === "Success") {
          toast.success('Login successful!');
          navigate('/home');
        } else {
          toast.error(result.data.message);
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
        toast.error('Login failed. Please try again.');
        setLoading(false);
      });
  };

  return (
    <section className='my-10'>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello <span className='text-primaryColor'>Welcome</span> Back
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-3 border-b border0[#0066ff61]
              focus:outline-none focus:border-b-primaryColor text-base
              leading-7 text-headingColor placeholder:text-textColor
              rounded-md cursor-pointer'
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-3 border-b border0[#0066ff61]
              focus:outline-none focus:border-b-primaryColor text-base
              leading-7 text-headingColor placeholder:text-textColor
              rounded-md cursor-pointer'
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className='w-full bg-primaryColor text-white
              text-[18px] leading-[30px] rounded-lg px-4 py-3'
              disabled={loading}
            >
              {loading ? <HashLoader size={35} color='#fff' /> : "Login"}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don't have an account?
            <Link to='/register' className='text-primaryColor font-medium ml-1'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;










// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { BASE_URL } from '../config'
// import { toast } from 'react-toastify'
// import { authContext } from '../context/AuthContext'; // Updated import statement
// import HashLoader from 'react-spinners/HashLoader.js'
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// function Login() {
//   // const [ formData, setFormData ] = useState({
//   //   email: '',
//   //   password: ''
//   // })

//   // const [loading, setLoading] = useState(false)

//   // const handleInputChange = (e) => {
//   //   setFormData({
//   //  ...formData,
//   //     [e.target.name]: e.target.value
//   //   })
//   // }

//   // const {dispatch} = useContext(authContext)
//   // const navigate = useNavigate();

//   // const submitHandler = async (e) => { 
//   //   e.preventDefault();
//   //   setLoading(true)

//   //   try {
//   //     const res = await fetch(`${BASE_URL}/auth/login`, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify(formData)
//   //     })

//   //     const result = await res.json();

//   //     if(!res.ok) {
//   //       throw new Error(result.message)
//   //     }

//   //     dispatch({
//   //       type:'LOGIN_SUCCESS',
//   //       payload: {
//   //         user: result.data,
//   //         token: result.token,
//   //         role: result.role
//   //       }
//   //     })

//   //     console.log(result, 'login data')

//   //     setLoading(false)
//   //     toast.success(result.message)
//   //     navigate('/home');

//   //   } catch (error) {
//   //     console.error(error); // Log the error for debugging purposes
//   //     toast.error(error.message || 'Failed to register'); // Use error.message if available, or a default message
//   //     setLoading(false);
//   //   }
//   // }
  
//   const[email, setEmail] = useState()
//   const[password, setPassword] = useState()
//   const navigate= useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post('http://localhost:3001/login',{ email, password})
//     .then(result => {console.log(result)
//      navigate('/home')   
  
//     })
//     .catch (err => console.log(err))
//   }
  


//   return (
//     <section className='my-10'>
//       <div className="w-full max-w-[570px] mx-auto
//       rounded-lg shadow-md p-10">
//         <h3 className="text-headingColor text-[22px] leading-9
//         font-bold mb-10">
//           Hello <span className='text-primaryColor'>Welcome</span> Back
//         </h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-5">
//             <input 
//               type="email" 
//               name="email" 
//               placeholder='Email' 
//               onChange={(e)=> setEmail(e.target.value)}
//               className='w-full px-4 py-3 border-b border0[#0066ff61]
//               focus:outline-none focus:border-b-primaryColor text-base
//               leading-7 text-headingColor placeholder:text-textColor
//               rounded-md cursor-pointer'
              
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <input 
//               type="password" 
//               name="password" 
//               placeholder='Password' 
//               onChange={(e)=> setPassword(e.target.value)}
//               className='w-full px-4 py-3 border-b border0[#0066ff61]
//               focus:outline-none focus:border-b-primaryColor text-base
//               leading-7 text-headingColor placeholder:text-textColor
//               rounded-md cursor-pointer'
              
//               required
//             />
//           </div>

//           <div className="mt-7">
//             <button 
//               disabled={loading && true} 
//               type="submit"
//               className='w-full bg-primaryColor text-white
//               text-[18px] leading-[30px] rounded-lg px-4 py-3'
//               >
//                 {loading ? <HashLoader size={35} color='#fff'/> : "Login"}
//             </button>
//           </div>

//           <p className="mt-5 text-textColor text-center">
//             Don't have an account? 
//             <Link to='/register' className='text-primaryColor font-medium ml-1'>Register</Link>
//           </p>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default Login


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import HashLoader from 'react-spinners/HashLoader.js';
// import { toast } from 'react-toastify';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3001/login', { email, password })
//       .then(result => {
//         console.log(result)
//         if(result.date === "Success"){
//           navigate('/home');
//         }
      
//       })
//       .catch(err => {
//         console.log(err);
//         toast.error('Login failed. Please try again.');
//         setLoading(false);
//       });
//   };

//   return (
//     <section className='my-10'>
//       <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-10">
//         <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
//           Hello <span className='text-primaryColor'>Welcome</span> Back
//         </h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-5">
//             <input
//               type="email"
//               name="email"
//               placeholder='Email'
//               onChange={(e) => setEmail(e.target.value)}
//               className='w-full px-4 py-3 border-b border0[#0066ff61]
//               focus:outline-none focus:border-b-primaryColor text-base
//               leading-7 text-headingColor placeholder:text-textColor
//               rounded-md cursor-pointer'
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="password"
//               name="password"
//               placeholder='Password'
//               onChange={(e) => setPassword(e.target.value)}
//               className='w-full px-4 py-3 border-b border0[#0066ff61]
//               focus:outline-none focus:border-b-primaryColor text-base
//               leading-7 text-headingColor placeholder:text-textColor
//               rounded-md cursor-pointer'
//               required
//             />
//           </div>

//           <div className="mt-7">
//             <button
//               type="submit"
//               className='w-full bg-primaryColor text-white
//               text-[18px] leading-[30px] rounded-lg px-4 py-3'
//               disabled={loading}
//             >
//               {loading ? <HashLoader size={35} color='#fff' /> : "Login"}
//             </button>
//           </div>

//           <p className="mt-5 text-textColor text-center">
//             Don't have an account?
//             <Link to='/register' className='text-primaryColor font-medium ml-1'>Register</Link>
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Login;