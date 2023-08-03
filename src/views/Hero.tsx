import { useScroll, useTransform, motion } from 'framer-motion'
import { useEffect, useRef, useState } from "react";
import BotTop from '../anim/BotTop';
import Nav from '../components/Nav';

const Hero = () => {

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


    const { scrollYProgress } = useScroll({
        target: target,
        offset: ['end start', 'end end']
    })

    const opacity = useTransform(scrollYProgress, [0.4, 1], [0, 1])

    return (
        <motion.div className="w-full h-screen relative bg-bg" ref={target} style={{ opacity }}>
            <div className={`bg-bg px-5 w-full h-screen text-white ${fixed ? 'fixed top-0 left-0' : 'relative'}`}>

                <Nav />

                <div className="w-[20rem] h-[20rem] bg-[#d88301] absolute bottom-10 right-10 rounded-full blur-[20rem]"></div>
                {/* <div className="w-[20rem] h-[20rem] bg-[#d88301] absolute left-10 top-44 rounded-full blur-[20rem]"></div> */}


                <div className="max-w-[1400px] mx-auto w-full h-full flex items-center px-3 relative">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97] }} className="h-full w-[1px] bg-white/10 absolute left-0" />
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 0.77, 0.47, .97] }} className="h-full w-[1px] bg-white/10 absolute left-[25rem]" />
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 0.77, 0.47, .97] }} className="h-full w-[1px] bg-white/10 absolute left-[50rem]" />


                    <div className="w-full relative z-10 text-center lg:text-left">
                        <BotTop>
                            <h1 className="sm:text-6xl text-4xl font-primary max-w-[35rem] leading-tight mx-auto lg:mx-0">EXPLORE THE STORY OF PYTHIA</h1>
                        </BotTop>
                        <BotTop delay={0.1}>
                            <p className="sm:text-2xl text-xl leading-[1.8rem] text-subtle font-secondary mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </BotTop>

                        <BotTop delay={0.15}>
                            <button className="bg-button rounded-md px-7 py-[5px] font-secondary text-2xl text-black mt-8">
                                Discover
                            </button>
                        </BotTop>


                    </div>
                    <div className="w-full relative z-10 lg:block hidden">
                        <BotTop>
                            <img src="/pythia.webp" alt="Pythia" className="h-[120vh] mt-44 object-cover mx-auto " />
                        </BotTop>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default Hero;