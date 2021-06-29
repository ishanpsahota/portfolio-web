
import { ParallaxBanner } from "react-scroll-parallax"


function ProjectWrapperLarge(props) {    

    return (                
        <div className="project-item">        
            <div className="project-item-img-wrapper">                                                               
                <ParallaxBanner layers={props.data.parallaxLayer} className="project-item-img-div">                        
                        <div className="project-item-img-text d-flex flex-lg-row justify-content-between flex-column align-items-md-end">
                            <h1 className="text-responsive text-blue-md"> 0{props.index+1} </h1>                                    
                            <h5 className="mb-3">
                                <a href={`https://${props.data.url}`} className="mockup-link text-secondary">
                                    {props.data.url}
                                </a>
                            </h5>
                        </div>
                </ParallaxBanner>
                <small className=""> {props.data.subtitle} </small>                
            </div>                
        </div>
    )

}

export default ProjectWrapperLarge;