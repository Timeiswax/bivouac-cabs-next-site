import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify,faBandcamp, faYoutube  } from "@fortawesome/free-brands-svg-icons";

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

function Hero() {
  return(
      <div className="flex min-h-screen w-screen flex-col items-center justify-center">
          <h1 className="text-5xl pb-3">bivouac cabs</h1>
          <h2 className="text-xl">{tagline}</h2>
          <h2 className="text-xl">5.31.24</h2>
          <div className='w-screen text-center text-xl p-3'>         
            <a href="https://open.spotify.com/artist/3abdFiVWboEJFU0yuezzzm?si=JWOkjunGRrm2C-nCZezSrQ" >
              <FontAwesomeIcon icon={faSpotify} className='hover:blur-sm transition-all px-3' />
            </a>  
            <a href="https://open.spotify.com/artist/3abdFiVWboEJFU0yuezzzm?si=JWOkjunGRrm2C-nCZezSrQ" >
              <FontAwesomeIcon icon={faInstagram} className='hover:blur-sm transition-all px-3' />
            </a>  
            <a href="https://open.spotify.com/artist/3abdFiVWboEJFU0yuezzzm?si=JWOkjunGRrm2C-nCZezSrQ" >
              <FontAwesomeIcon icon={faBandcamp} className='hover:blur-sm transition-all px-3' />
            </a>  
            <a href="https://open.spotify.com/artist/3abdFiVWboEJFU0yuezzzm?si=JWOkjunGRrm2C-nCZezSrQ" >
              <FontAwesomeIcon icon={faYoutube} className='hover:blur-sm transition-all px-3' />
            </a>  
          </div>
    </div>
  )
}

export default Hero