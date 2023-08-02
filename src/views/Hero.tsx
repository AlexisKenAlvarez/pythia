
import { useEffect, useRef, useState } from "react";

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

    const arr = [...new Array(3)]



    return (
        <div className="w-full h-[200vh] relative bg-bg" ref={target}>
            <div className={`bg-bg px-5 w-full h-screen text-white ${fixed ? 'fixed top-0 left-0' : 'relative'}`}>



                <div className="max-w-[1400px] mx-auto w-full h-full flex items-center px-3 relative">
                    <img src="w-[5px] h-screen " alt="" className="h-full w-[1px] bg-white/10 absolute left-0" />
                    <img src="w-[5px] h-screen " alt="" className="h-full w-[1px] bg-white/10 absolute left-[25rem]" />
                    <img src="w-[5px] h-screen " alt="" className="h-full w-[1px] bg-white/10 absolute left-[50rem]" />

                    


                    <div className="w-full relative z-10">
                        <h1 className="text-6xl font-primary max-w-[35rem] leading-tight">EXPLORE THE STORY OF PYTHIA</h1>

                        <p className="text-2xl leading-[1.8rem] text-subtle font-secondary mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        <button className="bg-button rounded-md px-7 py-[5px] font-secondary text-2xl text-black mt-8">
                            Discover
                        </button>

                        {/* <div className="flex gap-4 mt-32">
                            {arr.map((items, i) => {
                                return (
                                    <img src={`/hero/${i + 1}.webp`} alt={`${i}`} key={i} className="" />
                                )
                            })}
                        </div> */}
                    </div>
                    <div className="w-full relative z-10">
                        <img src="/pythia.webp" alt="Pythia" className="h-[120vh] mt-44 object-cover" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;