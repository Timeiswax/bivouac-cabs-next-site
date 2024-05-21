'use client'

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import { motion } from "framer-motion";



const variants = {
    show: {
      opacity: 1,
      y: 0,
      display: 'block',
      transition: {
        ease: 'easeOut',
        duration: 0.3,
      },
    },
    hide: {
      y: -20,
      opacity: 0,
      display: 'none',
      transition: {
        ease: 'easeIn',
        duration: 0.3,
      },
    },
  };

  const list = {
    show: {
        opacity: 1
    },
    hide: {
        opacity: 0
    }

  }

  const AllLinks = () => {
    return(
        <>
            <motion.div variants={list} initial="hide" animate="show" href="https://www.google.com" className="hover:blur-sm transition-all px-3">
                <a href="https://linktr.ee/bivouaccabs">listen</a>
            </motion.div>
            <motion.a variants={list} initial="hide" animate="show" href="#notyetdude" className="hover:blur-sm transition-all px-3">merch</motion.a>
            <motion.a variants={list} initial="hide" animate="show" href="#comingsoonbigguy" className="hover:blur-sm transition-all px-3">shows</motion.a>
            <motion.div variants={list} initial="hide" animate="show" >
                <Link href="#about"  className="hover:blur-sm transition-all px-3">contact</Link>
            </motion.div>
        </>
    )
};

export default function header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return(
        <nav className="w-screen h-8 py-4 fixed text-white z-10">
            <div className="hidden sm:flex w-screen justify-end ">
                <AllLinks />
            </div>
            <div className="sm:hidden flex w-screen justify-end font-4xl z-10">
                <button onClick={toggleNavbar} className="px-5 w-16">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            { /*{isOpen && ( */ }
                {/*<CSSTransition 
                in={isOpen}
                unmountOnExit
                timeout={500}
    classNames={"menu-primary"}> */}
                    <motion.div className="menu"
                    key={isOpen}
                    variants={variants}
                    initial="hide"
                    animate={isOpen ? 'show' : 'hide'}
                    >     
                        <div className=" absolute top-0 w-32 h-48 -z-10 bg-emerald-950 opacity-80 rounded-xl" ></div>
                        <div className=" absolute top-0 px-5 py-16 flex flex-col items-center z-10 flex-wrap flex-basis-full">
                            <AllLinks />
                        </div>
                    </motion.div>
                {/*</CSSTransition>*/}

            { /* })} */ }
        </nav>
    )
};




