
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import BotTop from "../anim/BotTop";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'

const Roadmap = () => {

    const target = useRef<HTMLDivElement>(null)
    const [fixed, setFixed] = useState(false);

    const handleScroll = () => {

        const targetDivPosition = target?.current?.getBoundingClientRect().top;

        if (targetDivPosition && targetDivPosition <= 0) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };


    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const arr = [...new Array(4)]

    const roadList = [
        {
            title: "",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },


    ]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={fixed ? { opacity: 100 } : { opacity: 0 }} transition={{ duration: 0.5 }} className="w-full h-[200vh] relative z-10" ref={target}>
            <div className={`bg-bg  w-full h-screen text-white overflow-hidden fixed top-0 left-0 flex items-center px-5`}>


                <div className="max-w-[1400px] w-full mx-auto relative py-32">
                    <div className="w-full h-full absolute top-0 left-0 flex gap-x-3">
                        {arr.map((items, i) => {
                            return (
                                <img src={`/bg/${i + 1}.webp`} alt={`${items + 100}`} className="w-full object-cover" key={i} />
                            )
                        })}
                    </div>


                    <div className="flex h-full gap-x-10 items-start">

                        <div className="w-full text-center">
                            {fixed ?
                                <>
                                    <BotTop>
                                        <h1 className="font-primary text-4xl md:text-5xl lg:text-6xl uppercase">Roadmap</h1>
                                    </BotTop>

                                    <div className="flex items-center gap-x-4 justify-center mt-10">
                                        <Slider {...settings} className="xl:max-w-[77rem] lg:max-w-[51rem] sm:max-w-[21rem] max-w-[19rem] w-full">
                                            {roadList.map((items, i) => {
                                                return (

                                                    <motion.div initial={{ opacity: 0 }} whileInView={{ scale: [0.5, 0.95], opacity: 100 }} transition={{ duration: 1 }} className="lg:w-[25rem] w-[19rem] sm:w-[21rem] h-[30rem] border-[#C4A066] border-[1px] p-5 px-6 text-center" key={i}>
                                                        <h1 className="font-primary text-2xl">Phase {i + 1}</h1>

                                                        <p className="font-secondary text-2xl leading-tight text-subtle mt-10">
                                                            {items.desc}
                                                        </p>
                                                    </motion.div>


                                                )
                                            })}
                                        </Slider>

                                    </div>
                                </>
                                : null}
                        </div>

                    </div>

                </div>
            </div>
        </motion.div>

    );
}

export default Roadmap;