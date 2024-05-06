import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify,faBandcamp, faYoutube  } from "@fortawesome/free-brands-svg-icons";
//import Hero from './hero';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('../app/hero'), {ssr: false})

export default function Home() {
  return (
    <div>
      <Image src={'/img/bg.png'} alt="bg" fill="true" className='-z-10 '></Image>
      <div className='z-10 flex w-screen h-8 justify-around py-4 text-lg fixed'>
        <a href="www.google.com" classname="hover:blur-sm transition-all">listen</a>
        <a href="www.google.com" classname="hover:blur-sm transition-all">merch</a>
        <a href="www.google.com" classname="hover:blur-sm transition-all">shows</a>
        <a href="www.google.com" classname="hover:blur-sm transition-all">contact</a>
      </div>
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll z-0">
        <Hero />
        {/* SHOWS? */}
        {/* PHOTOS? */}
        {/* SHOWS? */}
      </div>
    </div>

  );
}

// What information does the page need to have? Shows? Videos? About?
