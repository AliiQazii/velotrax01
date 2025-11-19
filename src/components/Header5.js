import React from 'react';

function Header5() {
  return (
   <div className="w-full py-16 px-6 sm:px-10 lg:px-20 overflow-hidden relative bg-radial-hero bg-cover bg-no-repeat text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="w-full lg:w-1/4 relative h-[250px] sm:h-[100px] lg:h-[250px] flex justify-center">
          <img
            src="https://velotrax.sa/assets/mobile-YAakZWsm.png"
            alt="mobile"
            className="lg:h-[190%] sm:h-[150%] object-contain relative"
          />
        </div>

   
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-white text-5xl font-bold leading-tight mb-4">
            Download Our Mobile App ⚡
          </h3>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mb-6 mx-auto lg:mx-0 leading-relaxed">
            Get exclusive access to car rentals with our mobile app.<br />
            Download now and experience convenience on the go.
          </p>

      
          <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
            <a href="a">
              <img
                src="https://velotrax.sa/assets/Apple-BV6cvNkv.svg"
                alt="App Store"
                className="h-auto w-[180px] sm:w-[200px] lg:w-[234px]"
              />
            </a>
            <a href="a">
              <img
                src="https://velotrax.sa/assets/Google-CZVn2nDm.svg"
                alt="Google Play"
                className="h-auto w-[180px] sm:w-[200px] lg:w-[234px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header5;