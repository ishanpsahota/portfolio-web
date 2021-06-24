
import {
    BrowserRouter as Router, Link
} from "react-router-dom";
import { useState  } from 'react'

import classNames from "classnames";

import logo from '../../assets/svgs/logo-transparent.svg'
  
function Navbar() {

    const [ theme, setTheme ] = useState(document.body.getAttribute('data-theme'));

    const iconClassLight = classNames({
        'text-dark': theme.match('light'),        
        'bi-sun-fill': theme.match('light'),
        'bi-sun': theme.match('dark')
    })

    const iconClassDark = classNames({        
        'text-dark': theme.match('light'),
        'bi-moon-fill': theme.match('dark'),
        'bi-moon': theme.match('light')
    })

    const themeSwitchClass = classNames({
        'form-check': true,
        'form-switch': true,
        'icon-stack-wrapper': true,
        'bg-dark': theme.match('dark'),
        'bg-light': theme.match('light')
    })

    var changeTheme = (e) => {        

        if(theme === 'dark' ) {
            document.body.setAttribute('data-theme', 'light');
            setTheme('light')
        }

        if(theme === 'light' ) {
            document.body.setAttribute('data-theme', 'dark');
            setTheme('dark')
        }
    }    

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark nav-wrapper border-theme">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-special">
                        <img src={logo} alt="Ishan Prasad" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse justify-content-end navbar-collapse" id="navbar">
                        <ul className="navbar-nav  mb-2 p-3 p-lg-0 mb-lg-0">
                            <li className="nav-item mx-auto">
                                <div className={themeSwitchClass}>
                                    <label className="form-check-label" > <i className={iconClassLight}  ></i> </label>
                                    <input className="form-check-input" onChange={changeTheme} checked={theme === 'dark' ? true : false} type="checkbox" />
                                    <label className="form-check-label" > <i className={iconClassDark}  ></i>  </label>
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