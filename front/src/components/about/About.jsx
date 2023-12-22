import style from './About.module.css'
import myImage from '../img/yo1.jpg';

const About = () => {
    return (
        <div className={style.fondo}>
            <div className={style.contenedor}>
                <img src={myImage} className={style.imagen} />
                <div>
                    <h3 className={style.introduccion}>¡Hola, soy Lucas!</h3>
                    <p className={style.parrafo}>
                        Les presento mi primer proyecto Full Stack, en donde use tecnologias como PostgresSQL para la base de datos, Sequelize para comunicar la base de datos con el back, Node.js Express en Back y por ultimo React y Redux en front
                    </p>

                    <p className={style.parrafo}>
                        Me apasiona la programación, me considero una persona responsable y constante, comprometida con el aprendizaje continuo y la mejora personal.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;