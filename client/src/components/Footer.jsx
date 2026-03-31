// import React from "react";
// import { assets } from "../assets/assets";

// function Footer() {
//   return (
//     <footer className="bg-gray-50 border-t mt-20">
//       <div className="container px-4 2xl:px-20 mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-6">
//         {/* Logo */}
//         <img width={160} src={assets.logo} alt="logo" />

//         {/* Copyright */}
//         <p className="text-gray-500 text-sm text-center">
//           © {new Date().getFullYear()} InsiderJobs. All rights reserved.
//         </p>

//         {/* Social Icons */}
//         <div className="flex gap-4">
//           <img
//             width={36}
//             src={assets.facebook_icon}
//             alt="facebook"
//             className="cursor-pointer hover:scale-110 transition"
//           />
//           <img
//             width={36}
//             src={assets.twitter_icon}
//             alt="twitter"
//             className="cursor-pointer hover:scale-110 transition"
//           />
//           <img
//             width={36}
//             src={assets.instagram_icon}
//             alt="instagram"
//             className="cursor-pointer hover:scale-110 transition"
//           />
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="container px-4 2xl:px-20 mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <img width={160} src={assets.logo} alt="logo" />
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            InsiderJobs helps you discover the best career opportunities from
            top companies around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>

          <ul className="space-y-2 text-gray-500 text-sm">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">Jobs</li>
            <li className="cursor-pointer hover:text-blue-600">Companies</li>
            <li className="cursor-pointer hover:text-blue-600">About Us</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>

          <div className="flex gap-4">
            <img
              width={36}
              src={assets.facebook_icon}
              alt=""
              className="cursor-pointer hover:scale-110 transition"
            />

            <img
              width={36}
              src={assets.twitter_icon}
              alt=""
              className="cursor-pointer hover:scale-110 transition"
            />

            <img
              width={36}
              src={assets.instagram_icon}
              alt=""
              className="cursor-pointer hover:scale-110 transition"
            />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} InsiderJobs. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;