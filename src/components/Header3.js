
function Header3({ trucks }) {
  return (
    <div className="py-16 px-4">
      <h1 className="text-[48px] font-bold mb-2 text-center">Our Trucks</h1>
      <p className="text-center sm:text-base lg:text-xl mb-8 max-w-2xl mx-auto">
        We offer a diverse fleet for goods transportation providing reliable pickup and drop-off services for loads of all types and sizes.
      </p>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {trucks.map((truck) => (
          <div key={truck.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <img src={truck.img} alt={truck.title}
                 className="h-40 max-w-full w-auto object-contain mb-4" />
            <h2 className="text-[32px] font-bold mb-1">{truck.title}</h2>
            <p className="text-xl text-gray-700 mb-4">{truck.desc}</p>
            <button className="px-4 py-2 font-bold w-[153px] border border-[#003D70] rounded-full hover:bg-btn-radial hover:text-white transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header3;

