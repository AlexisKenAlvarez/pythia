import Gallery from "./views/Gallery";
import Hero from "./views/Hero";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import About from "./views/About";
import About2 from "./views/About2";
import Tokenomics from "./views/Tokenomics";
import Roadmap from "./views/Roadmap";
import Myname from "./views/Myname";
import The from "./views/The";

const App = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }

  return (
    <div className="w-full min-h-screen h-auto relative bg-bg overflow-hidden">

      <AnimatePresence mode="wait">
        {clicked ?
          <>
            <Hero key="HERO" />
            <Myname key="MYNAME" />
            <The key="THE" />
            <Gallery key="GALLERY" />
            <About key="ABOUT" />
            <About2 key="ABOUT2" />
            <Tokenomics key="TOKENOMICS" />
            <Roadmap key="ROADMAP" />
            <footer className="w-full h-2 bg-bg" id="roadmap"></footer>
          </> :
          <motion.div key="LOADER" initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 2 }} className="w-full h-screen bg-bg overflow-hidden" onClick={handleClick}>
            <motion.h1 exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center uppercase text-white font-primary text-6xl sm:text-7xl md:text-9xl mt-[8rem] tracking-widest relative z-10 drop-shadow-xl shadow-text">pythia</motion.h1>


            <motion.img exit={{ opacity: 0 }} transition={{ duration: 0.3 }} src="/loader.webp" alt="Loader" className="mx-auto sm:h-[80vh] absolute bottom-0 sm:-left-16 right-0" />

            <motion.div exit={{ y: -300, opacity: 0 }} transition={{ duration: 1 }} className="w-20 h-20 bg-yellow-200 rounded-full top-[10rem] left-[10rem] lg:left-[20rem] absolute blur-xl "></motion.div>
            <motion.div exit={{ y: -300, opacity: 0 }} transition={{ duration: 2, delay: 0.1 }} className="w-20 h-20 bg-yellow-200 rounded-full bottom-[10rem] left-[14rem] lg:left-[24rem] absolute blur-xl "></motion.div>

            <motion.div exit={{ y: -200, opacity: 0 }} transition={{ duration: 3, delay: 0.1 }} className="w-20 h-20 bg-yellow-200 rounded-full bottom-[5rem] lg:bottom-[10rem] right-[10rem] lg:right-[20rem] absolute blur-xl"></motion.div>
            <motion.div exit={{ y: -150, opacity: 0 }} transition={{ duration: 1.5 }} className="w-20 h-20 bg-yellow-200 rounded-full bottom-[20rem] lg:bottom-[30rem] right-[20rem] lg:right-[40rem] absolute blur-xl"></motion.div>

            <p className="text-white font-primary bottom-7 right-0 left-0 mx-auto text-center absolute text-xl opacity-80 lg:block hidden">Click anywhere to explore</p>
            <p className="text-white font-primary bottom-7 absolute text-xl left-0 right-0 mx-auto opacity-80 lg:hidden block text-center">Tap anywhere to explore</p>

          </motion.div>}
      </AnimatePresence>

    </div>
  );
}

export default App;