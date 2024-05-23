'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const imgs = {
    
    visible: { 
        opacity: 1,
    },
    hidden: { opacity: 0},
}

const varp = {
    
    visible: { 
        opacity: 1,
        transition: {
            delay: 0.5
        }

    },
    hidden: { opacity: 0},
}

const pic = {
    visible: {
        x: 0,
        transition: {
            staggerChildren: 0.3,
        }
      },
      hidden: {
        x: 0,
      },
    }

function GridImg(props) {
    return(
        <motion.img variants={imgs} src={props.source} alt="Shane and Ian" className="object-contain h-44 p-5" />
    )
}

export default function about() {
    return(
        <section id="about" className="flex h-screen w-screen flex-col items-center justify-center text-white outline-4"

        >
            <motion.div className='flex flex-row flex-wrap px-5 justify-center md:w-1/2'
                    initial="hidden"
                    whileInView="visible"
                    variants={pic}
                    >
                {/*<Image src={'/bivouac-snaps-25.jpg'} alt="Shane and Ian" layout='fill' objectFit='contain' className='grow'/>*/}
                <GridImg source={'/bivouac-snaps-45.jpg'} />
                <GridImg source={'/bivouac-snaps-25.jpg'} />
                <GridImg source={'/bivouac-snaps-29.jpg'} />
                <GridImg source={'/bivouac-snaps-40.jpg'} />
                <GridImg source={'/bivouac-snaps-21.jpg'} />
                <motion.div variants={imgs} className="px-10 py-10 mx-10 text-center  text-md rounded-md z-0">                
                    <motion.p 
                        variants={varp}
                        initial="init"
                        whileInView="view">
                            we're just playing stuff we like.
                        </motion.p>
                        <motion.p 
                        variants={varp}
                        initial="init"
                        whileInView="view">
                            us@bivouaccabs.com
                        </motion.p>
                </motion.div>
            </motion.div>

        </section>

    )

}
