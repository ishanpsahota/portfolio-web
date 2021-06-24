
import {
    BrowserRouter as Router, Link
} from "react-router-dom";
import { useState  } from 'react'

import classNames from "classnames";
  
// function changeTheme() {    

//     let theme = document.body.getAttribute('data-theme');

//     if(theme === 'dark' ) {
//         document.body.setAttribute('data-theme', 'light');
//     }

//     if(theme === 'light' ) {
//         document.body.setAttribute('data-theme', 'dark');
//     }
// }

function Navbar() {

    const [ theme, setTheme ] = useState(document.body.getAttribute('data-theme'));

    const iconClassLight = classNames({
        'text-light': theme.match('light'),        
        'text-dark': theme.match('dark'),
        'bi-sun-fill': theme.match('light'),
        'bi-sun': theme.match('dark')
    })

    const iconClassDark = classNames({
        'text-dark': theme.match('light'),        
        'text-light': theme.match('dark'),
        'bi-moon-fill': theme.match('dark'),
        'bi-moon': theme.match('light')
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

    // var checkTheme = (e) => {
    //     if(document.body.getAttribute('data-theme') === 'dark') return true
        
    //     return false
    // }

    return (
        <Router>
            <nav className="nav-wrapper">
                <ul className="nav-list">
                    <li className="nav-link">
                        <Link to="/" className="navbar-brand"> Ishan Prasad </Link>
                    </li>
                    <li className="nav-link">
                        <div className="form-check form-switch icon-stack-wrapper">
                            <label className="form-check-label" > <i className={iconClassLight}  ></i> </label>
                            <input className="form-check-input" onChange={changeTheme} checked={theme === 'dark' ? true : false} type="checkbox" />
                            <label className="form-check-label" > <i className={iconClassDark}  ></i>  </label>
                        </div>
                    </li>
                </ul>
            </nav>        
        </Router>        
    )
}

export default Navbar;