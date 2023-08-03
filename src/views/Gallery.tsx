
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, cubicBezier } from 'framer-motion'

const Gallery = () => {

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


    const arr = [...new Array(8)]

    const { scrollYProgress } = useScroll({
        target: target,
        offset: ['start end', 'end end']
    })

    const xNormal = useTransform(scrollYProgress, [0, 1], [0, -150], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
    const x = useSpring(xNormal, { stiffness: 100, damping: 20 })


    return (
        <motion.div initial={{ opacity: 0 }} animate={fixed ? { opacity: 100 } : { opacity: 0 }} transition={{ duration: 0.5 }} className="w-full h-[400vh] relative z-10" ref={target}>
            <div className={`bg-bg  w-full h-screen text-white overflow-hidden fixed top-0 left-0 flex items-center`}>
                <div className="w-[10rem] h-[10rem] bg-[#FF9700] rounded-full absolute bottom-20 left-20 blur-[15rem]"></div>
                <div className="w-[10rem] h-[10rem] bg-[#FF9700] rounded-full absolute top-20 right-20 blur-[15rem]"></div>

                <div className="mx-auto w-full z-10 flex items-center justify-center gap-x-4 overflow-hidden">
                    {
                        arr.map((items, i) => {
                            return (
                                <motion.div initial={{ opacity: 0, x: -50, scale: 0.8 }} animate={fixed ? { opacity: 100, x: 0, scale: 1 } : { opacity: 0, x: -20 }} transition={{ duration: 0.5, delay: i * 0.04 }} className="lg:min-w-[20rem] sm:min-w-[10rem] min-w-[5rem] h-[70vh] relative overflow-hidden border-[1px] border-white/20" key={items + i + 120}>
                                    <motion.div style={{ x }} className="w-[15rem] sm:w-[20rem] lg:w-[30rem] h-full">
                                        <img src={`/parallax/${i + 1}.webp`} alt="" className="h-full w-full" />
                                    </motion.div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>

    );
}

export default Gallery;