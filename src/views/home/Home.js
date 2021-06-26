
import { useState, useEffect } from 'react'; 
// import helloSvg from '../../assets/svgs/hello.svg';
import lazydevWeb from '../../assets/gifs/lazydev.gif';
import lazydevMob from '../../assets/images/lazydev-mobile.jpg';

import classNames from 'classnames';

// glass
import ellipse04 from '../../assets/glass/Ellipse04.png';

function Home() {

    // useEffect(() => {

        // window.onscroll = function() {

        //     let projectDiv = document.getElementById('projects');
        //     let mockupImg = document.getElementById('lazydev-mockup')

        //     // console.log(projectDiv.offsetTop)

        //     if(window.scrollY >= projectDiv.offsetTop ) {
        //         mockupImg.scrollTop = 480
        //     }

        // }

    // })

    const [theme, setTheme] = useState(document.body.getAttribute('data-theme'));

    useEffect(() => {

        let t = document.getElementById('theme-switch');

        t.addEventListener('change', e => {
            // console.log(e)

            setTheme(e.target.checked ? 'dark' : 'light');
        })

    })

    const btnClass = classNames({
        'btn': true,
        'btn-light':  theme.match('dark') ? true : false,
        'btn-dark':  theme.match('light') ? true : false,
        'rounded-pill': true,
        'my-2': true,
        'px-3': true
    })

    // const mockupImg = {
    //     'background': `url(/assets/gifs/lazydev.gif)`,
    //     'backgroundPosition': 'center',
    //     'backgroundSize': 'cover',
    //     'backgroundAttachment': 'fixed'
    // }

    return (
        <div className="home-wrapper text-special">
            <div className="row full-view gradient hero-polygon-wrapper" id="home__hero-wrapper">
                <div className="glass-overlay text-svg-container ">                
                    <div className="text-wrapper text-special col-xxl-6 ">
                        <h1 className="display-1 ">Hey,</h1>
                        <h1> How you doin'? </h1>
                        <a href="#projects"> 
                            <button type="button" 
                                className={btnClass}>
                                    Explore &nbsp;
                                    <i className="bi-chevron-down"></i>
                            </button>
                        </a>
                    </div>
                    <div className="col-xxl-6 svg-wrapper ">
                        {/* <img src={helloSvg} alt="welcome" className="img-fluid" /> */}
                        <div className="glass-wrapper animation-fade-show">
                            <small> I'm </small>
                            <h1 className="">
                                Ishan Prasad
                            </h1>
                            <h5 className="">
                                Full-stack developer. <br /> Machine Learning enthusiast.                                
                            </h5>
                        </div>
                    </div>                    
                </div>                
            </div>
            
            <div className="text-svg-container row mx-0 my-5 full-view" id="projects">
                <div className="text-wrapper  col-xl-6">
                    <h1 className="text-responsive my-auto">
                        Allow me to show you some of my creations :)
                    </h1>                                                                
                </div>
                <div className="svg-wrapper col-xl-6">
                    <div className="glass-wrapper glass-wrapper-mockup" id="lazydev-mockup">                        
                        <picture className="d-flex flex-row">                            
                            <source media="(max-width:760px)" alt="lazydev" className="mockup-img" srcSet={lazydevMob}/>                                                        
                            <img src={lazydevWeb} alt="lazydev" className="m-auto mockup-img" id="lazydev-mockup__img" />
                        </picture>      
                        {/* <div className="mockup-img" style={mockupImg}></div> */}
                        <img src={ellipse04} alt="glass-bg" className="gradient-img gradient-img-right" />  
                        <div className="my-2">
                            <a href="https://laazzzyyyydev.netlify.app" className="mockup-link h6 " rel="noreferrer" target="_blank"> laazzzyyyydev.netlify.app </a>                        
                        </div>                            
                    </div>
                </div>
            </div>                                        
        </div>
    )
}

export default Home;
