import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <div className="content testimonials">
      {/* title */}
      <div className="title">Testimonials</div>
      {/* content */}
      <div className="row testimonials-items">
        {/* client item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="revs-carousel default-revs">
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                   Exceptional MERN stack expertise. Built a secure, scalable backend (Node/Express/MongoDB) and delivered a seamless React front-end. Solved complex API and state challenges quickly. Top-tier professional.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/image1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Ali</div>
                      <div className="company">Client</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Transformed our corporate WordPress site. Built a custom, performance-optimized solution with advanced ACF and seamless third-party API integration. Highly recommended for complex WordPress development.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/image1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Ali</div>
                      <div className="company">Client</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Impressed by their effortless transition between MERN architecture and deep WordPress customization. Flawless communication, met all deadlines, and managed the full development lifecycle with professionalism. A truly reliable partner
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/image1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Ali</div>
                      <div className="company">Client</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Testimonials;
