import './Experience.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import Project from './Project/Project'
import Nest from '../../assets/companies_logo/nest.jpg'
import Aic from '../../assets/companies_logo/aic.jpg'
import StudioWww from '../../assets/companies_logo/studio-www.jpg'
import Teldust from '../../assets/companies_logo/teldust.jpg'


const Experience = () => {
    const [lang,] = useContext(ContextLanguage)

    const projectDetails = [
        {
            logo: Nest,
            company: "Nest Bank S.A.",
            position: DICT[lang].experiencePositionNest,
            desc: DICT[lang].experienceDutiesNest,
            technologies: ["React", "JavaScript", "TypeScript", "Material UI", "React Query"],
            dates: DICT[lang].experienceDatesNest,
        },
        {
            logo: Aic,
            company: "AIC S.A.",
            position: DICT[lang].experiencePositionAic,
            desc: DICT[lang].experienceDutiesAic,
            technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Solidity", "Web3"],
            dates: DICT[lang].experienceDatesAic,
        },
        {
            logo: StudioWww,
            company: "Studio-www",
            position: DICT[lang].experiencePositionStudioWww,
            desc: DICT[lang].experienceDutiesStudioWww,
            technologies: ["React", "JavaScript", "HTML5", "CSS3", "GCP", "Firebase"],
            dates: DICT[lang].experienceDatesStudioWww,
        },
        {
            logo: Teldust,
            company: "Teldust A/S",
            position: DICT[lang].experiencePositionTeldust,
            desc: DICT[lang].experienceDutiesTeldust,
            technologies: ["Konstrukcje stalowe", "SolidWorks", "AutoCad"],
            dates: DICT[lang].experienceDatesTeldust,
        },

    ]

    return (
        <div className='projects component' id='projects'>
            <div className='projects__title_cntr'>
                <div className='horizontal_line horizontal_line_before projects__line'></div>
                <p className='projects__title title'>{DICT[lang].navbarExperience}</p>
                <div className='horizontal_line horizontal_line_after projects__line'></div>
            </div>
            {projectDetails.map((project, index) =>
                <Project key={index} project={project} index={index} isPictOnLeft={index % 2 === 0} />
            )}
        </div>
    )
}

export default Experience