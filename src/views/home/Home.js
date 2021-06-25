
// import helloSvg from '../../assets/svgs/hello.svg';

function Home() {
    return (
        <div className="home-wrapper">
            <div className="row full-view gradient hero-polygon-wrapper" id="home__hero-wrapper">
                <div className="glass-overlay text-svg-container justify-content-center text-center text-lg-start d-flex flex-column-reverse flex-lg-row ">                
                    <div className="text-wrapper text-special col-lg-6 ">
                        <h1 className="display-1 ">Hey,</h1>
                        <h1> How you doin'? </h1>
                    </div>
                    <div className="col-lg-6 svg-wrapper ">
                        {/* <img src={helloSvg} alt="welcome" className="img-fluid" /> */}
                        <div className="glass-wrapper text-special ">
                            <small> I'm </small>
                            <h1 className="">
                                Ishan Prasad
                            </h1>
                            <h5>
                                Full-stack developer. <br /> Machine Learning enthusiast.                                
                            </h5>
                        </div>
                    </div>                    
                </div>                
            </div>
            <div className="full-view"></div>
            <div className="full-view"></div>
        </div>
    )
}

export default Home;
