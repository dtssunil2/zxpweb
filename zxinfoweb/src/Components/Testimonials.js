import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import SingleTestimonial from "./SingleTestimonial";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <section className="pb-10 pt-10 dark:bg-dark lg:pb-[5px] lg:pt-[5px] ">
        <div className="container mx-auto">
          <h1 className="ml-[600px] mt-10 text-blue-500 font-bold text-[1.75rem] ">
            What People Says
          </h1>
          <Swiper slidesPerView={1} ref={sliderRef}>
            <SwiperSlide>
              <SingleTestimonial
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                reviewAlt="lineicon"
                details="Transformative IT solutions, exceptional service. ZXINFOSOLUTIONS delivers excellence at every turn. Grateful for their expertise and dedication to our success!"
                name="Larry Diamond"
                position="Chief Executive Officer."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Sec._John_King_and_Chelsea_Handler_%28cropped%29.jpg/475px-Sec._John_King_and_Chelsea_Handler_%28cropped%29.jpg"
                reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                reviewAlt="lineicon"
                details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                name="Angela Cobie"
                position="Managing Director."
              />
            </SwiperSlide>
            <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-5 sm:bottom-0">
              <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                  <MdOutlineNavigateBefore className=" text-blue-500 size-36 mr-2" />
                </button>
              </div>
              <div className="next-arrow cursor-pointer" onClick={handleNext}>
                <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                  <MdNavigateNext className="  text-blue-500 size-36  ml-2" />
                </button>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
