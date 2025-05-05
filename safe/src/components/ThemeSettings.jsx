// import React from 'react';
// import { MdOutlineCancel } from 'react-icons/md';
// import { BsCheck } from 'react-icons/bs';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import { themeColors } from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';

// const ThemeSettings = () => {
//   const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();
  
//   console.log('Current themeSettings:', setThemeSettings);  // Debugging line

//   return (
//     <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
//       <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400">
//         <div className="flex justify-between items-center p-4 ml-4">
//           <p className="font-semibold text-lg">Settings</p>
//           <button
//             type="button"
//             onClick={() => setThemeSettings(false)}
//             style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
//             className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
//           >
//             <MdOutlineCancel />
//             <span>Close</span>
//           </button>

//         </div>
//         <div className="flex-col border-t-1 border-color p-4 ml-4">
//           <p className="font-semibold text-xl ">Theme Option</p>

//           <div className="mt-4">
//             <input
//               type="radio"
//               id="light"
//               name="theme"
//               value="Light"
//               className="cursor-pointer"
//               onChange={setMode}
//               checked={currentMode === 'Light'}
//             />
//             {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
//             <label htmlFor="light" className="ml-2 text-md cursor-pointer">
//               Light
//             </label>
//           </div>
//           <div className="mt-2">
//             <input
//               type="radio"
//               id="dark"
//               name="theme"
//               value="Dark"
//               onChange={setMode}
//               className="cursor-pointer"
//               checked={currentMode === 'Dark'}
//             />
//             {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
//             <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
//               Dark
//             </label>
//           </div>
//         </div>
//         <div className="p-4 border-t-1 border-color ml-4">
//           <p className="font-semibold text-xl ">Theme Colors</p>
//           <div className="flex gap-3">
//             {themeColors.map((item, index) => (
//               <TooltipComponent key={index} content={item.name} position="TopCenter">
//                 <div
//                   className="relative mt-2 cursor-pointer flex gap-5 items-center"
//                   key={item.name}
//                 >
//                   <button
//                     type="button"
//                     className="h-10 w-10 rounded-full cursor-pointer"
//                     style={{ backgroundColor: item.color }}
//                     onClick={() => setColor(item.color)}
//                   >
//                     <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
//                   </button>
//                 </div>
//               </TooltipComponent>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThemeSettings;




import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, themeSettings, setThemeSettings } = useStateContext();
  
  console.log('Current themeSettings:', themeSettings);  // Debugging line

  // Only render the theme settings if themeSettings is true
  if (!themeSettings) return null; // Don't render anything if themeSettings is false

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)} // Close the settings panel
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
            <span>Close</span>
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl ">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode} // Update theme mode when selected
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode} // Update theme mode when selected
              className="cursor-pointer"
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)} // Change the theme color
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;







// import React from 'react';
// import { MdOutlineCancel } from 'react-icons/md';
// import { BsCheck } from 'react-icons/bs';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { themeColors } from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';

// const ThemeSettings = () => {
//   // Extracting necessary values and functions from the context
//   const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

//   return (
//     <div className="bg-half-transparent w-screen fixed top-0 right-0 z-50">
//       {/* Theme Settings Panel */}
//       <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
//         {/* Header with Close Button */}
//         <div className="flex justify-between items-center p-4 ml-4">
//           <p className="font-semibold text-lg">Settings</p>
//           <button
//             type="button"
//             onClick={() => setThemeSettings(false)}  // Close the settings panel
//             className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
//             style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
//           >
//             <MdOutlineCancel />
//           </button>
//         </div>

//         {/* Theme Option Section */}
//         <div className="flex-col border-t-1 border-color p-4 ml-4">
//           <p className="font-semibold text-xl">Theme Option</p>

//           <div className="mt-4">
//             <input
//               type="radio"
//               id="light"
//               name="theme"
//               value="Light"
//               className="cursor-pointer"
//               onChange={setMode} // Sets theme mode (Light/Dark)
//               checked={currentMode === 'Light'} // Mark Light as selected if the currentMode is Light
//             />
//             <label htmlFor="light" className="ml-2 text-md cursor-pointer">
//               Light
//             </label>
//           </div>

//           <div className="mt-2">
//             <input
//               type="radio"
//               id="dark"
//               name="theme"
//               value="Dark"
//               onChange={setMode} // Sets theme mode (Light/Dark)
//               className="cursor-pointer"
//               checked={currentMode === 'Dark'} // Mark Dark as selected if the currentMode is Dark
//             />
//             <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
//               Dark
//             </label>
//           </div>
//         </div>

//         {/* Theme Colors Section */}
//         <div className="p-4 border-t-1 border-color ml-4">
//           <p className="font-semibold text-xl">Theme Colors</p>
//           <div className="flex gap-3">
//             {themeColors.map((item, index) => (
//               <TooltipComponent key={index} content={item.name} position="TopCenter">
//                 <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
//                   <button
//                     type="button"
//                     className="h-10 w-10 rounded-full cursor-pointer"
//                     style={{ backgroundColor: item.color }}
//                     onClick={() => setColor(item.color)} // Change theme color
//                   >
//                     <BsCheck
//                       className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}
//                     />
//                   </button>
//                 </div>
//               </TooltipComponent>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThemeSettings;
