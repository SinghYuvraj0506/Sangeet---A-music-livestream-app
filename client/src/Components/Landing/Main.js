import React, { useEffect } from "react";
import "./Main.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function Main() {

  
  return (
    <div className="mainbox">
      <section className="imagebanner">
        <img src={require("../Images/banner_1.png")} alt="Sangeet" />
      </section>

      {/* Recently played section --------------------------------------------- */}
      <h2 className="sectionHeaders">Recently Played</h2>
      <section className="recentlyplayed">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><div className="songcards">Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 2</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 3</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 4</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 5</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 6</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 7</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 8</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 9</div></SwiperSlide>
          </Swiper>
      </section>


      {/* Artists played section --------------------------------------------- */}
      <h2 className="sectionHeaders">Most Played Artists</h2>
      <section className="recentlyplayed">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><div className="songcards">Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 2</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 3</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 4</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 5</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 6</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 7</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 8</div></SwiperSlide>
            <SwiperSlide><div className="songcards">Slide 9</div></SwiperSlide>
          </Swiper>
      </section>
    </div>
  );
}

export default Main;
