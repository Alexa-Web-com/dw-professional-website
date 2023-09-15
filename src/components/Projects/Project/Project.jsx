import './Project.css'

const Project = (props) => {

    return (
        <div className='place'
            data-aos='fade-right'
            data-aos-duration="1000"
        >
            <div className="place__cntr">
                <img src={props.project.logo} alt='app screencapture' className='place__logo' />
                <div className='place__company'>
                    <div className='place__company_name'>{props.project.company}</div>
                    <div className='place__position'>{props.project.position}</div>
                    <div className="place__dates">{props.project.dates}
                    </div>
                </div>
            </div>
            <div className="place__tasks">
                <ul className='place__desc'>{props.project.desc.map(task =>
                    <li>{task}</li>)}</ul>
                <div className="place__techonologies">{props.project.technologies.map(technology => <p className="place__techonology">
                    {technology}
                </p>)}</div>
            </div>
        </div >
    )
}

export default Project