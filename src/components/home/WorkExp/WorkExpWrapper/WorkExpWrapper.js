
import WorkExpItem from '../WorkExpItem/WorkExpItem.js'

function WorkExpWrapper(props) {

    // const gradientImages = {
    //     one:  'https://res.cloudinary.com/ishanpsahota/image/upload/v1625124639/portfolio/ellipse-xl_lvnmyf.webp',        
    // }


    return (
        <div className="workexp-wrapper row" id="WorkExp">
            {/* <img src={gradientImages.one} alt="gradient" className="gradient-img" />               */}
            <h1 className="display-4">
                Work Experience
            </h1>
            <div className="col-12 py-3">
                {
                    props.data.map((exp, i) => {
                        return (
                            <WorkExpItem data={exp} key={i} />
                        )
                    })
                }                
            </div>            
        </div>
    )

}

export default WorkExpWrapper;