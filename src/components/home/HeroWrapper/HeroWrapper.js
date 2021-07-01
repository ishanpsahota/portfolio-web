
import classNames from "classnames"
import { useEffect, useState } from "react"
import chevronDown from 'bootstrap-icons/icons/chevron-down.svg';
import chevronDoubleRight from 'bootstrap-icons/icons/chevron-right.svg';

function HeroWrapper() {

    const [theme, setTheme] = useState(document.body.getAttribute('data-theme'))

    useEffect(() => {

        let t = document.getElementById('theme-switch');

        t.addEventListener('change', e => {
            setTheme(e.target.checked ? 'dark' : 'light');
        })        

    }, [])

    const btnClass = classNames({
        'btn': true,
        'btn-sm': true,
        'btn-light':  theme.match('light') ? true : false,
        'btn-dark':  theme.match('dark') ? true : false,
        'rounded-pill': true,
        'my-2': true,
        'px-3': true,
        'py-2': true
    })



    return (
        <div className="row full-view gradient hero-polygon-wrapper" id="home__hero-wrapper">
            <div className="glass-overlay text-svg-container ">                
                <div className="text-wrapper text-special col-xxl-6 ">
                    <h1 className="display-1 ">Hey,</h1>
                    <h1> How you doin'? </h1>    
                    <a href="#GetInTouch"> 
                        <button type="button" 
                            className={btnClass}>
                                <small>
                                Get In touch &nbsp;
                                <img src={chevronDoubleRight} className={theme.match('dark') && 'invert-color'} alt="down arrow" />
                                </small>                                    
                        </button>
                    </a>                   
                    <a href="#projects" className="p-1 text-decoration-none text-light hover-accent">                         
                        <small>
                        Explore Projects &nbsp;
                        <img src={chevronDown} className="invert-color " alt="down arrow" />
                        </small>                                                            
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
    )

}

export default HeroWrapper;