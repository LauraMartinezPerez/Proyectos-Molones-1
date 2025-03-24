import "../scss/App.scss";
import adalabLogo from "../images/adalab.png";
import laptopIcon from "../images/laptop-code-solid.svg";
import { useState } from "react";

function App() {
    //Cuando la usuaria rellene los inputs:
    //guardar valor
    //pintar en la página

    const [projectName, setProjectName] = useState("Nombre del proyecto");
    const [slogan, setSlogan] = useState("Slogan");
    const [repository, setRepository] = useState("Repositorio");
    const [demo, setDemo] = useState("Demo");
    const [technologies, setTecnologies] = useState("Tecnologías");
    const [description, setDescription] = useState("Descripción");
    const [name, setName] = useState("Nombre");
    const [job, setJob] = useState("Trabajo");

    const handleProjectName = (e) => {
        setProjectName(e.target.value);
    };

    const handleSlogan = (e) => {
        setSlogan(e.target.value);
    };

    const handleRepository = (e) => {
        setRepository(e.target.value);
    };

    const handleDemo = (e) => {
        setDemo(e.target.value);
    };

    const handleTechnologies = (e) => {
        setTecnologies(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleJob = (e) => {
        setJob(e.target.value);
    };

    return (
        <>
            <div className="container">
                <header className="header">
                    <a
                        className="header__brand"
                        href="./"
                        title="Haz click para volver a la página inicial"
                    >
                        <img
                            className="header__companyLogo"
                            src={laptopIcon}
                            alt="Logo proyectos molones"
                        />
                        <h1 className="header__title">Proyectos molones</h1>
                    </a>
                    <img
                        className="logoSponsor"
                        src={adalabLogo}
                        alt="Logo Adalab"
                    />
                </header>

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

                    <section className="preview">
                        <div className="projectImage"></div>
                        <article className="card">
                            <h2 className="card__projectTitle">
                                <span className="card__projectTitle--text">
                                    Personal project card
                                </span>
                            </h2>

                            <div className="card__author">
                                <div className="card__authorPhoto"></div>
                                <p className="card__job">{job || "Trabajo"}</p>
                                <h3 className="card__name">
                                    {name || "Nombre"}
                                </h3>
                            </div>

                            <div className="card__project">
                                <h3 className="card__name">
                                    {projectName || "Nombre del proyecto"}
                                </h3>
                                <p className="card__slogan">
                                    {slogan || "Slogan"}
                                </p>
                                <h3 className="card__descriptionTitle">
                                    Product description
                                </h3>
                                <p className="card__description">
                                    {description || "Descripción"}
                                </p>

                                <div className="card__technicalInfo">
                                    <p className="card__technologies">
                                        {technologies || "Tecnologías"}
                                    </p>

                                    <a
                                        className="icon icon__www"
                                        href={demo}
                                        title="Haz click para ver el proyecto online"
                                    >
                                        Web link
                                    </a>
                                    <a
                                        className="icon icon__github"
                                        href={repository}
                                        title="Haz click para ver el código del proyecto"
                                    >
                                        GitHub link
                                    </a>
                                </div>
                            </div>
                        </article>
                    </section>
                    <form className="addForm">
                        <h2 className="title">Información</h2>
                        <fieldset className="addForm__group">
                            <legend className="addForm__title">
                                Cuéntanos sobre el proyecto
                            </legend>
                            <input
                                className="addForm__input"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nombre del proyecto"
                                onChange={handleProjectName}
                            />
                            <input
                                className="addForm__input"
                                type="text"
                                name="slogan"
                                id="slogan"
                                placeholder="Slogan"
                                onChange={handleSlogan}
                            />
                            <div className="addForm__2col">
                                <input
                                    className="addForm__input"
                                    type="url"
                                    name="repo"
                                    id="repo"
                                    placeholder="Repositorio"
                                    onChange={handleRepository}
                                />
                                <input
                                    className="addForm__input"
                                    type="url"
                                    name="demo"
                                    id="demo"
                                    placeholder="Demo"
                                    onChange={handleDemo}
                                />
                            </div>
                            <input
                                className="addForm__input"
                                type="text"
                                name="technologies"
                                id="technologies"
                                placeholder="Tecnologías"
                                onChange={handleTechnologies}
                            />
                            <textarea
                                className="addForm__input"
                                type="text"
                                name="desc"
                                id="desc"
                                placeholder="Descripción"
                                rows="5"
                                onChange={handleDescription}
                            ></textarea>
                        </fieldset>

                        <fieldset className="addForm__group">
                            <legend className="addForm__title">
                                Cuéntanos sobre la autora
                            </legend>
                            <input
                                className="addForm__input"
                                type="text"
                                name="autor"
                                id="autor"
                                placeholder="Nombre"
                                onChange={handleName}
                            />
                            <input
                                className="addForm__input"
                                type="text"
                                name="job"
                                id="job"
                                placeholder="Trabajo"
                                onChange={handleJob}
                            />
                        </fieldset>

                        <fieldset className="addForm__group--upload">
                            <label htmlFor="image" className="button">
                                Subir foto del proyecto
                            </label>
                            <input
                                className="addForm__hidden"
                                type="file"
                                name="image"
                                id="image"
                            />
                            <label htmlFor="photo" className="button">
                                Subir foto de la autora
                            </label>
                            <input
                                className="addForm__hidden"
                                type="file"
                                name="photo"
                                id="photo"
                            />
                            <button className="button--large">
                                Guardar proyecto
                            </button>
                        </fieldset>
                    </form>
                </main>

                <footer className="footer">
                    <img
                        className="logoSponsor"
                        src={adalabLogo}
                        alt="Logo Adalab"
                    />
                </footer>
            </div>
        </>
    );
}

export default App;
