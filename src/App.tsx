import Gallery from "./views/Gallery";
import Hero from "./views/Hero";
import { useRef } from "react";

const App = () => {

  const navList = [
    {
      title: "home",
      link: ""
    },
    {
      title: "about",
      link: ""
    },
    {
      title: "tokenomics",
      link: ""
    },
    {
      title: "roadmap",
      link: ""
    },

  ]
  return (
    <div className="w-full min-h-screen h-auto relative bg-bg">

      <nav className="w-full h-auto fixed top-0 left-0 z-30">
        <div className="max-w-[1400px] mx-auto w-full p-3 pt-5">
          <ul className="text-[#A06C21] flex uppercase font-primary gap-x-10">
            {navList.map((items) => {
              return (
                <li className="" key={items.title}>
                  {items.title}
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <Hero />
      <Gallery />
    </div>
  );
}

export default App;