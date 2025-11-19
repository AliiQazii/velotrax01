import React from 'react';

function Header5() {
  return (
    <div className="py-16 px-4">
      <div id="OurServices" className="section bg-white mt-8 mb-8 ml-0 mr-0 p-4">
      <h1 className="lg:text-[48px] sm:text-3xl font-bold mb-8 text-center">Our Services</h1>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3 text-center mb-16">
        <div className="flex flex-col items-center mt-6">
          <img
            src="https://static.thenounproject.com/png/3334439-200.png"
            alt="tracking"
            className="w-12 h-12 mb-4"
          />
          <p className="lg:text-xl sm:text-base">Managing and tracking trucks and drivers with ease.</p>
        </div>

        <div className="flex flex-col items-center mt-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/69/69890.png"
            alt="customer service"
            className="w-12 h-12 mb-4"
          />
          <p className="lg:text-xl sm:text-base">We provide 24/7 customer service.</p>
        </div>

        <div className="flex flex-col items-center mt-6">
          <img
            src="https://www.freeiconspng.com/uploads/google-location-icon-16.png"
            alt="location"
            className="w-12 h-12 mb-4"
          />
          <p className="lg:text-xl sm:text-base">We provide certified and trained drivers.</p>
        </div>
      </div>
      </div>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3 text-center">
        <div className="flex flex-col items-center">
          <p className="font-bold sm:text-5xl lg:text-[54px] ">20+</p>
          <p className="text-xl">Saudi Arab Cities</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold sm:text-5xl lg:text-[54px]">100+</p>
          <p className="text-xl">Driver partners</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold sm:text-5xl lg:text-[54px] ">450+</p>
          <p className="text-xl">Customers</p>
        </div>
      </div>
    </div>
  );
}

export default Header5;
