import React from "react";

const OurTeam = () => {
  const cards = [
    { title: "Hello there!", message: "Trust yourself and keep going." },
    { title: "You got this!", message: "Keep pushing forward." },
    { title: "Stay Positive", message: "Good things are coming." },
    { title: "Never Give Up", message: "Success is just ahead." },
  ];

  return (
    <>
      <div className="bg-gray-200 ">
        <div className=" text-center pt-20">
          <h2 className="text-[50px]  font-extrabold text-gray-800">
            Meet My Team
          </h2>
          <p className="text-gray-600 text-[18px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            tellus vestibulum, commodo pulvinar.
          </p>
        </div>

        {/* <div className="min-h-[500px] flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
            {cards.map((card, index) => (
              <div key={index} className="group relative w-72 h-48 ">
                <div
                  className="absolute inset-0 rounded-b-lg flex justify-center items-center  transform translate-y-24 transition-transform duration-700 group-hover:translate-y-0 z-10"
                  style={{
                    backgroundImage:
                      "url('https://assets.weforum.org/article/image/v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="text-white text-6xl">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="absolute rounded-t-lg inset-0 flex flex-col justify-center items-center p-5 bg-white shadow-md transform -translate-y-24 transition-transform duration-700 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold text-gray-700">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-center mt-2">
                    {card.message}
                  </p>
                  <div className="absolute bottom-4 w-8 h-1 bg-blue-500 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="font-sans">
          <div className="max-w-6xl mx-auto px-10">
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
              <div className="bg-gray-800 p-4 border rounded-lg">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  className="w-full object-contain object-top rounded-lg"
                />
                <div className="text-center mt-4">
                  <h4 className="text-base font-semibold text-white">
                    Software Engineer
                  </h4>
                  <p className="text-xs mt-2 text-white">John Doe</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 border rounded-lg">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  className="w-full object-contain object-top rounded-lg"
                />
                <div className="text-center mt-4">
                  <h4 className="text-base font-semibold text-white">
                    Web Developer
                  </h4>
                  <p className="text-xs mt-2 text-white">Mark Adair</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 border rounded-lg">
                <img
                  src="https://readymadeui.com/team-3.webp"
                  className="w-full object-contain object-top rounded-lg"
                />
                <div className="text-center mt-4">
                  <h4 className="text-base font-semibold text-white">
                    Web Designer
                  </h4>
                  <p className="text-xs mt-2 text-white">Simon Konecki</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 border rounded-lg">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  className="w-full object-contain object-top rounded-lg"
                />
                <div className="text-center mt-4">
                  <h4 className="text-base font-semibold text-white">
                    Software Engineer
                  </h4>
                  <p className="text-xs mt-2 text-white">John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>

        <div className="font-sans bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-y-8 lg:divide-x-2 lg:divide-gray-300">
      <div className="px-8">
        <h6 className="text-gray-800 text-base font-extrabold mb-2">Welcome to Our Website</h6>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac enim velit. Donec iaculis, dui sed auctor ultricies, eros enim faucibus nisl, ac semper eros eros vitae nulla. Donec non quam in enim semper dignissim.</p>
      </div>
      <div className="px-8">
        <h6 className="text-gray-800 text-base font-extrabold mb-2">Welcome to Our Website</h6>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac enim velit. Donec iaculis, dui sed auctor ultricies, eros enim faucibus nisl, ac semper eros eros vitae nulla. Donec non quam in enim semper dignissim.</p>
      </div>
      <div className="px-8">
        <h6 className="text-gray-800 text-base font-extrabold mb-2">Welcome to Our Website</h6>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac enim velit. Donec iaculis, dui sed auctor ultricies, eros enim faucibus nisl, ac semper eros eros vitae nulla. Donec non quam in enim semper dignissim.</p>
      </div>
    </div>
  </div>
</div>
<br/><br/>
      </div>
    </>
  );
};

export default OurTeam;
