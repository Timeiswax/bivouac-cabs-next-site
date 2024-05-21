import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify,faBandcamp, faYoutube  } from "@fortawesome/free-brands-svg-icons";
//import Hero from './hero';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('../app/hero'), {ssr: false})
const Header = dynamic(() => import('../app/header'), {ssr: false} )
const About = dynamic(() => import('../app/about'), {ssr:false})
export default function Home() {
  return (
    <div>
      <Image src={'/bcbg.gif'} alt="bg" fill="true" className='-z-10 unoptimized'></Image>
      <Header />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll z-0">
        <Hero />
        <About />
        {/* SHOWS? */}
        {/* PHOTOS? */}
        {/* SHOWS? */}
      </div>
    </div>

  );
}

// What information does the page need to have? Shows? Videos? About?
