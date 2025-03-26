import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";


function App() {

    const [projectName, setProjectName] = useState("Nombre del proyecto");
    const [slogan, setSlogan] = useState("Slogan");
    const [repository, setRepository] = useState("Repositorio");
    const [demo, setDemo] = useState("Demo");
    const [technologies, setTecnologies] = useState("Tecnologías");
    const [description, setDescription] = useState("Descripción");
    const [name, setName] = useState("Nombre");
    const [job, setJob] = useState("Trabajo");

    const handleProjectName = (valueName) => {
        setProjectName(valueName);
    };

    const handleSlogan = (valueSlogan) => {
        setSlogan(valueSlogan);
    };

    const handleRepository = (valueRepository) => {
        setRepository(valueRepository);
    };

    const handleDemo = (valueDemo) => {
        setDemo(valueDemo);
    };

    const handleTechnologies = (valueTechnologies) => {
        setTecnologies(valueTechnologies);
    };

    const handleDescription = (valueDescription) => {
        setDescription(valueDescription);
    };

    const handleName = (valueName) => {
        setName(valueName);
    };

    const handleJob = (valueJob) => {
        setJob(valueJob);
    };

    return (
        <>
            <div className="container">
               < Header />

                <main className="main">
                    <section className="hero">
                        <h2 className="title">Proyectos molones</h2>
                        <p className="hero__text">
                            Escaparate en línea para recoger ideas a través de
                            la tecnología
                        </p>
                        <a className="button--link" href="./">
                            Ver proyectos
                        </a>
                    </section>

                   <Preview 
                        nameProject={projectName}
                        userSlogan={slogan}
                        nameRepository={repository}
                        nameDemo={demo}
                        nameTechnologies={technologies}
                        nameDescription={description}
                        nameName={name}
                        nameJob={job}
                        />
                    
                    <Form 
                        onChangeProjectName={handleProjectName}
                        onChangeSlogan={handleSlogan}
                        onChangeRepository={handleRepository}
                        onChangeDemo={handleDemo} 
                        onChangeTechnologies={handleTechnologies}
                        onChangeDescription={handleDescription}
                        onChangeName={handleName}
                        onChangeJob={handleJob}
                    
                    />
                </main>
            < Footer />
                
            </div>
        </>
    );
}

export default App;
