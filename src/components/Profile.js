import { Link } from "react-router-dom"
import RealTimeCountdown from "./Counterup"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "../assets/1.jpg"
import Image2 from "../assets/2.jpg"
import Image3 from "../assets/3.JPG"

const Profile = () => {
    return(
        <>
            <div className="bg-mybgcolor w-screen h-screen flex items-center justify-center">
                <div className="bg-mycolor w-4/5 h-4/5 relative flex rounded-lg shadow-xl">
                     <div className=" m-5 container ">
                        <div className="mt-10 mx-10 w-max font-bold text-4xl text-white">
                            PROFILE
                        </div>
                        <div className=" mx-10 mt-20 text-start text-white font-thin">
                            My nickname is Dandy, from Situbondo, East Java. Born in Situbondo on 19th January 2004, so my age now is : 
                            <RealTimeCountdown>
                                <div>{RealTimeCountdown}</div>                           
                            </RealTimeCountdown>
                            <br></br>
                            <br></br>
                            My hobby is travelling and coding, now im a student on Software Engineering study program.
                        </div>
                        <div className="inline-flex gap-5 ml-6 mt-16" role="group">
                            <Link className="rounded-lg px-6 py-2.5 bg-mybgcolor text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="/">Portfolio</Link> 
                            <Link className="rounded-lg px-6 py-2.5 bg-blue-700 text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="">Profile</Link>
                            <Link className="rounded-lg px-6 py-2.5 bg-mybgcolor text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="/edu">Education</Link>
                            <Link className="rounded-lg px-6 py-2.5 bg-mybgcolor text-white font-medium text-xs uppercase hover:bg-mycolor2 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" to="/cont">Contact</Link>
                        </div>
                    </div>
                    <Swiper spaceBetween={1} centeredSlides={true} autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper container justify-center flex my-10">
                        <SwiperSlide>
                            <img src={Image} alt="photo1" className="mx-auto rounded-2xl w-80"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Image2} alt="photo2" className="mx-auto rounded-2xl w-80"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Image3} alt="photo3" className="mx-auto rounded-2xl w-80"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Profile