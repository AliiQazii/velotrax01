import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Header1({ trucks }) {
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [showPackageDetails, setShowPackageDetails] = useState(false);
  const [showReceiverInfo, setShowReceiverInfo] = useState(false);
  const [showWorkers, setShowWorkers] = useState(false);
  const [workerCount, setWorkerCount] = useState(0);
  const [scheduledDate, setScheduledDate] = useState(null);
  const [loadType, setLoadType] = useState("");

  return (
    <>
      <section
        className="flex flex-col justify-between text-white
      bg-[radial-gradient(69%_199.37%_at_51.8%_51.85%,#0738a1d9,#022149d9)]
      pt-20"
      >
        <div id="OurProgram" className="section"></div>
        <div className="mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h3 className="text-5xl md:text-6xl font-bold mb-4">
              Affordable, Safe, & Efficient Truck Shipping
            </h3>
            <p className="text-lg md:text-xl mb-4">
              Experience seamless transportation with Velotrax. Track your
              shipments in real-time and enjoy peace of mind knowing they're
              delivered safely.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <>
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
              </>
            </div>
          </div>
          <div className="flex justify-end">
            <img
              src="https://velotrax.sa/assets/trucks-D1zvPuOF.png"
              alt="truck"
              className="w-full max-w-[800px] float-right lg:w-[65vw] object-contain"
            />
          </div>
        </div>
        <div className="flex max-w-6xl ml-24 mt-16 rounded-3xl">
          <div
            className="flex lg:w-max flex-wrap gap-4
          bg-[linear-gradient(rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.18)_100%)]
          rounded w-1/2 mr-auto"
          >
            {trucks.map((truck, index) => {
              const isSelected = selectedTruck === truck.name;
              return (
                <React.Fragment key={index}>
                  <div
                    className={`flex flex-col items-center px-4 py-3 rounded cursor-pointer ${
                      isSelected ? "bg-white text-black" : "text-white"
                    }`}
                    onClick={() => setSelectedTruck(truck.name)}
                  >
                    <img
                      src={truck.src}
                      alt={truck.name}
                      className={`w-16 h-16 mb-2 ${
                        isSelected ? "" : "filter invert"
                      }`}
                    />
                    <span className="text-xs sm:text-sm">{truck.name}</span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="bg-white text-black p-4 sm:p-6 shadow w-full max-w-6xl mx-auto text-xs ml-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Pick-up Location
                </label>
                <div className="flex items-start gap-2 bg-gray-100 p-2 rounded">
                  <img src="/image/arrow.png" alt="arrow" className="w-4 h-4" />
                  <div className="flex flex-col">
                    <h6 className="font-medium text-sm text-gray-900">
                      Al Munsiyah
                    </h6>
                    <p className="flex text-xs text-black">
                      Al Sahaba Road, Riyadh Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Drop-off Location
                </label>
                <div className="flex items-start gap-2 bg-gray-100 p-2 rounded">
                  <img
                    src="/image/location.png"
                    alt="location"
                    className="w-4 h-4"
                  />
                  <div className="flex flex-col">
                    <h6 className="font-medium text-sm text-gray-900">
                      Al Munsiyah
                    </h6>
                    <p className="flex text-xs text-black">
                      Al Sahaba Road, Riyadh Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <img src="/image/box.png" alt="box" className="w-4 h-4" />
                  <label className="text-sm font-medium">Load Type</label>
                </div>
                <select
                  className="w-full border border-gray-300 rounded px-2 py-1"
                  value={loadType}
                  onChange={(e) => setLoadType(e.target.value)}
                >
                  <option value="" disabled>
                    Select Load Types
                  </option>
                  <option value="Construction">Construction</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Cement">Cement</option>
                  <option value="Carpents">Carpents</option>
                  <option value="Steel items">Steel items</option>
                  <option value="Stationary">Stationary</option>
                  <option value="Batteries">Batteries</option>
                  <option value="Food items">Food items</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <img src="/image/Calender.png" alt="calender" />
                <label className="text-sm font-medium mb-1 block">Now</label>
                <DatePicker
                  selected={scheduledDate}
                  onChange={(date) => setScheduledDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  placeholderText="Select date and time"
                  className="w-full border border-gray-300 rounded px-2 py-1"
                />
              </div>
            </>
          </div>
        </div>
      </section>
      <section
        className="bg-white text-black flex flex-col lg:flex-row lg:justify-end 
      items-start lg:items-center gap-4 p-6 w-full max-w-6xl mx-auto text-sm 
      relative ml-24 z-10"
      >
        <div className="flex justify-end gap-10">
          <>
            <>
              <div className="flex items-center gap-2">
                <img src="/image/packages.png" alt="packages" />
                <button
                  className="w-full py-2 rounded text-left"
                  onClick={() => setShowPackageDetails(!showPackageDetails)}
                >
                  Package Details ▼
                </button>
                {showPackageDetails && (
                  <div className="border rounded shadow p-3 mt-2 flex flex-col gap-2">
                    <input
                      className="border px-2 py-1 rounded"
                      placeholder="Goods Estimate Cost"
                    />
                    <textarea
                      className="border px-2 py-1 rounded"
                      placeholder="Comments"
                    />
                    <input type="file" className="border px-2 py-1 rounded" />
                  </div>
                )}
              </div>
            </>
            <>
              <div className="flex items-center gap-2">
                <img src="/image/receiver.png" alt="receiver" />
                <button
                  className="w-full py-2 rounded text-left"
                  onClick={() => setShowReceiverInfo(!showReceiverInfo)}
                >
                  Receiver Info ▼
                </button>
                {showReceiverInfo && (
                  <div className="border rounded shadow p-3 mt-2 flex flex-col gap-2">
                    <input
                      className="border px-2 py-1 rounded"
                      placeholder="Receiver Name"
                    />
                    <input
                      className="border px-2 py-1 rounded"
                      placeholder="Mobile Number"
                    />
                  </div>
                )}
              </div>
            </>
            <>
              <div className="flex items-center gap-2">
                <img src="/image/Workers.png" alt="works" />
                <button
                  className="w-full py-2 rounded text-left"
                  onClick={() => setShowWorkers(!showWorkers)}
                >
                  Includes Workers ▼
                </button>
                {showWorkers && (
                  <div className="border rounded shadow p-3 mt-2 flex flex-col gap-2">
                    <label>Number of Workers</label>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        className="border px-2 py-1 rounded"
                        onClick={() =>
                          setWorkerCount(Math.max(0, workerCount - 1))
                        }
                      >
                        -
                      </button>
                      <span className="font-bold">{workerCount}</span>
                      <button
                        className="border px-2 py-1 rounded"
                        onClick={() => setWorkerCount(workerCount + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
            <div className="md:col-span-2">
              <button className="w-full lg:w-auto bg-white border-2 border-[#003D70] font-bold py-2 px-6 rounded-full transition">
                Book Now
              </button>
            </div>
          </>
        </div>
      </section>
    </>
  );
}

export default Header1;
