'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify,faBandcamp, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomInt = getRandomInt(100)
var tagline

if (randomInt > 99) {
  tagline = "suck my nuts covet"
} else {
  tagline = "perpetuity"
}

const parent = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      when: "afterChildren",
    },
  },
}

const child = {
  visible: { opacity: 1},
  hidden: { opacity: 0},
}

function Hero() {
  return(
      <motion.section id="hero" className="flex h-screen w-screen flex-col items-center justify-center text-white"
      variants={parent}
      initial="hidden"
      animate="visible">
          <motion.h1 variants={child} className="text-5xl pb-3">bivouac cabs</motion.h1>
          <motion.h2 variants={child} className="text-xl">{tagline}</motion.h2>
          <motion.h2 variants={child} className="text-xl">5.31.24</motion.h2>
          <motion.div variants={child} className='w-screen text-center text-xl p-3'>         
            <a href="https://open.spotify.com/artist/3abdFiVWboEJFU0yuezzzm?si=JWOkjunGRrm2C-nCZezSrQ" >
              <FontAwesomeIcon icon={faSpotify} className='hover:blur-sm transition-all px-3' />
            </a>  
            <a href="https://instagram.com/bivouac.cabs" >
              <FontAwesomeIcon icon={faInstagram} className='hover:blur-sm transition-all px-3' />
            </a>  
            <a href="https://open.spotify.com/artist/3abdFiVWboEJFU0yuezzzm?si=JWOkjunGRrm2C-nCZezSrQ" >
              <FontAwesomeIcon icon={faBandcamp} className='hover:blur-sm transition-all px-3' />
            </a>  
            <a href="https://www.youtube.com/channel/UCrHEkGonYtp2nFvQoJFLiEA" >
              <FontAwesomeIcon icon={faYoutube} className='hover:blur-sm transition-all px-3' />
            </a>  
          </motion.div>
    </motion.section>
  )
}

export default Hero