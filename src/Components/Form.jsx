
import GetAvatar from "./GetAvatar";
import "../scss/layout/Form.scss";

const Form = (props) => {
    
    const cardLink = props.cardLink;
    const hiddenLink = props.hiddenLink;

    const handleChangeProjectName = (ev) => {
        props.onChangeProjectName(ev.target.value);
    }
    const handleChangeSlogan = (ev) => {
        props.onChangeSlogan(ev.target.value);
    }
    const handleChangeRepository = (ev) => {
        props.onChangeRepository(ev.target.value);
    }
    const handleChangeDemo = (ev) => {
        props.onChangeDemo(ev.target.value);
    }
    const handleChangeTechnologies = (ev) => {
        props.onChangeTechnologies(ev.target.value);
    }
    const handleChangeDescription = (ev) =>{
        props.onChangeDescription(ev.target.value);
    }
    const handleChangeName = (ev) =>{
        props.onChangeName(ev.target.value);
    }
    const handleChangeJob = (ev) =>{
        props.onChangeJob(ev.target.value);
    }
    const handleChangeImageProject = (avatar) => {
        props.onChangeImageProject(avatar);
    }

    const handleChangeAvatar = (avatar) => {
        props.onChangeAvatar(avatar);
    }

    const handleSaveProject = (ev) => {
        ev.preventDefault();
        props.onSaveProject();
    
    }

    let classHidden = "";
    if (hiddenLink === false) {
        classHidden = "hidden";
    }

    return (
        <>
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
                onChange={handleChangeProjectName}
            />
            <input
                className="addForm__input"
                type="text"
                name="slogan"
                id="slogan"
                placeholder="Slogan"
                onChange={handleChangeSlogan}
            />
            <div className="addForm__2col">
                <input
                    className="addForm__input"
                    type="url"
                    name="repo"
                    id="repo"
                    placeholder="Repositorio"
                    onChange={handleChangeRepository}
                />
                <input
                    className="addForm__input"
                    type="url"
                    name="demo"
                    id="demo"
                    placeholder="Demo"
                    onChange={handleChangeDemo}
                />
            </div>
            <input
                className="addForm__input"
                type="text"
                name="technologies"
                id="technologies"
                placeholder="Tecnologías"
                onChange={handleChangeTechnologies}
            />
            <textarea
                className="addForm__input"
                type="text"
                name="desc"
                id="desc"
                placeholder="Descripción"
                rows="5"
                onChange={handleChangeDescription}
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
                onChange={handleChangeName}
            />
            <input
                className="addForm__input"
                type="text"
                name="job"
                id="job"
                placeholder="Trabajo"
                onChange={handleChangeJob}
            />
        </fieldset>

        <fieldset className="addForm__group--upload">
            <GetAvatar text="Subir foto del proyecto" updateAvatar={handleChangeImageProject}/>
            <GetAvatar text="Subir foto de la autora" updateAvatar={handleChangeAvatar}/>

            <button className="button--large" onClick={handleSaveProject}>
                Guardar proyecto
            </button>
        </fieldset> 
        <div className={classHidden}>
        <a className="button--link" href={cardLink} target="_blank">Visualiza tu tarjeta</a>
        </div>
    </form>
    </>
    )
};

export default Form; 