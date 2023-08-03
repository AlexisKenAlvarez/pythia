import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill, BsMapFill } from 'react-icons/bs'
import { GiToken } from 'react-icons/gi'

const Nav = () => {

    const navList = [
        {
            title: "home",
            link: "",
            icon: <AiFillHome />
        },
        {
            title: "about",
            link: "",
            icon: <BsFillInfoCircleFill />
        },
        {
            title: "tokenomics",
            link: "",
            icon: <GiToken />
        },
        {
            title: "roadmap",
            link: "",
            icon: <BsMapFill />
        },

    ]

    return (
        <nav className="w-full h-auto absolute top-0 left-0 z-30">
            <div className="max-w-[1400px] mx-auto w-full p-3 pt-5">
                <ul className="text-[#A06C21] flex uppercase font-primary gap-x-10 justify-center lg:justify-start">
                    {navList.map((items) => {
                        return (
                            <li className="" key={items.title}>
                                <p className="lg:block hidden">
                                    {items.title}
                                </p>

                                <p className="lg:hidden block">
                                    {items.icon}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;