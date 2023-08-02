
import { useEffect, useRef, useState } from "react";


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



    return (
        <div className="w-full h-[200vh] relative"  ref={target}>
            <div className={`bg-bg  w-full h-full text-white text-5xl ${fixed ? 'fixed top-0 left-0' : 'relative'}`}>
                About
            </div>
        </div>

    );
}

export default About;