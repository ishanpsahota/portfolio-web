
import GitHubIcon from 'bootstrap-icons/icons/github.svg'
import { useState, useEffect } from 'react'
import classNames from 'classnames';

import envelope from 'bootstrap-icons/icons/envelope.svg';
import instagram from 'bootstrap-icons/icons/instagram.svg';
import linkedin from 'bootstrap-icons/icons/linkedin.svg';
import chevronLeft from 'bootstrap-icons/icons/chevron-left.svg';
import chevronRight from 'bootstrap-icons/icons/chevron-right.svg';

function GetInTouch() {

    var gradientImg = 'https://res.cloudinary.com/ishanpsahota/image/upload/v1625124639/portfolio/ellipse-xl_lvnmyf.webp';

    const [theme, setTheme] = useState(document.body.getAttribute('data-theme'))

    var scrollDiv = (e, type) => {
        var socialWrapper = document.getElementById('social-wrapper');

        // console.log(type)

        if(type === 'left')  {
            socialWrapper.scrollLeft -= 200;
        }

        if(type === 'right') {
            socialWrapper.scrollLeft += 200;
        }
    }

    useEffect(() => {

        let t = document.getElementById('theme-switch');

        t.addEventListener('change', e => {
            setTheme(e.target.checked ? 'dark' : 'light');
        })        

    }, [])

    const socialIconClass = classNames({
        'invert-color': theme.match('dark') ? true : false,
        'social-icon': true
    })

    const socials = [
        {
            icon: GitHubIcon,
            link: 'https://github.com/ishanpsahota',
            title: 'GitHub'
        },       
        {
            icon: envelope,
            link: 'mailto:ishanprasad.sahota@gmail.com',
            title: 'Email'
        },
        {
            icon: linkedin,
            link: 'https://linkedin.com/in/ishanpsahota',
            title: 'LinkedIn'
        },
        {
            icon: instagram,
            link: 'https://instagram.com/ishanpsahota',
            title: 'Instagram'
        }
    ]

    const scrollBtn = classNames({
        'btn': true,
        'bg-light': theme.match('dark') ? true : false,
        'bg-dark': theme.match('light') ? true : false,
        'rounded-circle': true,
        'm-1': true
    })


    return (
        <div className="get-in-touch-wrapper row" id="GetInTouch">            
            <h1 className="display-4">
                Let's connect.
            </h1>            
            <div className="glass-columns social-wrapper" id="social-wrapper">
                {
                    socials.map((el, i) => {
                        return (
                            <div className="glass-wrapper social-item" key={i}>
                                <div className="social-icon-wrapper">
                                    <img src={el.icon} className={socialIconClass} alt={el.title} />
                                </div>
                                <div className="social-text-wrapper">
                                    <h4 className=""> 
                                        <a href={el.link} target="_blank" rel="noreferrer">
                                            {el.title}
                                        </a>                            
                                    </h4>
                                </div>
                            </div>
                        )
                    })
                }                               
            </div>            
            <div className="scroll-buttons d-lg-none d-block">
                <button className={scrollBtn} type="button"  onClick={(e) => scrollDiv(e, 'left')}  >
                    <img src={chevronLeft}  className={theme.match('dark') && 'invert-color'} alt="scroll left"  />
                </button>
                <button className={scrollBtn} type="button" onClick={(e) => scrollDiv(e, 'right')} >
                    <img src={chevronRight} className={theme.match('dark') && 'invert-color'}  alt="scroll right" />
                </button>
            </div>
            <img src={gradientImg} className="gradient-img gradient-img-center" alt="gradient img" />
        </div>
    )
}

export default GetInTouch;