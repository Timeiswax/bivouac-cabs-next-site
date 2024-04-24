import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify,faBandcamp, faYoutube  } from "@fortawesome/free-brands-svg-icons";
//import Hero from './hero';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('../app/hero'), {ssr: false})

export default function Home() {
  return (
    <div>
      <Image src={'/img/bg.png'} alt="bg" fill="true" className='-z-10'></Image>
      <div className="h-screen snap-y snap-mandatory">
        <Hero />
      </div>
    </div>

  );
}

// What information does the page need to have? Shows? Videos? About?
