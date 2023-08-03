
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from 'framer-motion'
import BotTop from "../anim/BotTop";

const About = () => {

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

    const { scrollYProgress } = useScroll({
        target: target,
        offset: ['start end', 'end end']
    })

    return (
        <motion.div initial={{ opacity: 0 }} animate={fixed ? { opacity: 100 } : { opacity: 0 }} transition={{ duration: 0.5 }} className="w-full h-[200vh] relative z-10" ref={target}>
            <div className={`bg-bg  w-full h-screen text-white overflow-hidden fixed top-0 left-0 flex items-center px-5`}>


                <div className="max-w-[1400px] w-full mx-auto relative py-32">
                    <div className="w-full h-full absolute top-0 left-0 flex gap-x-3">
                        {arr.map((items, i) => {
                            return (
                                <img src={`/bg/${i + 1}.webp`} alt={`${i + 100}`} className="w-full object-cover" key={i} />
                            )
                        })}
                    </div>



                    <div className="flex h-full gap-x-10 items-start">

                        <div className="w-[40rem] h-full pt-20 relative pl-[1px] lg:block hidden">
                            <motion.div initial={{ scaleY: 0 }} animate={fixed ? { scaleY: 1 } : { scaleY: 0 }} transition={{ duration: 1 }} className="bottom-0 origin-bottom w-full absolute h-full top-0 left-0 border-[1px] border-[#C4A066] box-content"></motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={fixed ? { opacity: 100 } : {}} transition={{ duration: 1, delay: 1 }} className="w-full h-[30rem] relative ">
                                <img src='/pythia_about.webp' alt="Pythia_About" className="w-full h-full object-cover absolute" />
                            </motion.div>
                        </div>



                        <div className="w-full">
                            {fixed ?
                                <>
                                    <BotTop>
                                        <h1 className="font-primary text-6xl">ABOUT</h1>
                                    </BotTop>

                                    <div className="mt-5 flex flex-col gap-y-5">
                                        <BotTop>
                                            <p className="font-secondary text-subtle lg:text-3xl text-xl leading-tight max-w-[50rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                        </BotTop>
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

export default About;