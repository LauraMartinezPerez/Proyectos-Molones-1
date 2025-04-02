


import "../scss/App.scss";
 import { useState } from "react";
 import Header from "./Header";
 import Footer from "./Footer";
 import Form from "./Form";
 import Preview from "./Preview";
 
 
 function App() {
     const [projectInfo, setProjectInfo] = useState({
         name: "",
         slogan: "",
         repo: "",
         demo: "",
         technologies: "",
         desc: "",
         autor: "",
         job: "",
         image: "",
         photo: "",
     });

     const [cardLink, setCardLink] = useState("");

     const handleProjectName = (valueProjectName) => {
        setProjectInfo({
            ...projectInfo,
            name: valueProjectName,
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
            repo: valueRepository,
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
            desc: valueDescription,
        });
    };

    const handleName = (valueName) => {
        setProjectInfo({
            ...projectInfo,
            autor: valueName,
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
            image: valueImageProject,
        });
    };

    const handleChangeAvatar = (valueAvatar) => {
        setProjectInfo({
            ...projectInfo,
            photo: valueAvatar,
        });
    }
    const handleSaveProject = () => {
        fetch("https://dev.adalab.es/api/projectCard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(projectInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.cardURL);
            setCardLink(data.cardURL);
        });
        
    };

console.log(cardLink);
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
                        onChangeAvatar={handleChangeAvatar}
                        onSaveProject={handleSaveProject}
                        cardLink={cardLink}
                        
                        
                    
                    />
                    
                </main>
            < Footer />
                
            </div>
        </>
        );
    }
 
export default App;