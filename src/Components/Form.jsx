import "../scss/layout/Form.scss";
import GetAvatar from "./GetAvatar";
import GetProjectImg from "./GetProjectImg";


const Form = (props) => {
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

        <GetProjectImg text="Subir foto del proyecto" updateProjectImage={props.updateProjectImage}/>

        <GetAvatar text="Subir foto de la autora" updateAvatar={props.updateAvatar}/>
        
{/*             <label htmlFor="image" className="button">
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
            /> */}
            <button className="button--large">
                Guardar proyecto
            </button>
        </fieldset>
    </form>
    </>
    )
};

export default Form;







/* 
import "../scss/layout/Form.scss";

const Form = (props) => {
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
    </>
    )
};

export default Form; */