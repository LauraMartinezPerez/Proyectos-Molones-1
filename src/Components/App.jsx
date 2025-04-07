import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import localStorageService from "../services/localStorage";

function App() {
    const [cardLink, setCardLink] = useState("");
    const [projectInfo, setProjectInfo] = useState(() => {
        return (
            localStorageService.get("projectInfo") || {
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
            }
        );
    });

    useEffect(() => {
        localStorageService.set("projectInfo", projectInfo);
    }, [projectInfo]);

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
    };
    const handleSubmitProject = () => {
        fetch("https://dev.adalab.es/api/projectCard", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(projectInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.cardURL);
                setCardLink(data.cardURL);
            });
    };

    return (
        <>
            <div className="container">
                <Header />

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
                        project={projectInfo}
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
                        onSavedProject={handleSubmitProject}
                        cardLink={cardLink}
                    />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
