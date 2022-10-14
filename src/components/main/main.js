import animation1 from "../../photos/animation1.png"
import animation2 from "../../photos/animation2.png"
import "../components.scss"
import person1 from "../../photos/person1.png"
import person2 from "../../photos/person2.png"
import person3 from "../../photos/person3.png"
import fb from "../../photos/fb.png"
import twitter from "../../photos/twitter.png"
import linkdin from "../../photos/likdin2.png"
import elipse1 from "../../photos/Ellipse1.png"
import elipse2 from "../../photos/Ellipse2.png"
import elipse3 from "../../photos/Ellipse3.png"

const Main = () => {
    return(
        <div className="container">
          <div className="animation-box">
            <div className="first">
                <div>
                    <p>We  started  as  a  small,  subdue,  called  hath  give
                        fourth.  Them  one  over  saying.  So  the  god,  greater. 
                        You.  Us  air  Moved divide  midst us fifth  sea. We  help
                        individuals,  startups  and  established  companies  to
                        build    best    Modern    websites,    enterprise    web
                        application, native mobile  apps,  custom  marketplace
                        and   e-Commerce   platform  through  agile  full  cycle,
                        and    full    stack    software    product    development
                        operations</p>
                </div>
            </div>
            <div className="second">
                <div>
                <img src={animation1} alt="" />
                </div>
            </div>
            <div className="third">
                <div>
                <img src={animation2} alt="" />
                </div>
            </div>
            <div className="fourth">
                <div>
                    <p>
                         We starting with consulting our respective client with
                            their innovative ideas. We go further with designing
                            mechanism,  workflow,  schedules  and  much  more. 
                            We move forward with planning with our developers
                            and estimate time and cost. As soon as we done with
                            all formal procedures, we move to the building up the
                            ideas into digital world. We test product in each and
                            every stages and module completion. After successful
                            testing and client acceptance, we deployed project on
                            server and maintain it for long last time period
                    </p>
                </div>
              </div>
            </div>
            <div className="title-2">
                    <h1>Our Managing Directors</h1>
                    <div className="line-2"></div>
                    <h2>Team who are responsible for  growth of Ofninfo <br /> Solution</h2>
                 </div>
            <div className="box">
                <div className="img-box">
                    <img src={person1} alt="" />
                    <h3>Jena Lambert</h3>
                    <p>Sales & Marketing Manager</p>
                    <div className="social-media">
                        <img src={fb} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkdin} alt="" />
                    </div>
                </div>
                <div className="img-box">
                    <img src={person2} alt="" />
                    <h3>Raymond Turner</h3>
                    <p>Cloud Manager</p>
                    <div className="social-media">
                        <img src={fb} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkdin} alt="" />
                    </div>
                </div>
                <div className="img-box">
                    <img src={person3} alt="" />
                    <h3>Bruce Sutton</h3>
                    <p>Senior Web Developer</p>
                    <div className="social-media">
                        <img src={fb} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkdin} alt="" />
                    </div>
                </div>
            </div>
            <div className="round-box">
                <div className="round">
                    <img src={elipse1} alt="" />
                  <div className="elipse-1">
                    <h2>100%</h2>
                    <h3>Mobile App</h3>
                  </div>
                </div>
                <div className="round">
                    <img src={elipse2} alt="" />
                    <div className="elipse-2">
                    <h2>80%</h2>
                    <h3>Bussiness App</h3>
                  </div>
                </div>
                <div className="round">
                    <img src={elipse3} alt="" />
                    <div className="elipse-3">
                    <h2>85%</h2>
                    <h3>Website Design</h3>
                  </div>
                </div>
            </div>
        </div>
    )
}
    export default Main