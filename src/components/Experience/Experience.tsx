import './Experience.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import Position from './Position/Position'
import Nest from '../../assets/companies_logo/nest.jpg'
import Aic from '../../assets/companies_logo/aic.jpg'
import StudioWww from '../../assets/companies_logo/studio-www.jpg'
import Teldust from '../../assets/companies_logo/teldust.jpg'
import { IPosition } from '../../utils/interfaces'


const Experience: () => JSX.Element = () => {
    const [lang,] = useContext(ContextLanguage)

    const projectDetails: IPosition[] = [
        {
            logo: Nest,
            company: "Nest Bank S.A.",
            jobTitle: DICT[lang].experiencePositionNest as string,
            desc: DICT[lang].experienceDutiesNest as string[],
            technologies: ["React", "JavaScript", "TypeScript", "Redux", "Material UI", "React Query", "Git", "Cypress"],
            dates: DICT[lang].experienceDatesNest as string,
        },
        {
            logo: Aic,
            company: "AIC S.A.",
            jobTitle: DICT[lang].experiencePositionAic as string,
            desc: DICT[lang].experienceDutiesAic as string[],
            technologies: ["React", "JavaScript", "TypeScript", "Redux", "Git", "Cypress", "Solidity", "Web3"],
            dates: DICT[lang].experienceDatesAic as string,
        },
        {
            logo: StudioWww,
            company: "Studio-www",
            jobTitle: DICT[lang].experiencePositionStudioWww as string,
            desc: DICT[lang].experienceDutiesStudioWww as string[],
            technologies: ["React", "JavaScript", "Java", "Swift", "GCP", "Firebase", "Git",],
            dates: DICT[lang].experienceDatesStudioWww as string,
        },
        {
            logo: Teldust,
            company: "Teldust A/S",
            jobTitle: DICT[lang].experiencePositionTeldust as string,
            desc: DICT[lang].experienceDutiesTeldust as string[],
            technologies: ["Konstrukcje stalowe", "SolidWorks", "AutoCad"],
            dates: DICT[lang].experienceDatesTeldust as string,
        },

    ]

    return (
        <div className='projects component' id='experience'>
            <div className='experience__title_cntr'>
                <div className='horizontal_line horizontal_line_before experience__line'></div>
                <p className='experience__title title'>{DICT[lang].navbarExperience}</p>
                <div className='horizontal_line horizontal_line_after experience__line'></div>
            </div>
            {projectDetails.map((position, index) =>
                <Position key={index} position={position} />
            )}
        </div>
    )
}

export default Experience