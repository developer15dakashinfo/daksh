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
          several significant awards a  nd partnered with leading technologies.
        </h1>
      </div>

      <div className="pb-20 px-8 sm:px-8 md:px-20 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full mx-auto">
          {/* Left Column */}
          <div className="grid grid-cols-2 gap-4 border-b sm:border-b-0 sm:border-r border-gray-300 pl-4 sm:pl-8 md:pl-20 pb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
              alt="Forbes 2024 Official Member"
              className="h-20 object-contain"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsKqSLGl5f5ecOWOaDq3Buknmfwj9iQJT3A&s"
              alt="Clutch Champion Spring 2024"
              className="h-20 object-contain"
            />
            <img
              src="https://www.perfecto.io/sites/default/files/image/2021-05/image-blog-flutter-framework.jpg"
              alt="Clutch 1000 2023"
              className="h-20 object-contain"
            />
            <img
              src="https://www.thelogocreative.co.uk/wp-content/uploads/Mobilunity-Logo-Design-min.jpg"
              alt="Ecommerce Awards 2022"
              className="h-20 object-contain"
            />
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
            <img
              src="https://cms.digitalpolygon.com/sites/default/files/styles/wide/public/2022-07/Digital-marketing-banner.jpg?itok=JXkj5WxY"
              alt="Microsoft Gold Partner"
              className="h-12 object-contain"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsKqSLGl5f5ecOWOaDq3Buknmfwj9iQJT3A&s"
              alt="Adobe Solution Partner"
              className="h-12 object-contain"
            />
            <img
              src="https://cdn.logojoy.com/wp-content/uploads/20230717150559/Chanel-iconic-logo-600x319.png"
              alt="BigCommerce Partner"
              className="h-12 object-contain"
            />
            <img
              src="https://cdn.logojoy.com/wp-content/uploads/20230717150559/Chanel-iconic-logo-600x319.png"
              alt="Keyfactor Partner"
              className="h-12 object-contain"
            />
            <img
              src="https://www.thelogocreative.co.uk/wp-content/uploads/Mobilunity-Logo-Design-min.jpg"
              alt="Salesforce Platinum Partner"
              className="h-12 object-contain"
            />
            <img
              src="https://e7.pngegg.com/pngimages/438/630/png-clipart-mobile-app-development-android-software-development-android-logo-grass-thumbnail.png"
              alt="Google Partner"
              className="h-12 object-contain"
            />
            <img
              src="https://www.perfecto.io/sites/default/files/image/2021-05/image-blog-flutter-framework.jpg"
              alt="AWS Advanced Partner"
              className="h-12 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
              alt="Shopify Partner"
              className="h-12 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
              alt="HubSpot Partner"
              className="h-12 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
              alt="Zoho Advanced Partner"
              className="h-12 object-contain"
            />
            <img
              src="https://www.thelogocreative.co.uk/wp-content/uploads/Mobilunity-Logo-Design-min.jpg"
              alt="Pantheon Partner"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
