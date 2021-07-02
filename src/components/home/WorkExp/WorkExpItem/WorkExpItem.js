
// import flower from 'bootstrap-icons/icons/flower3.svg';
// import classNames from 'classnames';

function WorkExpItem(props) {

    
    // let theme = document.body.getAttribute('data-theme')

    // var iconClass = classNames({
    //     'invert-color': theme.match('dark') ? true : false,
    //     'my-2': true,
    //     'mx-auto': true
    // })

    return (
        <div className="workexp-item border-theme-bottom">
            <h1 className="title">
                {props.data.title}
            </h1>
            <p className="text-secondary duration">
                {`${props.data.duration.from} - ${props.data.duration.to}`}
            </p>
            <p className="lead employer">
                {props.data.employer}
            </p>
            <ul className="workexp-ul-list">
                {props.data.objectives.map((obj, i) => {
                    return <li className="workexp-ul-list-item" key={i}> {obj} </li>
                })}                        
            </ul>
            <small className="text-secondary"> {props.data.location} </small>
            <br />
            {/* <div className="w-100 text-center">
                <img src={flower} alt="flower" className={iconClass} width='24' height='24' />
            </div>             */}
        </div>
    )
}

export default WorkExpItem