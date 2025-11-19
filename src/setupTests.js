// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


// import React, { useState, useEffect } from 'react';

// function Header3() {
//   const [trucks, setTrucks] = useState([]);

//   const defaultTrucks = [
//     {
//       title: 'Lowbed Trailer',
//       desc: 'Wind turbines, rail vehicles, Cars construction machinery',
//       img: 'https://velotrax.sa/assets/Lowbed_Trailer-qRbSOXQB.svg',
//     },
//     {
//       title: 'Trailer',
//       desc: 'Dry goods, crates, bulk materials',
//       img: 'https://velotrax.sa/assets/trailer-9S1iLYkH.svg',
//     },
//     {
//       title: 'Six',
//       desc: 'Pallets, bulky items and any additional equipment.',
//       img: 'https://velotrax.sa/assets/six_trailer-BxiDLXk3.svg',
//     },
//     {
//       title: 'Lorry',
//       desc: 'Steel girders, concrete pipes and frozen items.',
//       img: 'https://velotrax.sa/assets/lorry-CM6Qm6PS.svg',
//     },
//     {
//       title: 'Diana',
//       desc: 'Building materials, furniture, plants, appliances, and more.',
//       img: 'https://velotrax.sa/assets/daina-CKBz3Dc_.svg',
//     },
//     {
//       title: 'Pick up',
//       desc: 'Stationary items, batteries, food items and more.',
//       img: 'https://velotrax.sa/assets/pickup-CHxfr9DF.svg',
//     },
//   ];

//   useEffect(() => {
//     fetch('/trucks.json')
//       .then((res) => {  
//         if (!res.ok) throw new Error("Couldn't load trucks.json");
//         return res.json();
//       })
//       .then((data) => setTrucks(data))
//       .catch((error) => {
//         console.warn('Failed to load trucks.json. Using default:', error);
//         setTrucks(defaultTrucks);
//       });
//   }, []);

//   return (
//     <div className="py-16 px-4">
//       <div id="OurTrucks" className="section mb-8"></div>
//       <h1 className="text-[48px] font-bold mb-2 text-center">Our Trucks</h1>
//       <p className="text-center sm:text-base lg:text-xl mb-8 max-w-2xl mx-auto">
//         We offer a diverse fleet for goods transportation providing reliable pickup and dropoff services for loads of all types and sizes.
//       </p>

//       <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {trucks.map((truck) => (
//           <div key={truck.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
//             <img
//               src={truck.img}
//               alt={truck.title}
//               className="h-40 max-w-full w-auto object-contain mb-4"
//             />
//             <h2 className="text-[32px] font-bold mb-1 ">{truck.title}</h2>
//             <p className="text-xl text-gray-700 mb-4 ">{truck.desc}</p>
//             <button className="px-4 py-2 font-bold w-[153px] border border-[#003D70] rounded-full hover:bg-btn-radial hover:text-white transition">
//               Book Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Header3;
