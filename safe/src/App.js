// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React, { createContext, useState } from "react";
// import { FiSettings } from 'react-icons/fi';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
// import {
//   MyProfile,
//   MyProfileDoc,
//   Doctors,
//   Visits,
//   AppointmentDetails,
//   OnlineSessions,
//   DoctorDashboard,
//   Calender,
//   SessionDetails,
//   PatientDashboard,
//   MyAppointments,
//   AppointmentRequest,
//   KidneyDiseasePrediction,
//   LiverDiseasePrediction,
//   ParkinsonPrediction,
//   HeartDiseasePrediction,
//   Patients,
//   DiabetesPrediction,
//   Appointment,
//   MedicalHistory,
//   HospitalizationHistory,
//   Insurance,
//   Allergies,
//   PredictDisease,
//   Login,
//   Signup,
//   VideoCall,
// } from "./pages";
// import PatientInfo from "./pages/PatientInfo";
// import Home from "./HomeLayout";
// import "./App.css";
// import DashboardLayout from "./DashboardLayout";

// export const AccountContext = createContext();

// const App = () => {
//   const [account, setAccount] = useState("");
//   return (
//     <AccountContext.Provider value={{ account, setAccount }}>
//   <BrowserRouter>
 
//     <Routes>
//       {/* dashboard  */}
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       {/* pages  */}
//       <Route
//         path="/videoCall/:roomID/:username/:type/:appointmentID/:meetingID"
//         element={<VideoCall />}
//       />
//       <Route
//         path="patient/*"
//         element={
//           <DashboardLayout>
//             <Routes>
//               <Route path="/" element={<PatientDashboard />} />
//               <Route path="/patientdashboard" element={<PatientDashboard />} />
//               <Route path="/myprofile" element={<MyProfile />} />

//               <Route path="/insurance" element={<Insurance />} />
//               <Route path="/allergies" element={<Allergies />} />
//               <Route path="/medicalhistory" element={<MedicalHistory />} />
//               <Route
//                 path="/hospitalizationhistory"
//                 element={<HospitalizationHistory />}
//               />
//               <Route path="/predictdisease" element={<PredictDisease />} />
//               <Route path="/checkuphistory" element={<Visits />} />
//               <Route path="/doctors" element={<Doctors />} />
//               <Route path="/Createappointment" element={<Appointment />} />
//               <Route
//                 path="/Telemedicinesessions"
//                 element={<OnlineSessions />}
//               />
//               <Route path="/Myappointment" element={<MyAppointments />} />
//             </Routes>
//           </DashboardLayout>
//         }
//       />
//       xw
//       <Route
//         path="doctor/*"
//         element={
//           <DashboardLayout>
//             <Routes>
//               <Route path="/" element={<DoctorDashboard />} />
//               <Route path="/doctorDashboard" element={<DoctorDashboard />} />
//               <Route path="/myprofiledoc" element={<MyProfileDoc />} />
//               <Route path="/patients" element={<Patients />} />
//               <Route
//                 exact
//                 path="/patientInfo/:phash"
//                 element={<PatientInfo />}
//               />
//               <Route
//                 path="/diabetesPrediction"
//                 element={<DiabetesPrediction />}
//               />
//               <Route
//                 path="/heartDiseasePrediction"
//                 element={<HeartDiseasePrediction />}
//               />
//               <Route
//                 path="/parkinsonDiseasePrediction"
//                 element={<ParkinsonPrediction />}
//               />
//               <Route
//                 path="/ChronicKidneyDiseasePrediction"
//                 element={<KidneyDiseasePrediction />}
//               />
//               <Route
//                 path="/LiverDiseasePrediction"
//                 element={<LiverDiseasePrediction />}
//               />
//               <Route
//                 path="/AppointmentRequests"
//                 element={<AppointmentRequest />}
//               />
//               <Route path="/AppointmentDates" element={<Calender />} />
//               <Route
//                 path="/TelemedicineSessionDetails"
//                 element={<SessionDetails />}
//               />
//               <Route
//                 path="/AppointmentDetails"
//                 element={<AppointmentDetails />}
//               />
//             </Routes>
//           </DashboardLayout>
//         }
//       />
//     </Routes>
//   </BrowserRouter>
//   </AccountContext.Provider>
// );

// export default App;



import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from './contexts/ContextProvider';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

import {
  MyProfile,
  MyProfileDoc,
  Doctors,
  Visits,
  AppointmentDetails,
  OnlineSessions,
  DoctorDashboard,
  Calender,
  SessionDetails,
  PatientDashboard,
  MyAppointments,
  AppointmentRequest,
  KidneyDiseasePrediction,
  LiverDiseasePrediction,
  ParkinsonPrediction,
  HeartDiseasePrediction,
  Patients,
  DiabetesPrediction,
  Appointment,
  MedicalHistory,
  HospitalizationHistory,
  Insurance,
  Allergies,
  PredictDisease,
  Login,
  Signup,
  VideoCall,
} from "./pages";

import PatientInfo from "./pages/PatientInfo";
import Home from "./HomeLayout";
import "./App.css";
import DashboardLayout from "./DashboardLayout";
import Scheduler from "./pages/Scheduler";

// ✅ Exported context here
export const AccountContext = createContext();

const App = () => {
  const [account, setAccount] = useState("");
  const { themeSettings } = useStateContext();
  

  return (
    
    <AccountContext.Provider value={{ account, setAccount }}>
     
      <BrowserRouter>
         
     
      <div className="App">
         {/* Navbar */}
         
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/videoCall/:roomID/:username/:type/:appointmentID/:meetingID"
            element={<VideoCall />}
          />

          {/* Patient Dashboard Routes */}
          <Route
            path="patient/*"
            element={
              <DashboardLayout>
                <Routes>
                  <Route path="/" element={<PatientDashboard />} />
                  <Route path="/patientdashboard" element={<PatientDashboard />} />
                  <Route path="/myprofile" element={<MyProfile />} />
                  <Route path="/insurance" element={<Insurance />} />
                  <Route path="/allergies" element={<Allergies />} />
                  <Route path="/medicalhistory" element={<MedicalHistory />} />
                  <Route path="/hospitalizationhistory" element={<HospitalizationHistory />} />
                  <Route path="/predictdisease" element={<PredictDisease />} />
                  <Route path="/checkuphistory" element={<Visits />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/Createappointment" element={<Appointment />} />
                  <Route path="/Telemedicinesessions" element={<OnlineSessions />} />
                  <Route path="/Myappointment" element={<MyAppointments />} />
                </Routes>
              </DashboardLayout>
            }
          />

          {/* Doctor Dashboard Routes */}
          
          <Route
            path="doctor/*"
            element={
              <DashboardLayout>
                <Routes>
                  <Route path="/" element={<DoctorDashboard />} />
                  <Route path="/doctorDashboard" element={<DoctorDashboard />} />
                  <Route path="/myprofiledoc" element={<MyProfileDoc />} />
                  <Route path="/patients" element={<Patients />} />
                  <Route exact path="/patientInfo/:phash" element={<PatientInfo />} />
                  <Route path="/diabetesPrediction" element={<DiabetesPrediction />} />
                  <Route path="/heartDiseasePrediction" element={<HeartDiseasePrediction />} />
                  <Route path="/parkinsonDiseasePrediction" element={<ParkinsonPrediction />} />
                  <Route path="/ChronicKidneyDiseasePrediction" element={<KidneyDiseasePrediction />} />
                  <Route path="/LiverDiseasePrediction" element={<LiverDiseasePrediction />} />
                  <Route path="/AppointmentRequests" element={<AppointmentRequest />} />
                  <Route path="/AppointmentDates" element={<Calender />} />
                  <Route path="/TelemedicineSessionDetails" element={<SessionDetails />} />
                  <Route path="/AppointmentDetails" element={<AppointmentDetails />} />
                </Routes>
              </DashboardLayout>
            }
          />
        </Routes>
        </div>
        {themeSettings && <ThemeSettings />} 
       
      </BrowserRouter>
    </AccountContext.Provider>
  );
};

export default App;







// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useStateContext } from './contexts/ContextProvider';
// import ThemeSettings from './components/ThemeSettings';
// import { Navbar, Footer, Sidebar } from './components';
// import {
//   MyProfile,
//   MyProfileDoc,
//   Doctors,
//   Visits,
//   AppointmentDetails,
//   OnlineSessions,
//   DoctorDashboard,
//   Calender,
//   SessionDetails,
//   PatientDashboard,
//   MyAppointments,
//   AppointmentRequest,
//   KidneyDiseasePrediction,
//   LiverDiseasePrediction,
//   ParkinsonPrediction,
//   HeartDiseasePrediction,
//   Patients,
//   DiabetesPrediction,
//   Appointment,
//   MedicalHistory,
//   HospitalizationHistory,
//   Insurance,
//   Allergies,
//   PredictDisease,
//   Login,
//   Signup,
//   VideoCall,
// } from "./pages";

// import PatientInfo from "./pages/PatientInfo";
// import Home from "./HomeLayout";
// import DashboardLayout from "./DashboardLayout";
// import "./App.css";

// const App = () => {
//   const { themeSettings } = useStateContext();
//   return (
//   <BrowserRouter>
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       <div className="flex-1">
//         {/* Navbar */}
//         <Navbar />

//         <Routes>
//           {/* Home Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/videoCall/:roomID/:username/:type/:appointmentID/:meetingID"
//             element={<VideoCall />}
//           />

//           {/* Patient Dashboard Routes */}
//           <Route path="/patient" element={<DashboardLayout />}>
//             <Route index element={<PatientDashboard />} />
//             <Route path="patientdashboard" element={<PatientDashboard />} />
//             <Route path="myprofile" element={<MyProfile />} />
//             <Route path="insurance" element={<Insurance />} />
//             <Route path="allergies" element={<Allergies />} />
//             <Route path="medicalhistory" element={<MedicalHistory />} />
//             <Route path="hospitalizationhistory" element={<HospitalizationHistory />} />
//             <Route path="predictdisease" element={<PredictDisease />} />
//             <Route path="checkuphistory" element={<Visits />} />
//             <Route path="doctors" element={<Doctors />} />
//             <Route path="Createappointment" element={<Appointment />} />
//             <Route path="Telemedicinesessions" element={<OnlineSessions />} />
//             <Route path="Myappointment" element={<MyAppointments />} />
//           </Route>

//           {/* Doctor Dashboard Routes */}
//           <Route path="/doctor" element={<DashboardLayout />}>
//             <Route index element={<DoctorDashboard />} />
//             <Route path="doctorDashboard" element={<DoctorDashboard />} />
//             <Route path="myprofiledoc" element={<MyProfileDoc />} />
//             <Route path="patients" element={<Patients />} />
//             <Route path="patientInfo/:phash" element={<PatientInfo />} />
//             <Route path="diabetesPrediction" element={<DiabetesPrediction />} />
//             <Route path="heartDiseasePrediction" element={<HeartDiseasePrediction />} />
//             <Route path="parkinsonDiseasePrediction" element={<ParkinsonPrediction />} />
//             <Route path="ChronicKidneyDiseasePrediction" element={<KidneyDiseasePrediction />} />
//             <Route path="LiverDiseasePrediction" element={<LiverDiseasePrediction />} />
//             <Route path="AppointmentRequests" element={<AppointmentRequest />} />
//             <Route path="AppointmentDates" element={<Calender />} />
//             <Route path="TelemedicineSessionDetails" element={<SessionDetails />} />
//             <Route path="AppointmentDetails" element={<AppointmentDetails />} />
//           </Route>
//         </Routes>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>

//     {/* Theme Settings */}
  
//     {themeSettings && <ThemeSettings />}
//   </BrowserRouter>
// );
// };

// export default App;
