
import { ParallaxBanner } from "react-scroll-parallax";
// import link from 'bootstrap-icons/icons/link-45deg.svg'

function ProjectWrapperLarge(props) {    

    return (                
        <div className="project-item">        
            <div className="project-item-img-wrapper">                                                               
                <ParallaxBanner layers={props.data.parallaxLayer} className="project-item-img-div">                        
                        <div className="project-item-img-text d-flex flex-lg-row justify-content-between flex-column align-items-md-end">
                            <h1 className="text-responsive text-secondary text-index"> 0{props.index+1} </h1>                                    
                            <h5 className="mb-3">
                                <a href={`https://${props.data.url}`} className="mockup-link text-secondary">
                                    {/* <img src={link} alt="url" /> */}
                                    {props.data.url}                                    
                                </a>
                            </h5>
                        </div>
                </ParallaxBanner>
                <small className="subtitle"> {props.data.subtitle} </small>                
                <br />
                <div className="my-2">
                    {props.data.tags.map((el, j) => {
                        return <span className="badge badge-pill badge-tag badge-blue-md" key={j}> {el} </span>
                    })}
                </div>                
            </div>                
        </div>
    )

}

export default ProjectWrapperLarge;