import HeaderList from "./headerList/headerList"
import logo from "../../photos/logo.png"
import call from "../../photos/XMLID15.png"
import google from "../../photos/Vector.png"
import insta from "../../photos/insta.png"
import linkdin from "../../photos/linkdin.png"
import viber from "../../photos/viber.png"
import "../components.scss"


const Header = () => {
    const menuList = [
        {
            id: 1,
            img: logo
        },
        {
            id: 2,
            link: "Home",
        },
        {
            id: 3,
            link: "About Us",
        },
        {
            id: 4,
            link: "Services",
        },
        {
            id: 5,
            link: "Portfolio",
        },
        {
            id: 6,
            link: "Contact Us",
        },
       
    ]

    return(
        <div className="nav">
            <div className="left">
            <img src={call} alt="" />
            <p>7600003897</p>
            </div>
            <div className="middle">
                <p>✉</p> 
                <p>info@ofniinfo.com</p>
            </div>
            <div className="right">
                <img src={google} alt="" />
                <img src={insta} alt="" />
                <img src={linkdin} alt="" />
                <img src={viber} alt="" />
            </div>
            <div className="header">
                <div className="menu-logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                {
                    menuList.map(i => <HeaderList {...i} key={i.id}/>)
                }
                </ul>
                <button>Let’s talk</button>
                <div className="title">
                    <h1>About Us</h1>
                    <div className="line"></div>
                    <h2>About Ofninfo</h2>
                </div>
            </div>
        </div>
       
    )
}
    export default Header