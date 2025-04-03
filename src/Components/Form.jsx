import GetAvatar from "./GetAvatar";
import "../scss/layout/Form.scss";

const Form = (props) => {
    const cardLink = props.cardLink;

    const handleChangeProjectName = (ev) => {
        props.onChangeProjectName(ev.target.value);
    };
    const handleChangeSlogan = (ev) => {
        props.onChangeSlogan(ev.target.value);
    };
    const handleChangeRepository = (ev) => {
        props.onChangeRepository(ev.target.value);
    };
    const handleChangeDemo = (ev) => {
        props.onChangeDemo(ev.target.value);
    };
    const handleChangeTechnologies = (ev) => {
        props.onChangeTechnologies(ev.target.value);
    };
    const handleChangeDescription = (ev) => {
        props.onChangeDescription(ev.target.value);
    };
    const handleChangeName = (ev) => {
        props.onChangeName(ev.target.value);
    };
    const handleChangeJob = (ev) => {
        props.onChangeJob(ev.target.value);
    };
    const handleChangeImageProject = (avatar) => {
        props.onChangeImageProject(avatar);
    };
    const handleChangeAvatar = (avatar) => {
        props.onChangeAvatar(avatar);
    };
    const handleSavedProject = (ev) => {
        ev.preventDefault();
        props.onSavedProject();
    };

    return (
        <>
            <form className="addForm" onSubmit={handleSavedProject}>
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
                        required
                    />
                    <input
                        className="addForm__input"
                        type="text"
                        name="slogan"
                        id="slogan"
                        placeholder="Slogan"
                        onChange={handleChangeSlogan}
                        required
                    />
                    <div className="addForm__2col">
                        <input
                            className="addForm__input"
                            type="url"
                            name="repo"
                            id="repo"
                            placeholder="Repositorio"
                            onChange={handleChangeRepository}
                            required
                        />
                        <input
                            className="addForm__input"
                            type="url"
                            name="demo"
                            id="demo"
                            placeholder="Demo"
                            onChange={handleChangeDemo}
                            required
                        />
                    </div>
                    <input
                        className="addForm__input"
                        type="text"
                        name="technologies"
                        id="technologies"
                        placeholder="Tecnologías"
                        onChange={handleChangeTechnologies}
                        required
                    />
                    <textarea
                        className="addForm__input"
                        type="text"
                        name="desc"
                        id="desc"
                        placeholder="Descripción"
                        rows="5"
                        onChange={handleChangeDescription}
                        required
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
                        required
                    />
                    <input
                        className="addForm__input"
                        type="text"
                        name="job"
                        id="job"
                        placeholder="Trabajo"
                        onChange={handleChangeJob}
                        required
                    />
                </fieldset>

                <fieldset className="addForm__group--upload">
                    <GetAvatar
                        text="Subir foto del proyecto"
                        updateAvatar={handleChangeImageProject}
                    />

                    <GetAvatar
                        text="Subir foto de la autora"
                        updateAvatar={handleChangeAvatar}
                    />

                    <button className="button--large" type="submit">
                        Guardar proyecto
                    </button>
                </fieldset>

                {props.cardLink && (
                    <div>
                        <a
                            className="button--link"
                            href={cardLink}
                            target="_blank"
                        >
                            Visualiza tu tarjeta
                        </a>
                    </div>
                )}
            </form>
        </>
    );
};

export default Form;
