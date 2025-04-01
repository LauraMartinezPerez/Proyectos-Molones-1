


import "../scss/App.scss";
 import { useState } from "react";
 import Header from "./Header";
 import Footer from "./Footer";
 import Form from "./Form";
 import Preview from "./Preview";
 
 
 function App() {
     const [projectInfo, setProjectInfo] = useState({
         projectName: "",
         slogan: "",
         repository: "",
         demo: "",
         technologies: "",
         description: "",
         name: "",
         job: "",
         imageProject: "",
     });
     // const [projectName, setProjectName] = useState("Nombre del proyecto");
     // const [slogan, setSlogan] = useState("Slogan");
     // const [repository, setRepository] = useState("Repositorio");
     // const [demo, setDemo] = useState("Demo");
     // const [technologies, setTecnologies] = useState("Tecnologías");
     // const [description, setDescription] = useState("Descripción");
     // const [name, setName] = useState("Nombre");
     // const [job, setJob] = useState("Trabajo");

     const handleProjectName = (valueProjectName) => {
        setProjectInfo({
            ...projectInfo,
            projectName: valueProjectName,
        });
     };    
    const handleSlogan = (valueSlogan) => {
        setProjectInfo({
            ...projectInfo,
            slogan: valueSlogan,
        });
    };

    const handleRepository = (valueRepository) => {
        setProjectInfo({
            ...projectInfo,
            repository: valueRepository,
        });
    };

    const handleDemo = (valueDemo) => {
        setProjectInfo({
            ...projectInfo,
            demo: valueDemo,
        });
    };

    const handleTechnologies = (valueTechnologies) => {
        setProjectInfo({
            ...projectInfo,
            technologies: valueTechnologies,
        });
    };

    const handleDescription = (valueDescription) => {
        setProjectInfo({
            ...projectInfo,
            description: valueDescription,
        });
    };

    const handleName = (valueName) => {
        setProjectInfo({
            ...projectInfo,
            name: valueName,
        });
    };

    const handleJob = (valueJob) => {
        setProjectInfo({
            ...projectInfo,
            job: valueJob,
        });
    };

    const handleChangeImageProject = (valueImageProject) => {
        setProjectInfo({
            ...projectInfo,
            imageProject: valueImageProject,
        });
    }

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

                    <Preview project={projectInfo} />
                    
                    <Form 
                        onChangeProjectName={handleProjectName}
                        onChangeSlogan={handleSlogan}
                        onChangeRepository={handleRepository}
                        onChangeDemo={handleDemo} 
                        onChangeTechnologies={handleTechnologies}
                        onChangeDescription={handleDescription}
                        onChangeName={handleName}
                        onChangeJob={handleJob}
                        onChangeImageProject={handleChangeImageProject}
                    
                    />
                </main>
            < Footer />
                
            </div>
        </>
        );
    }
 
export default App;