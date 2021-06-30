
// packages
import { useState, useEffect } from 'react'; 
import classNames from 'classnames';
import $ from 'jquery'
import ProjectWrapperLarge from '../../components/projectComponents/ProjectWrapperLarge';

// glass
import ellipse04 from '../../assets/glass/compressed/ellipse-xl.webp';

// images
import lazydevWeb from '../../assets/images/compressed/lazydev-web.webp'
import ipsHomeWeb from '../../assets/images/compressed/ishanpsahota-home-web.webp'
import impulsoHW from '../../assets/images/compressed/impulso-home-web.webp'
import famTreeHW from '../../assets/images/compressed/fam-tree-web.webp'
import miniprojects from '../../assets/images/compressed/miniprojects-web.webp'
import insomniacs from '../../assets/images/compressed/insomniacs-web.webp'

function Home() {    

    const [theme, setTheme] = useState(document.body.getAttribute('data-theme'));

    useEffect(() => {

        let t = document.getElementById('theme-switch');

        t.addEventListener('change', e => {
            // console.log(e)

            setTheme(e.target.checked ? 'dark' : 'light');
        })

        // let w = document.getElementById('lazydev-mockup__wrapper')
        // let img = document.getElementById('lazydev-mockup__img')
        // // let mob = document.getElementById('lazydev-mockup__img-mob')
        let mob = $('#lazydev-mockup__img-mob');
        // let web = document.getElementById('lazydev-mockup__img-web')

        $('#lazydev-mockup').on('scroll', function() {
            console.log(mob.scrollTop)
        })

        // console.log(prop)

    })

    const btnClass = classNames({
        'btn': true,
        'btn-sm': true,
        'btn-light':  theme.match('light') ? true : false,
        'btn-dark':  theme.match('dark') ? true : false,
        'rounded-pill': true,
        'my-2': true,
        'px-3': true
    })

    // const bgStyle = (image) => {
    //     return {
    //         'backgroundImage': `url(${image})`,
    //         'backgroundAttachment': 'fixed',
    //         'backgroundSize': 'cover',
    //         'backgroundRepeat': 'no-repeat',
    //         'backgroundPosition': 'center'
    //     }
    // }

    // const parallaxLayer = [
    //     {
    //         image: lazydevHomeWeb,
    //         amount: -0.1
    //     },
    //     // {
    //     //     image: lazydevMob,
    //     //     amount: 0.2
    //     // }
    // ]

    const prop = [
        {
            parallaxLayer: [
                {
                    image: lazydevWeb,
                    amount: -0.1
                }                
            ],
            
            url: 'laazzzyyyydev.netlify.app',
            subtitle: 'My attempt in making a dark-themed blog website with glass morhpism. It\'s still a work in progress.'            
        },
        {
            parallaxLayer: [
                {
                    image: ipsHomeWeb,
                    amount: -0.2
                }
            ],
            
            url: 'ishanpsahota.netlify.app',
            subtitle: 'A resume website for myself. I\'m going to discontinue it soon for this one :0.'            
        },
        {
            parallaxLayer: [
                {
                    image: impulsoHW,
                    amount: -0.2
                }
            ],
            
            url: 'impulso.heroku.app',
            subtitle: 'An AI Chat Bot about AI, made by my former employer. The front-end coding of this website is done mostly by me.'            
        },
        {
            parallaxLayer: [
                {
                    image: famTreeHW,
                    amount: -0.4
                },                
            ],
            url: 'family-tree-i.netlify.app',
            subtitle: 'Created within three days as a qualifying task for an internship. Complete with Authentication and basic family logic.'
        },
        {
            parallaxLayer: [
                {
                    image:miniprojects,
                    amount: -0.3
                }
            ],
            url: 'miniprojects.netlify.app',
            subtitle: 'Created in one single day as a qualifying task for an internship. Connected with GitHub API to fetch users and repositories.'
        },
        {
            parallaxLayer: [
                {
                    image:insomniacs,
                    amount: -0.3
                }
            ],
            url: 'insomniacsblogger.herokuapp.com',
            subtitle: 'My first attempt in making a Node-Express base website connected with MongoDB, front-end with Pug. '
        }
    ]

    function RenderProjectItems() {
        const items = prop.map((el, i) => {
            return <ProjectWrapperLarge data={el} key={i} index={i} />
        })

        return items;
    }

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
                                    <small>
                                    Explore &nbsp;
                                    <i className="bi-chevron-down"></i>
                                    </small>                                    
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
            <div className="col-12 project-wrapper full-view mx-0 mb-1" id="projects">                
                <h1 className="text-responsive"> Projects </h1>               
                <RenderProjectItems />                                   
                <img src={ellipse04} alt="gradient" className="gradient-img gradient-img-right" />              
            </div>
        </div>
    )
}            


export default Home;
