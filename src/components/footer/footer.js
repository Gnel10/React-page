import "../components.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import search from "../../photos/search.png"
import insta from "../../photos/instagram.png"
import link from "../../photos/linkedin.png"
import whats from "../../photos/whatsapp.png"


const  Footer = () => {
  return (
   <div className="footer-container">

        <div>
          <h1>OFNIINFO</h1>
          <p className="footer-text">Ofninfo Solution scale your business <br />
            digitally through best software product <br />
            development, user experience, drives <br />
            traffic, and connect with the customer
          </p>
        </div>
        <div>
          <h1>Services</h1>
          <p>Web Development </p>
          <p>App Development</p>
          <p>UX/UI Design</p>
          <p>Desktop App</p>
        </div>
        <div>
        <h1>Quick Links</h1>
          <p>Web Development </p>
          <p>App Development</p>
          <p>UX/UI Design</p>
          <p>Desktop App</p>
        </div>
        <div>
        <h1>Contact</h1>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>  <a>info@ofniinfo.com</a> <br /> <br />
        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><a>+91 7600003893</a> <br /> <br />
        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>  <a>216, Meriton Plaza Near</a>
          <p>Savaliya Circle, opp Varachha</p>
          <p>Co-Bank Surat-395010</p>
        </div>
        <div className="social-box">
        <h1>SOCIAL</h1>
          <img src={search} alt="" />
          <img src={insta} alt="" />
          <img src={link} alt="" />
          <img src={whats} alt="" />
        </div>
        <div className="button-section">
          <p>Copyright@2021Ofniinfo Solution</p>
          <p>Privacy policy</p>
        </div>
   </div>
  );
}

    export default Footer