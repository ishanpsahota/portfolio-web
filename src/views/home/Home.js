
import ProjectWrapperLarge from '../../components/projectComponents/ProjectWrapperLarge';
import HeroWrapper from '../../components/home/HeroWrapper/HeroWrapper';
import GetInTouch from '../../components/home/GetInTouch/GetInTouch';

function Home() {        

    const gradientImages = {
        one:  'https://res.cloudinary.com/ishanpsahota/image/upload/v1625124639/portfolio/ellipse-xl_lvnmyf.webp',
        two: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1625124638/portfolio/Ellipse03_nzxe6i.webp'
    }

    const prop = [
        {
            parallaxLayer: [
                {
                    image: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1625124615/portfolio/lazydev-web_qqwehj.webp',
                    amount: -0.1
                }                
            ],
            
            url: 'laazzzyyyydev.netlify.app',
            subtitle: 'My attempt in making a dark-themed blog website with glass morhpism. It\'s still a work in progress.',
            tags: ['MEVN']      
        },
        {
            parallaxLayer: [
                {
                    image: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1625124616/portfolio/ishanpsahota-home-web_biqarm.webp',
                    amount: -0.2
                }
            ],
            
            url: 'resume-ishanpsahota.netlify.app',
            subtitle: 'A resume website for myself. I\'m going to discontinue it soon for this one :0.',
            tags: ['MEVN', 'Veux']      
        },
        {
            parallaxLayer: [
                {
                    image: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1625125368/portfolio/impulso-web-dark_qobznz.webp',
                    amount: -0.2
                }
            ],
            
            url: 'impulso.heroku.app',
            subtitle: 'AI Chat bot project by my former employer. Most of the front-end of this project coded by me.',
            tags: ['Angular']
        },
        {
            parallaxLayer: [
                {
                    image: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1625124615/portfolio/fam-tree-web_sndppp.webp',
                    amount: -0.4
                },                
            ],
            url: 'family-tree-i.netlify.app',
            subtitle: 'Created within three days as a qualifying task for an internship. Complete with Authentication and basic family logic.',
            tags: ['MEVN']
        },
        {
            parallaxLayer: [
                {
                    image:'https://res.cloudinary.com/ishanpsahota/image/upload/v1625124615/portfolio/miniprojects-web_syvy9h.webp',
                    amount: -0.2
                }
            ],
            url: 'miniprojects.netlify.app',
            subtitle: 'Front-end project created in one single day as a qualifying task for an internship. Connected with GitHub API to fetch users and repositories.',
            tags: ['VueJS']
        },
        {
            parallaxLayer: [
                {
                    image: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1625124615/portfolio/insomniacs-web_cicbux.webp',
                    amount: -0.1
                }
            ],
            url: 'insomniacsblogger.herokuapp.com',
            subtitle: 'My first attempt in making a Node-based website. ',
            tags: ['Mongo', 'Express', 'NodeJS', 'PugJS']
        },
        {
            parallaxLayer: [
                {
                    image: 'https://res.cloudinary.com/ishanpsahota/image/upload/v1625146196/portfolio/portfolio_jyb2kn.webp',
                    amount: -0.1
                }
            ],
            url: 'ishanprasad.netlify.app',
            subtitle: 'And lastly the one you are currently scrolling - My very own portfolio website. ',
            tags: ['React']
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
            <HeroWrapper />
            <div className="row project-wrapper mx-0 mb-1" id="projects">                
                <h1 className="text-responsive"> Projects </h1>               
                <RenderProjectItems />                                   
                <img src={gradientImages.one} alt="gradient" className="gradient-img gradient-img-01" />              
                <img src={gradientImages.one} alt="gradient" className="gradient-img gradient-img-02" />              
                <img src={gradientImages.one} alt="gradient" className="gradient-img gradient-img-03" />              
                <img src={gradientImages.one} alt="gradient" className="gradient-img gradient-img-04" />                              
            </div>
            <GetInTouch />  
            {/* <img src={gradientImages.one} alt="gradient" className="gradient-img gradient-img-center" />                                                     */}
        </div>
    )
}            


export default Home;
