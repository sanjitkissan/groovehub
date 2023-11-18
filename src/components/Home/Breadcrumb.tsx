import { breadcrumbArr } from "@/src/utils/home";
import React, {useEffect} from "react";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
};
export default function Breadcrumb() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className="w-full overflow-hidden ">
      <Slider {...settings}>
        {breadcrumbArr.map((item)=>(
        <section className="w-full relative " key={item.id} >
          <img
            src={item.img.src}
            alt=""
            className="w-full lg:h-[80vh] h-auto object-cover"
          />
          <div className="absolute top-0 bottom-0 right-0 left-0 lg:flex flex-col lg:flex-row items-center justify-center gap-2 hidden">
            <div className="w-full flex  item-center lg:justify-end justify-center" data-aos="fade-right">
                <h2 className="lg:text-6xl text-2xl font-bold text-white uppercase lg:text-end text-center logoWarper_two">{item.title}</h2>
            </div>
            <div className="w-full flex  item-center lg:justify-start justify-center" data-aos="fade-left">
                <p className="lg:text-lg font-medium lg:tracking-wider text-white w-[60%] logoWarper_two">{item.content}</p>
            </div>
          </div>
        </section>
        ))}
      </Slider>
     
    </section>
  );
}
