
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import BotTop from "../anim/BotTop";

const The = () => {

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


    return (
        <motion.div initial={{ opacity: 0 }} animate={fixed ? { opacity: 100 } : { opacity: 0 }} transition={{ duration: 0.5 }} className="w-full h-[200vh] relative z-10" ref={target}>
            <div className={`bg-bg  w-full h-screen text-white overflow-hidden fixed top-0 left-0 flex items-center px-5`}>


                <div className="max-w-[1400px] w-full mx-auto relative py-32">
                    <div className="w-full h-full absolute top-0 left-0 flex gap-x-3">
                        {arr.map((items, i) => {
                            return (
                                <img src={`/bg/${i + 1}.webp`} alt={`${items + 180 + i}`} className="w-full object-cover" key={i} />
                            )
                        })}
                    </div>


                    <div className="flex h-full gap-x-10 items-start">

                        <div className="w-full text-center">
                            {fixed ?
                                <>
                                    <BotTop>
                                        <h1 className="font-primary text-4xl md:text-5xl lg:text-6xl uppercase">The high priestess of the Temple of Apollo at Delphi.</h1>
                                    </BotTop>
                                </>
                                : null}
                        </div>




                    </div>

                </div>
            </div>
        </motion.div>

    );
}

export default The;