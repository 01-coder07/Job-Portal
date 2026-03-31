// import React, { useContext, useRef } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";

// const Hero = () => {
//   const { setSearchFilter, setIsSearched } = useContext(AppContext);

//   const titleRef = useRef(null);
//   const locationRef = useRef(null);

//   const onSearch = () => {
//     setSearchFilter({
//       title: titleRef.current.value,
//       location: locationRef.current.value,
//     });
//     setIsSearched(true);
//   };

//   return (
//     <section className="relative bg-[#0b1220] text-white py-28 overflow-hidden">
//       {/* Soft background glow */}
//       <div className="absolute -top-40 -left-40 w-100 h-100 bg-blue-600/20 blur-[120px] rounded-full"></div>

//       <div className="container 2xl:px-20 mx-auto px-6 relative z-10">
//         {/* Heading */}
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
//           Build Your Career With
//           <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//             Opportunities That Matter
//           </span>
//         </h1>

//         <p className="mt-6 text-gray-400 max-w-2xl text-lg">
//           Explore curated roles from fast-growing startups and global
//           enterprises — all in one place.
//         </p>

//         {/* Search Box */}
//         <div className="mt-12 bg-[#111827] border border-gray-700 rounded-2xl p-3 flex flex-col md:flex-row items-center gap-4 shadow-2xl">
//           {/* Job Input */}
//           <div className="flex items-center w-full px-4">
//             <img
//               src={assets.search_icon}
//               alt=""
//               className="w-5 mr-3 opacity-60"
//             />
//             <input
//               type="text"
//               placeholder="Role, skills, company..."
//               className="w-full bg-transparent outline-none text-white placeholder-gray-500"
//               ref={titleRef}
//             />
//           </div>

//           {/* Divider */}
//           <div className="hidden md:block h-8 w-[1px] bg-gray-700"></div>

//           {/* Location Input */}
//           <div className="flex items-center w-full px-4">
//             <img
//               src={assets.search_icon}
//               alt=""
//               className="w-5 mr-3 opacity-60"
//             />
//             <input
//               type="text"
//               placeholder="City, remote..."
//               className="w-full bg-transparent outline-none text-white placeholder-gray-500"
//               ref={locationRef}
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="button"
//             onClick={onSearch}
//             className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-all duration-300 px-8 py-3 rounded-xl font-semibold w-full md:w-auto cursor-pointer"
//           >
//             Explore
//           </button>
//         </div>

//         {/* Stats Section */}
//         <div className="flex gap-12 mt-20 text-gray-400 flex-wrap">
//           <div>
//             <h3 className="text-3xl font-bold text-white">12K+</h3>
//             <p>Live Roles</p>
//           </div>

//           <div>
//             <h3 className="text-3xl font-bold text-white">6K+</h3>
//             <p>Hiring Teams</p>
//           </div>

//           <div>
//             <h3 className="text-3xl font-bold text-white">25K+</h3>
//             <p>Active Candidates</p>
//           </div>
//         </div>
//       </div>

//       {/* Trusted Companies */}
//       <div className="mt-28 bg-[#0f172a] py-12 border-t border-gray-800">
//         <div className="container 2xl:px-20 mx-auto px-6 flex flex-wrap justify-center items-center gap-14 opacity-60">
//           <img
//             className="h-6 hover:opacity-100 transition duration-300"
//             src={assets.microsoft_logo}
//             alt=""
//           />
//           <img
//             className="h-6 hover:opacity-100 transition duration-300"
//             src={assets.walmart_logo}
//             alt=""
//           />
//           <img
//             className="h-6 hover:opacity-100 transition duration-300"
//             src={assets.accenture_logo}
//             alt=""
//           />
//           <img
//             className="h-6 hover:opacity-100 transition duration-300"
//             src={assets.samsung_logo}
//             alt=""
//           />
//           <img
//             className="h-6 hover:opacity-100 transition duration-300"
//             src={assets.amazon_logo}
//             alt=""
//           />
//           <img
//             className="h-6 hover:opacity-100 transition duration-300"
//             src={assets.adobe_logo}
//             alt=""
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  };

  return (
    <section className="bg-[#0b1220] text-white py-24">
      <div className="container 2xl:px-20 mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
          Build Your Career With
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Opportunities That Matter
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl">
          Explore curated roles from fast-growing startups and global
          enterprises — all in one place.
        </p>

        {/* Search Box */}
        <div className="mt-12 bg-[#111827] border border-gray-700 rounded-xl p-3 flex flex-col md:flex-row gap-3 items-center shadow-xl">
          {/* Job Input */}
          <div className="flex items-center w-full px-4">
            <img
              className="w-5 mr-3 opacity-60"
              src={assets.search_icon}
              alt=""
            />
            <input
              type="text"
              placeholder="Role, skills, company..."
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
              ref={titleRef}
            />
          </div>

          <div className="hidden md:block h-8 w-[1px] bg-gray-700"></div>

          {/* Location Input */}
          <div className="flex items-center w-full px-4">
            <img
              className="w-5 mr-3 opacity-60"
              src={assets.location_icon}
              alt=""
            />
            <input
              type="text"
              placeholder="City, remote..."
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
              ref={locationRef}
            />
          </div>

          {/* Button */}
          <button
            onClick={onSearch}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition w-full md:w-auto cursor-pointer"
          >
            Explore
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mt-16 text-gray-400 flex-wrap">
          <div>
            <h3 className="text-3xl font-bold text-white">12K+</h3>
            <p>Live Roles</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">6K+</h3>
            <p>Hiring Teams</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">25K+</h3>
            <p>Active Candidates</p>
          </div>
        </div>
      </div>

      {/* Trusted Companies */}
      <div className="mt-24 bg-[#0f172a] py-10 border-t border-gray-800">
        <div className="container 2xl:px-20 mx-auto px-6 flex flex-wrap justify-center items-center gap-12 opacity-70">
          <img
            className="h-6 hover:opacity-100 transition"
            src={assets.microsoft_logo}
            alt=""
          />
          <img
            className="h-6 hover:opacity-100 transition"
            src={assets.walmart_logo}
            alt=""
          />
          <img
            className="h-6 hover:opacity-100 transition"
            src={assets.accenture_logo}
            alt=""
          />
          <img
            className="h-6 hover:opacity-100 transition"
            src={assets.samsung_logo}
            alt=""
          />
          <img
            className="h-6 hover:opacity-100 transition"
            src={assets.amazon_logo}
            alt=""
          />
          <img
            className="h-6 hover:opacity-100 transition"
            src={assets.adobe_logo}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;