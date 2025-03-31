import "../scss/layout/Preview.scss";


const Preview = ({ project }) => {
    return (
        <>
         <section className="preview">
                 <div className="projectImage" style={{ backgroundImage: `url(${project.projectImage})` }}></div>
                 <article className="card">
                     <h2 className="card__projectTitle">
                         <span className="card__projectTitle--text">
                             Personal project card:
                         </span>
                     </h2>

                     <div className="card__author">
                         <div className="card__authorPhoto" style={{ backgroundImage: `url(${project.avatar})` }}></div>
                         <p className="card__job">{project.job || "Trabajo"}</p>
                         <h3 className="card__name">
                             {project.name || "Nombre"}
                         </h3>
                     </div>

                     <div className="card__project">
                         <h3 className="card__name">
                             {project.projectName || "Nombre del proyecto"}
                         </h3>
                         <p className="card__slogan">
                             {project.slogan || "Slogan"}
                         </p>
                         <h3 className="card__descriptionTitle">
                             Product description
                         </h3>
                         <p className="card__description">
                             {project.description || "Descripción"}
                         </p>
                         <div className="card__technicalInfo">
                             <p className="card__technologies">
                                 {project.technologies || "Tecnologías"}
                             </p>

                             <a
                                 className="icon icon__www"
                                 href={project.demo}
                                 title="Haz click para ver el proyecto online"
                             >
                                 Web link
                             </a>
                             <a
                                 className="icon icon__github"
                                 href={project.repository}
                                 title="Haz click para ver el código del proyecto"
                             >
                                 GitHub link
                             </a>
                         </div>
                     </div>
                 </article>
             </section>
         </>
     );
};

export default Preview;



/* import "../scss/layout/Preview.scss";


const Preview = ({ project }) => {
    return (
        <>
         <section className="preview">
                 <div className="projectImage"></div>
                 <article className="card">
                     <h2 className="card__projectTitle">
                         <span className="card__projectTitle--text">
                             Personal project card:
                         </span>
                     </h2>

                     <div className="card__author">
                         <div className="card__authorPhoto"></div>
                         <p className="card__job">{project.job || "Trabajo"}</p>
                         <h3 className="card__name">
                             {project.name || "Nombre"}
                         </h3>
                     </div>

                     <div className="card__project">
                         <h3 className="card__name">
                             {project.projectName || "Nombre del proyecto"}
                         </h3>
                         <p className="card__slogan">
                             {project.slogan || "Slogan"}
                         </p>
                         <h3 className="card__descriptionTitle">
                             Product description
                         </h3>
                         <p className="card__description">
                             {project.description || "Descripción"}
                         </p>
                         <div className="card__technicalInfo">
                             <p className="card__technologies">
                                 {project.technologies || "Tecnologías"}
                             </p>

                             <a
                                 className="icon icon__www"
                                 href={project.demo}
                                 title="Haz click para ver el proyecto online"
                             >
                                 Web link
                             </a>
                             <a
                                 className="icon icon__github"
                                 href={project.repository}
                                 title="Haz click para ver el código del proyecto"
                             >
                                 GitHub link
                             </a>
                         </div>
                     </div>
                 </article>
             </section>
         </>
     );
};

export default Preview; */