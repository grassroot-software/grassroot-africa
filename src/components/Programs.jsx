import {GiGraduateCap} from 'react-icons/gi'
import SectionHead from './SectionHead'
import {programs } from '../data'
import Card from './Card2'



const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs_container'>
                <SectionHead icon= {<GiGraduateCap />} title = "Student inmates learn the following employable skills high in demand in the global job market:" />
            
                <div className='programs__wrapper'>
                    {
                        programs.map(({id, icon, title}) =>{
                            return (
                                <Card className="programs__program" key ={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                </Card>
                            )
                        } )
                    }
                </div>
            </div>
        </section>
    )
}

export default Programs
