

import React from "react";


const AchievementSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-lg text-center sm:text-xl md:text-4xl">
          Achievements
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-3 text-black">
          Leading Technology Partners and Achievements
        </h1>
        <h1 className="text-sm sm:text-lg md:text-xl text-center mb-10 mt-4 text-black">
          With a history of excellence and innovation, we've been honored with
          several significant awards and partnered with leading technologies.
        </h1>
      </div>

      <div className="pb-20 px-8 sm:px-8 md:px-20 lg:px-40">
        <div className="flex gap-20 max-w-full mx-auto">
          {/* Left Column */}
          <div className="w-5/12 border-b sm:border-b-0 sm:border-r border-gray-300 pl-4 sm:pl-8 md:pl-20 pb-4">
            <div className="grid grid-cols-2 gap-8 pr-20">
              <img
                src="https://attentioninsight.com/wp-content/uploads/2023/04/Image-of-React-JS.png"
                alt="Forbes 2024 Official Member"
                className="h-36 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
                alt="Clutch Champion Spring 2024"
                className="h-36 object-contain"
              />
              <img
                src="https://www.websitemagazine.com/hubfs/Imported_Blog_Media/WordPress-Logo-1.png"
                alt="Clutch 1000 2023"
                className="h-36 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png"
                alt="Ecommerce Awards 2022"
                className="h-36 object-contain"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-8/12 grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
            <img
              src="https://cms.digitalpolygon.com/sites/default/files/styles/wide/public/2022-07/Digital-marketing-banner.jpg?itok=JXkj5WxY"
              alt="Microsoft Gold Partner"
              className="h-16 object-contain"
            />
            <img
              src="https://attentioninsight.com/wp-content/uploads/2023/04/Image-of-React-JS.png"
              alt="Adobe Solution Partner"
              className="h-16 object-contain"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9ihFKLqTqaxXH7OEYuTi5Bu-a8YINk436g&s"
              alt="BigCommerce Partner"
              className="h-16 object-contain"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzD0toQpglUeP9RtPckNOT52BA7H3ojPziiA&s"
              alt="Keyfactor Partner"
              className="h-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png"
              alt="Salesforce Platinum Partner"
              className="h-16 object-contain"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LxanITK6wU8l_nJZBNN4-aRNBPcP_WqELQ&s"
              alt="Google Partner"
              className="h-16 object-contain"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzD0toQpglUeP9RtPckNOT52BA7H3ojPziiA&s"
              alt="AWS Advanced Partner"
              className="h-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
              alt="Shopify Partner"
              className="h-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
              alt="HubSpot Partner"
              className="h-16 object-contain"
            />
            <img
              src="https://attentioninsight.com/wp-content/uploads/2023/04/Image-of-React-JS.png"
              alt="Zoho Advanced Partner"
              className="h-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png"
              alt="Pantheon Partner"
              className="h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
