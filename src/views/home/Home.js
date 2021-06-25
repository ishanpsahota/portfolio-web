
// import helloSvg from '../../assets/svgs/hello.svg';
import lazydevGif from '../../assets/gifs/lazydev.gif';

function Home() {
    return (
        <div className="home-wrapper text-special">
            <div className="row full-view gradient hero-polygon-wrapper" id="home__hero-wrapper">
                <div className="glass-overlay text-svg-container ">                
                    <div className="text-wrapper text-special col-lg-6 ">
                        <h1 className="display-1 ">Hey,</h1>
                        <h1> How you doin'? </h1>
                    </div>
                    <div className="col-lg-6 svg-wrapper ">
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
            
            <div className="text-svg-container">
                <div className="text-wrapper col-lg-6">
                    <h1 className="text-md-1">
                        Let me show you what I've made till now.
                    </h1>
                </div>
                <div className="svg-wrapper col-lg-6">
                    {/* <div className="glass-wrapper p-4"> */}
                        {/* <iframe src="https://laazzzyyyydev.netlify.app" title="lazydev" height="100%" width="100%" /> */}
                        <img src={lazydevGif} alt="lazydev" className="m-auto gif" />
                        <small>
                            <a href="https://laazzzyyyydev.netlify.app"> Modern blog website design by me :) </a>
                        </small>
                    {/* </div> */}
                </div>
            </div>                
            
            <div className="full-view"></div>
        </div>
    )
}

export default Home;
