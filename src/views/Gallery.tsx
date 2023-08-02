
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

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


    const arr = [...new Array(4)]

    const { scrollYProgress } = useScroll({
        target: target,
        offset: ['start end', 'end end']
    })

    const xNormal = useTransform(scrollYProgress, [0, 1], [0, -100])
    const x = useSpring(xNormal)

    return (
        <div className="w-full h-[200vh] relative z-10" ref={target}>
            <div className={`bg-bg  w-full h-full text-white overflow-hidden ${fixed ? 'fixed top-0 left-0' : 'relative'}`}>
                <motion.div initial={{ opacity: 0 }} animate={fixed ? { opacity: 100 } : { opacity: 0 }} transition={{ duration: 0.5 }} className="max-w-[1400px] fixed left-0 right-0 mx-auto w-full z-10 mt-44 flex items-center justify-center gap-x-4">
                    {
                        arr.map((items, i) => {
                            return (
                                <div className="w-[20rem] h-[70vh] relative overflow-hidden" key={i}>
                                    <motion.div style={{ x }} className="w-[30rem] h-full">
                                        <img src={`/parallax/${i + 1}.webp`} alt="" className="h-full w-full" />
                                    </motion.div>
                                </div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </div>

    );
}

export default Gallery;