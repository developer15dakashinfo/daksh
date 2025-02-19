import SlidingButton from "@/app/SlidingButton/SlidingButton";

export default function CaseStudies() {
  const caseStudies = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661375427386-64ac35086427?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzZSUyMHN0dWR5fGVufDB8fDB8fHww",
      title: "Signature Suites",
      description:
        "software company analyzes its results from a client project and creates a webpage, presentation, or document that focuses on high-level results, challenges, and solutions in an attempt to showcase effectiveness and promote the software.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1345144783/photo/freelancers-working-on-new-projects.jpg?s=612x612&w=0&k=20&c=dGCrrXG9zivZ_tS4CLqA6VixXFokiS_kBI4ADSxfgpo=",
      title: "Automation",
      description:
        "software company analyzes its results from a client project and creates a webpage, presentation, or document that focuses on high-level results, challenges, and solutions in an attempt to showcase effectiveness and promote the software.",
    },
    {
      image:
        "https://media.istockphoto.com/id/2150778542/photo/user-customer-review-evaluates-satisfaction-with-a-product-or-service-customers-give-a-rating.jpg?s=612x612&w=0&k=20&c=z7TjkYCQnPvCQcZFRkiucsAsIbxqFHpmq0FbtK1r18c=",
      title: "Smart Locking",
      description:
        "software company analyzes its results from a client project and creates a webpage, presentation, or document that focuses on high-level results, challenges, and solutions in an attempt to showcase effectiveness and promote the software.",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/09/60/05/48/360_F_960054825_CQCuGBGa9sPzA9qzIuijllqFBmduJZ2I.jpg",
      title: "Smart Locking",
      description:
        "software company analyzes its results from a client project and creates a webpage, presentation, or document that focuses on high-level results, challenges, and solutions in an attempt to showcase effectiveness and promote the software.",
    },
  ];

  return (
    <div className="max-w-[1800px]  mx-auto ">
    <section className="pt-20 pb-48 bg-gray-200">
      <div className="text-center mb-10">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Case
          </span>{" "}
          Studies
        </h1>
        <p className="text-gray-500 text-lg mt-1 tracking-wide">
          SPECIAL FOR YOU
        </p>
      </div>

      <div className="container mx-auto px-5 sm:px-20 md:px-16 lg:px-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12 gap-32 md:gap-14 lg:gap-12 max-w-full">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-visible transition-transform transform hover:-translate-y-2"
          >
            <div className="md:h-[300px] lg:h-[300px] sm:h-[200px] xl:h-[250px] w-full overflow-hidden rounded-t-lg relative">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-opacity-20"></div>
            </div>

            <div className="absolute top-[90px] sm:top-[120px] lg:top-[100px] md:top-[100px] xl:top-[100px] left-1/2 transform transition duration-300 hover:scale-105 -translate-x-1/2 w-full max-w-[92%] sm:h-[180px] lg:h-[220px] md:h-[200px] xl:h-[250px] bg-white shadow-md rounded-lg px-4 py-5 overflow-hidden">
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-left line-clamp-3 md:line-clamp-4 lg:line-clamp-4 xl:line-clamp-6 overflow-hidden">
                {caseStudy.description}
              </p>

              <div className="py-2 flex justify-center">
                <SlidingButton
                  text="Read More"
                  bgColor="bg-black"
                  textcolor="text-white"
                  arrowBgColor="bg-black"
                  arrowTextColor="text-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
