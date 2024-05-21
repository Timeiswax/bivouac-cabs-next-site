'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const varp = {
    init: { opacity: 0},
    view: { opacity: 1},
}

const pic = {
    visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.3,
        },
      },
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
    }

export default function about() {
    return(
        <section id="about" className="flex h-screen w-screen flex-col items-center justify-center text-white outline-4"

        >
            <motion.div className='py-10 w-9/12 h-64 relative rounded-lg overflow-hidden'
                    initial={{ opacity:0 }}
                    whileInView={{ opacity: 1 }}>
                <Image src={'/bivouac-snaps-25.jpg'} alt="Shane and Ian" layout='fill' objectFit='contain' className='grow'/>
            </motion.div>
            <div className="px-10 py-10 mx-10 text-center  text-md rounded-md z-0">                
                <motion.p 
                variants={varp}
                initial="init"
                whileInView="view">
                    bivouac cabs is the creative partnership between ian hatzilias and shane thiede.
                </motion.p>
                <motion.p  className="py-6"
                variants={varp}
                initial="init"
                whileInView="view">
                    they are not a math rock band. they promise.
                </motion.p>
                <motion.p 
                variants={varp}
                initial="init"
                whileInView="view">
                    us@bivouaccabs.com
                </motion.p>
            </div>
        </section>

    )

}
