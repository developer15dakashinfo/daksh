import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export function VerticalTabsWithIcon() {
  const data = [
    {
      label: "SEO Optimisation",
      name: "SEO Optimisation",
      value: "html",
      desc: "It really matters and then like it really doesn't matter.     What matters is the people who are sparked by it. And the people      who are like offended by it, it doesn't matter.",
    },
    {
      label: "Security",
      name: "Security",
      value: "react",
      desc: "Because it's about motivating the doers. Because I'm here  to follow my dreams and inspire other people to follow their dreams, too.",
    },
    {
      label: "E-Commerce Integration",
      name: "E-Commerce Integration",
      value: "vue",
      desc:" We're not always in the position that we want to be at.  We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
    },
    {
      label: "Conversion Rate Optimisation",
      name: "Conversion Rate Optimisation",
      value: "angular",
      desc:" Because it's about motivating the doers. Because I'm here  to follow my dreams and inspire other people to follow their dreams, too.",
    },

  ];
 
  return (
    <Tabs value="html">
      <TabsHeader className="bg-black p-4">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-xl  p-1 rounded-lg">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="bg-white rounded-lg p-4">
        {data.map(({ value, desc,name }) => (
          <TabPanel key={value} value={value} className=" ">
              <h2 className=" text-xs text-transparent mb-2 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font- font-manrope leading-normal text-start ">
              {name}
                </h2>
            {desc}
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 mt-4 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
               
                <h2 className=" text-4xl font-bold font-manrope leading-normal text-start ">
                  Built Relationships with 12,500+ Happy Clients!
                </h2>
                <p className=" text-base font-normal leading-relaxed lg:text-start ">
                  Trusted by more than 12,500 satisfied clients, we
                  consistently deliver proven results through timely execution
                  and exceptional service.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-start items-start sm:gap-10 gap-5 inline-flex ">
                <div className="flex-col justify-start items-start inline-flex ">
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl font-bold font-manrope leading-normal">
                    33+
                  </h3>
                  <h6 className=" text-base font-normal leading-relaxed">
                    Years of Experience
                  </h6>
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl font-bold font-manrope leading-normal">
                    125+
                  </h4>
                  <h6 className=" text-base font-normal leading-relaxed">
                    Successful Projects
                  </h6>
                </div>
                <div className="flex-col justify-center items-start inline-flex text-center">
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl font-bold font-manrope leading-normal text-center">
                    52+
                  </h4>
                  <h6 className=" text-base font-normal leading-relaxed">
                    Happy Clients
                  </h6>
                </div>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex text-center">
                <div className="flex-col justify-start items-start inline-flex text-center">
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl font-bold font-manrope leading-normal text-center">
                    33+
                  </h3>
                  <h6 className=" text-base font-normal leading-relaxed text-center">
                    Years of Experience
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  text-4xl font-bold font-manrope leading-normal">
                    125+
                  </h4>
                  <h6 className=" text-base font-normal leading-relaxed">
                    Successful Projects
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl font-bold font-manrope leading-normal">
                    52+
                  </h4>
                  <h6 className=" text-base font-normal leading-relaxed">
                    Happy Clients
                  </h6>
                </div>
              </div>
            </div>
          </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}