// import React, { useState } from 'react';
// // import { Link, NavLink } from 'react-router-dom';
// import './Signup.css';
// import Web3 from 'web3';
// import { create } from 'ipfs-http-client';
// import contract from '../contracts/contract.json';
// import image from '../assets/signup_background.jpeg';
// // 0xc9E1551082F51B1AD222a18b6558f75003a2db6a
// const Signup = () => {
//   const [type, setType] = useState(false);
//   const [regp, setRegp] = useState({
//     name: '',
//     mail: '',
//     password: '',
//     number: 1,
//     contactNumber: '',
//     insurance: [{}],
//     allergies: [{}],
//     medicalhistory: [{}],
//     hospitalizationhistory: [{}],
//     visit: [{}],
//     selectedDoctors: [{}],
//   });
//   const confirmPasswordElement = document.getElementById('confirmPassword');
//   const [regd, setRegd] = useState({
//     name: '',
//     mail: '',
//     password: '',
//     hospital: '',
//     contactNumber: '',
//     license: '',
//     speciality: '',
//     accessRequestsSent: [],
//     accessRecieved: [],
//   });
//   const validatePasswordConfirmation = () => regp.password === confirmPasswordElement.value;
//   function handle(e) {
//     const newData1 = { ...regp };
//     const newData2 = { ...regd };
//     newData1[e.target.name] = e.target.value;
//     newData2[e.target.name] = e.target.value;
//     setRegp(newData1);
//     setRegd(newData2);
//   }

//   function handleD(e) {
//     const newData = { ...regd };
//     newData[e.target.name] = e.target.value;
//     setRegd(newData);
//   }

//   const register = async () => {
//     const accounts = await window.ethereum.request({
//       method: 'eth_requestAccounts',
//     });
//     const currentaddress = accounts[0];

//     const web3 = new Web3(window.ethereum);
//     const mycontract = new web3.eth.Contract(contract.abi, contract.address);
//     console.log("result of myContract ", mycontract)

//     // Validate all fields
//     if (!regp.name || !regp.mail || !regp.password || !confirmPasswordElement) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     // Validate password confirmation
//     if (!validatePasswordConfirmation()) {
//       alert('Password and Confirm Password do not match');
//       return;
//     }

//     if (!type) {
//       // patient
//       try {
//         console.log("Calling getPatient...");
        
//         const patientData = await mycontract.methods.getPatient().call();
//        // console.log(patientData);
//         console.log("Got patient data:", patientData);
      

//         // Use Promise.all() to handle all async calls concurrently
//         const results = await Promise.all(
//           patientData.map(async (patientHash) => {
//             try {
//               const data = await (
//                 await fetch(`http://localhost:8080/ipfs/${patientHash}`)
//               ).json();
//               console.log("return data", data);
//               if (data.mail === regp.mail) {
//                 alert('Email address is already registered');
//                 return true; // Return true to indicate a match is found
//               }
//               return false; // No match
//             } catch (err) {
//               console.log(err);
//               return false; // If error occurs, we simply skip the email
//             }
//           }),
//         );

//         // If any result is true, stop the execution (email already exists)
//         if (results.includes(true)) {
//           return; // Email already registered, so we exit early
//         }
//       } catch (err) {
//         console.log(err);
//         console.log('Error while checking for duplicate email');

//         alert('Error while checking for duplicate email');
//         return;
//       }

//       let client = create();
//       client = create(new URL('http://127.0.0.1:5001'));
//       const { cid } = await client.add(JSON.stringify(regp));
//       const hash = cid.toString();
//       console.log(hash);

//       await mycontract.methods
//         .addPatient(hash)
//         .send({ from: currentaddress })
//         .then(() => {
//           alert('Account created');
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       try {
//         const doctorData = await mycontract.methods.getDoctor().call();
//         console.log(doctorData);

//         // Use Promise.all() to handle all async calls concurrently
//         const results = await Promise.all(
//           doctorData.map(async (doctorHash) => {
//             try {
//               const data = await (
//                 await fetch(`http://localhost:8080/ipfs/${doctorHash}`)
//               ).json();
//               if (data.mail === regp.mail) {
//                 alert('Email address is already registered');
//                 return true; // Return true to indicate a match is found
//               }
//               return false; // No match
//             } catch (err) {
//               console.log(err);
//               return false; // If error occurs, we simply skip the email
//             }
//           }),
//         );

//         // If any result is true, stop the execution (email already exists)
//         if (results.includes(true)) {
//           return; // Email already registered, so we exit early
//         }
//       } catch (err) {
//         console.log('Error while checking for duplicate email');

//         console.log(err);
      
//         alert('Error while checking for duplicate email');

//         return;
//       }

//       // doctor
//       let client = create();
//       client = create(new URL('http://127.0.0.1:5001'));
//       const { cid } = await client.add(JSON.stringify(regd));
//       const hash = cid.toString();
//       console.log(hash);

//       await mycontract.methods
//         .addDoctor(hash)
//         .send({ from: currentaddress })
//         .then(() => {
//           alert('Account created');
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <section
//       className="bg-gray-50 min-h-screen flex items-center justify-center"
//       style={{ background: 'linear-gradient(to right, #004e92,#000428)' }}
//     >
//       {/* registration container */}
//       <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center bg-white/20 z-10 backdrop-filter backdrop-blur-lg shadow-lg m-10">
//         {/* form */}
//         <div className="md:w-1/2 px-8 md:px-16">
//           <h2 className="font-bold text-2xl text-gray-200">Register</h2>
//           <p className="text-xs mt-4 text-gray-300">Create a new account</p>

//           <form action="" className="flex flex-col gap-4">
//             <input
//               className="p-2 mt-8 rounded-xl border"
//               type="text"
//               name="name"
//               onChange={(e) => handle(e)}
//               id="name"
//               placeholder="Full Name"
//             />
//             <input
//               className="p-2 rounded-xl border"
//               type="email"
//               name="mail"
//               id="email"
//               placeholder="Email"
//               onChange={(e) => handle(e)}
//             />

//             <input
//               onChange={handle}
//               type="text"
//               placeholder="Contact Number"
//               name="contactNumber"
//               className="p-2 rounded-xl border w-full mb-5"
//             />

//             {/* User Type Dropdown */}
//             {/* <div className='relative'>
//                   <select className='p-2 rounded-xl border w-full text-gray-400' name='type' id='user-type' placeholder='User Type'  onChange={() => { setType(!type) }}>
//                     <option disabled selected>User Type</option>
//                     <option value='doctor'>Doctor</option>
//                     <option value='patient'>Patient</option>
//                   </select>
//                 </div> */}
//             <div className="relative">
//               <div className="input-heading" style={{ margin: '1rem 0' }}>
//                 <h5 className="text-gray-300"> Type</h5>
//                 <select
//                   className="p-2 rounded-xl border w-full text-gray-400"
//                   id="user-type"
//                   name="type"
//                   onChange={() => {
//                     setType(!type);
//                   }}
//                   style={{ padding: '0.5rem', backgroundColor: 'white' }}
//                 >
//                   <option value="patient">Patient</option>
//                   <option value="doctor">Doctor</option>
//                 </select>
//               </div>
//             </div>

//             {type && (
//               <div className="relative">
//                 <input
//                   onChange={(e) => handleD(e)}
//                   type="text"
//                   placeholder="Specialization"
//                   id="email"
//                   name="speciality"
//                   className="p-2 rounded-xl border w-full mb-5"
//                 />

//                 <input
//                   onChange={handle}
//                   type="text"
//                   placeholder="Hospital"
//                   name="hospital"
//                   className="p-2 rounded-xl border w-full mb-5"
//                 />
//                 <input
//                   onChange={(e) => handleD(e)}
//                   type="text"
//                   placeholder="License No."
//                   id="email"
//                   name="license"
//                   className="p-2 rounded-xl border w-full"
//                 />
//               </div>
//             )}

//             <input
//               className="p-2 rounded-xl border w-full"
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={(e) => handle(e)}
//             />
//             <input
//               className="p-2 rounded-xl border"
//               type="password"
//               name="confirmPassword"
//               id="confirmPassword"
//               placeholder="Confirm Password"
//             />

//             <button
//               type="button"
//               className="bg-[#002D74] rounded-xl text-gray-300 py-2 hover:scale-105 duration-300"
//               onClick={() => {
//                 register(type);
//               }}
//             >
//               Signup
//             </button>
//           </form>

//           <div className="mt-3 text-xs flex justify-between items-center text-[#002D74] ">
//             <p className="text-gray-300">Already have an account?</p>
//             <a
//               href="/login"
//               className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
//             >
//               Login
//             </a>
//           </div>
//         </div>

//         {/* image */}
//         <div className="md:block hidden w-1/2">
//           <img className="rounded-2xl" src={image} alt="Registration" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Web3 from 'web3';
import { create } from 'ipfs-http-client';
import contract from '../contracts/contract.json';
import image from '../assets/signup_background.jpeg';

const Signup = () => {
  const [type, setType] = useState('patient'); // 'patient' or 'doctor'
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState('');

  const [regp, setRegp] = useState({
    name: '',
    mail: '',
    password: '',
    number: 1,
    contactNumber: '',
    insurance: [{}],
    allergies: [{}],
    medicalhistory: [{}],
    hospitalizationhistory: [{}],
    visit: [{}],
    selectedDoctors: [{}],
  });

  const [regd, setRegd] = useState({
    name: '',
    mail: '',
    password: '',
    hospital: '',
    contactNumber: '',
    license: '',
    speciality: '',
    accessRequestsSent: [],
    accessRecieved: [],
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setRegp((prev) => ({ ...prev, [name]: value }));
    setRegd((prev) => ({ ...prev, [name]: value }));
  };

  const handleD = (e) => {
    const { name, value } = e.target;
    setRegd((prev) => ({ ...prev, [name]: value }));
  };

  const validatePasswordConfirmation = () => regp.password === confirmPassword;

  const register = async () => {
    if (!regp.name || !regp.mail || !regp.password || !confirmPassword) {
      alert('Please fill all required fields');
      return;
    }

    if (!validatePasswordConfirmation()) {
      alert('Passwords do not match');
      return;
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const currentaddress = accounts[0];
    const web3 = new Web3(window.ethereum);
    const mycontract = new web3.eth.Contract(contract.abi, contract.address);

    let client = create({ url: 'http://127.0.0.1:5001' });

    try {
      if (type === 'patient') {
        const patientData = await mycontract.methods.getPatient().call();
        console.log(patientData);
        const isEmailExists = await Promise.all(
          patientData.map(async (hash) => {
            try {
              const res = await fetch(`http://localhost:8080/ipfs/${hash}`);
              const data = await res.json();
              return data.mail === regp.mail;
            } catch {
              return false;
            }
          })
        );
//"API": "/ip4/127.0.0.1/tcp/5001"
        if (isEmailExists.includes(true)) {
          alert('Email already exists');
          return;
        }

        const { cid } = await client.add(JSON.stringify(regp));
        const hash = cid.toString();

        await mycontract.methods.addPatient(hash).send({ from: currentaddress });
        alert('Patient account created!');
        navigate('/patient/PatientDashboard');
      } else {
        const doctorData = await mycontract.methods.getDoctor().call();

        const isEmailExists = await Promise.all(
          doctorData.map(async (hash) => {
            try {
              const res = await fetch(`http://localhost:8080/ipfs/${hash}`);
              const data = await res.json();
              return data.mail === regd.mail;
            } catch {
              return false;
            }
          })
        );

        if (isEmailExists.includes(true)) {
          alert('Email already exists');
          return;
        }

        const { cid } = await client.add(JSON.stringify(regd));
        const hash = cid.toString();

        await mycontract.methods.addDoctor(hash).send({ from: currentaddress });
        alert('Doctor account created!');
        navigate('/doctor/DoctorDashboard');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(to right, #004e92,#000428)' }}
    >
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center bg-white/20 z-10 backdrop-filter backdrop-blur-lg m-10">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-gray-200">Register</h2>
          <p className="text-xs mt-4 text-gray-300">Create a new account</p>

          <form className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="text" name="name" onChange={handle} placeholder="Full Name" />
            <input className="p-2 rounded-xl border" type="email" name="mail" onChange={handle} placeholder="Email" />
            <input className="p-2 rounded-xl border" type="text" name="contactNumber" onChange={handle} placeholder="Contact Number" />

            <div className="input-heading">
              <h5 className="text-gray-300 mt-2">Type</h5>
              <select className="p-2 rounded-xl border w-full text-gray-400" name="type"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            {type === 'doctor' && (
              <>
                <input className="p-2 rounded-xl border" type="text" name="speciality" onChange={handleD} placeholder="Specialization" />
                <input className="p-2 rounded-xl border" type="text" name="hospital" onChange={handle} placeholder="Hospital" />
                <input className="p-2 rounded-xl border" type="text" name="license" onChange={handleD} placeholder="License No." />
              </>
            )}

            <input className="p-2 rounded-xl border" type="password" name="password" onChange={handle} placeholder="Password" />
            <input className="p-2 rounded-xl border" type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />

            <button type="button" className="bg-[#002D74] rounded-xl text-gray-300 py-2 hover:scale-105 duration-300" onClick={register}>
              Signup
            </button>
          </form>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74] ">
            <p className="text-gray-300">Already have an account?</p>
            <a href="/login" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</a>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={image} alt="Registration" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
