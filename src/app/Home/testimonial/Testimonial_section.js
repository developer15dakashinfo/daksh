import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import './Testimonial_section.scss';
const Testimonial_section = () => {
  const sliderRef = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSlider.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
        created(slider) {
          let autoplay = setInterval(() => {
            slider.next();
          }, 3000);
          slider.on("dragStart", () => clearInterval(autoplay));
          slider.on("animationEnd", () => {
            autoplay = setInterval(() => {
              slider.next();
            }, 3000);
          });
        },
      });
    }
    return () => keenSlider.current?.destroy();
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              id="keen-slider-previous"
              className="rounded-full border border-gray-600 p-2"
              onClick={() => keenSlider.current?.prev()}
            >
              Prev
            </button>
            <button
              id="keen-slider-next"
              className="rounded-full border border-gray-600 p-2"
              onClick={() => keenSlider.current?.next()}
            >
              Next
            </button>
          </div>
        </div>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide bg-white p-4 shadow-md">Slide 1</div>
          <div className="keen-slider__slide bg-white p-4 shadow-md">Slide 2</div>
          <div className="keen-slider__slide bg-white p-4 shadow-md">Slide 3</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial_section;
