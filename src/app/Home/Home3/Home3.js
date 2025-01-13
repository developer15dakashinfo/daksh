import React from "react";

const StackingCards = () => {
  const cardsData = [
    {
      title: "WELCOME TO DAKSH INFOSOFT",
      text: "Amongst best software companies, our offshore software development services are geared to deliver results that you expect from an Indian IT outsourcing company.",
      backgroundColor: "#fffff", 
    },
    {
      title: "Grow With Us",
      text: "Daksh Infosoft Pvt. Ltd. is incorporated under the Companies Act which states that the company is entitled to be a Private Limited Company with a handfull of industry professionals, having in- depth experience of technology and organizational development, on the premise of providing cutting edge communication solutions to global business community.",
      image: "https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK",
      backgroundColor: "#46a0fa", 
    },
    {
      title: "Creative Solutions",
      text: "We provide you with the Best Solutions. Creative, modern & simple Design Cutting Edge Services & Features Designing, Web Development, software development, Web application development and mobile application development. We deal to provide a highly scalable conceptual and funtional solutions to the companies around the world.",
      image: "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#23d2a0", 
    },
    {
      title: "Future-Ready Technology",
      text: " Daksh Infosoft Pvt. Ltd. has turned up into a renowed integrated Infotech service provider offering you with a cost- effective and quality solutions in Web Design, Web Development, eCommerce Website Development, Mobile App Development, Graphic Design Services, Digital Marketing, Bulk SMS, Voice Call, IVR Call Services, SEO Services, SMO Services, PPC Services.",
      image: "https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A",
      backgroundColor: "#b387ff", 
    },
  ];

  return (
    <div className="bg-black text-white text-center font-sans">
      

      <main className="w-[90%] mx-auto relative pb-10">
        <ul
          id="cards"
          className="grid grid-cols-1 gap-4 relative pb-[calc(var(--numcards)*em)]"
        >
          {cardsData.map((card, index) => (
            <li
              key={index}
              className="sticky top-0"
              style={{ paddingTop: `${index + 2}em` }}
            >
              <div
                className="shadow-xl text-[#0A0507] rounded-lg overflow-hidden grid grid-cols-2"
                style={{ backgroundColor: card.backgroundColor }}
              >
                {index === 0 ? (
                  <div className="py-10 px-14 text-center">
                    <h1 className="text-5xl text-white font-extrabold pb-5">
                      WELCOME TO DAKSH INFOSOFT
                    </h1>
                    <p className="text-white">
                      Amongst best software companies, our offshore software development
                      services are geared to deliver results that you expect from an
                      Indian IT outsourcing company.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="py-10 px-14">
                      <h2 className="text-4xl font-extrabold py-8">{card.title}</h2>
                      <p className="mt-4 text-lg leading-relaxed text-left">{card.text}</p>
                      <a
                        href="#top"
                        className="inline-block mt-4 bg-white text-black px-4 py-2 rounded-md"
                      >
                        Read more
                      </a>
                    </div>
                    <div className="p-28">
                      <figure className="overflow-hidden rounded-lg">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="object-cover"
                        />
                      </figure>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StackingCards;



