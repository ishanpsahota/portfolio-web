
import {
    BrowserRouter as Router, Link
} from "react-router-dom";
import { useState, useEffect  } from 'react'

import classNames from "classnames";
import SunFill from 'bootstrap-icons/icons/sun-fill.svg'
import Sun from 'bootstrap-icons/icons/sun.svg'
import MoonFill from 'bootstrap-icons/icons/moon-fill.svg'
import Moon from 'bootstrap-icons/icons/moon.svg'
import logoWhite from '../../assets/svgs/logo-white.svg'
import logoDark from '../../assets/svgs/logo-dark.svg'
import ThreeDotsV from 'bootstrap-icons/icons/three-dots-vertical.svg'

function Navbar() {

    const [ theme, setTheme ] = useState(document.body.getAttribute('data-theme'));    

    const themeSwitchClass = classNames({
        'form-check': true,
        'form-switch': true,
        'icon-stack-wrapper': true,
        'bg-dark': theme.match('dark'),
        'bg-light': theme.match('light')
    })

    const logoLightClass = classNames({
        'd-block': theme.match('dark'),
        'd-none': theme.match('light'),        
    })

    const logoDarkClass = classNames({
        'd-block': theme.match('light'),
        'd-none': theme.match('dark')
    })

    

    useEffect(() => {

        var nav = document.getElementById('nav-wrapper');
        
        window.onscroll = function() {
            // console.log('h')
            // let homeWrapperht = document.getElementById('home__hero-wrapper').offsetHeight;            
            let navbarBrand = document.getElementById('navbar-brand'); 
            let themeSwitch = document.getElementById('theme-switch');
            let dropdownDots = document.getElementById('dropdown-dots');
            
            // console.log(`${window.scrollY + nav.offsetHeight} ? ${homeWrapperht} `)
            
            // if(window.scrollY >= homeWrapperht - nav.offsetHeight) {
            if(window.scrollY >= 20) {
                nav.classList.add('shadow-theme');                
                themeSwitch.classList.add('shadow-theme')
                nav.classList.add('bg-glass');
                
                if(theme === 'light') {
                    navbarBrand.classList.add('text-dark');
                    // nav.classList.add('bg-glass')
                    dropdownDots.classList.add('text-dark')
                }

                if(theme === 'dark') {
                    // nav.classList.add('bg-dark');
                    if(dropdownDots.classList.contains('text-dark')) dropdownDots.classList.remove('text-dark')
                }

            }

            // if(window.scrollY < homeWrapperht ) {                
            if(window.scrollY < 20 ) {                
                nav.classList.remove('shadow-theme');                
                nav.classList.remove('bg-glass');                
                themeSwitch.classList.remove('shadow-theme')                
                navbarBrand.classList.remove('text-dark');
                
                if(theme === 'light') { 
                    nav.classList.remove('bg-light')
                    
                    if(dropdownDots.classList.contains('text-dark')) dropdownDots.classList.remove('text-dark')
                }

                if(theme === 'dark') {
                    if(nav.classList.contains('bg-light')) nav.classList.remove('bg-light')
                    if(dropdownDots.classList.contains('text-dark')) dropdownDots.classList.remove('text-dark')
                    nav.classList.remove('bg-dark')
                }
                
            }

        }
        
        
    })

    var changeTheme = (e) => {        

        let navbarBrand = document.getElementById('navbar-brand');
        // let navWrapper = document.getElementById('nav-wrapper');
        let dropdownDots = document.getElementById('dropdown-dots');

        if(theme === 'dark' ) {
            document.body.setAttribute('data-theme', 'light');
            setTheme('light')
            document.getElementById('navbar-brand').classList.add('text-dark')
            // if(navWrapper.classList.contains('bg-dark')) navWrapper.classList.remove('bg-dark')
            dropdownDots.classList.add('text-dark')
            // document.getElementById('nav-wrapper').classList.add('bg-light')
        }

        if(theme === 'light' ) {

            document.body.setAttribute('data-theme', 'dark');
            setTheme('dark')
            
            if(navbarBrand.classList.contains('text-dark')) navbarBrand.classList.remove('text-dark')
            // if(navWrapper.classList.contains('bg-light')) navWrapper.classList.remove('bg-light')

            navbarBrand.classList.add('text-light')
            dropdownDots.classList.add('text-light')

        }
    }    

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark nav-wrapper border-theme-bottom" id="nav-wrapper">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-special logo-link" id="navbar-brand">
                        <img src={logoWhite} className={logoLightClass}  alt="Ishan Prasad" />
                        <img src={logoDark} className={logoDarkClass} alt="Ishan Prasad" />
                        
                        Ishan Prasad
                    </Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={ThreeDotsV} className="" id="dropdown-dots" alt="menu toggle" />
                    </button>
                    <div className="collapse justify-content-end navbar-collapse " id="navbar">
                        <ul className="navbar-nav  mb-2 p-3 p-lg-0 mb-lg-0">
                            <li className="nav-item mx-auto">
                                <div className={themeSwitchClass} id="theme-switch">
                                    <label className="form-check-label" >  
                                        {theme.match('dark') && 
                                            <img src={Sun} className="invert-color" alt="light mode off" />
                                        }
                                        {
                                            theme.match('light') && 
                                            <img src={SunFill} alt="light mode on"  />
                                        }
                                    </label>
                                    <input className="form-check-input" id="theme_switch" name="theme_switch" onChange={changeTheme} checked={theme === 'dark' ? true : false} value="dark" type="checkbox" />
                                    <label className="form-check-label" > 
                                        {theme.match('dark') && 
                                            <img src={MoonFill} className="invert-color" alt="dark mode on" />
                                        }
                                        {
                                            theme.match('light') && 
                                            <img src={Moon} alt="dark mode off" />
                                        }
                                    </label>
                                </div>
                            </li>
                            {/* <li className="nav-item">
                                
                            </li> */}                                            
                        </ul>                
                    </div>
                </div>
            </nav>
        </Router>        
    )
}

export default Navbar;