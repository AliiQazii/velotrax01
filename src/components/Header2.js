import React from 'react';

function Header2() {
  return (
    <div  id="OurProgram"  className="text-center py-16 px-4">
      <h1 className="text-4xl lg:text-5xl font-bold mb-2">Our Programs</h1>
      <p className="max-w-2xl mx-auto lg:txt-xl sm:text-base mb-8">
        Velotrax offers truck rentals of all sizes, with professional drivers and <br />
        insurance coverage for secure transportation and delivery of your goods.
      </p>
     
      
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="py-6 rounded-lg text-left">
          <img
            src="https://velotrax.sa/assets/briefcase-NsDBQXHi.svg"
            alt="For Consumers"
            className="mt-1 w-[32px] h-[32x]"
          />
          <h2 className="text-[32px] font-bold mb-1">For Consumers</h2>
          <p className="text-sm">
            Velotrax offers truck rentals of all sizes, with professional drivers and insurance coverage for secure transportation and delivery of your goods.
          </p>
        </div>
        <div className="py-6 rounded-lg text-left">
          <img
            src="https://velotrax.sa/assets/user-eaT-U2SB.svg"
            alt="For Drivers"
            className="mt-1 w-[32px] h-[32x]"
          />
          <h2 className="text-[32px] font-bold mb-1">For Drivers</h2>
          <p className="text-sm">
            Velotrax offers truck rentals of all sizes, with professional drivers and insurance coverage for secure transportation and delivery of your goods.
          </p>
        </div>

        <div className="py-6 rounded-lg text-left">
          <img
            src="https://velotrax.sa/assets/handshake-B4z0GPTo.svg"
            alt="For Partners"
            className="mt-1 w-[32px] h-[32x]"
          />
          <h2 className="text-2xl font-bold mb-2">For Partners</h2>
          <p className="text-sm">
            Velotrax offers truck rentals of all sizes, with professional drivers and insurance coverage for secure transportation and delivery of your goods.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header2;
