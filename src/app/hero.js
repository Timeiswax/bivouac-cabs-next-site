import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify,faBandcamp, faYoutube  } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return(
      <div className="flex min-h-screen w-screen flex-col items-center justify-center">
          <h1 className="text-5xl pb-3 h">bivouac cabs</h1>
          <h2 className="text-xl">perpetuity</h2>
          <h2 className="text-xl">5.31.24</h2>
          <div className='w-screen text-center text-xl p-3'>
          <FontAwesomeIcon icon={faInstagram} className='hover:opacity-50 px-3'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faSpotify} className='hover:opacity-50 px-3'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faBandcamp} className='hover:opacity-50 px-3'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faYoutube} className='hover:opacity-50 px-3'></FontAwesomeIcon>
          </div>
    </div>
  )
}

export default Hero