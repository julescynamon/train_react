import { useState } from 'react';

export default function TechnoAdd({ handleAddTechno }) {
    const [techno, setTechno] = useState({
        technoname: '',
        technocategory: '',
        technodescription: '',
    });

    function handleSubmit(event) {
        event.preventDefault();
        handleAddTechno(techno);
        setTechno({
            technoname: '',
            technocategory: '',
            technodescription: '',
        });
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setTechno({ ...techno, [name]: value });
    }

    return (
        <div className="techno-add">
            <h1>Add a Techno</h1>
            <div>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label htmlFor="technoname">Name</label>
                    <br />
                    <input
                        type="text"
                        id="technoname"
                        name="technoname"
                        value={techno.technoname}
                        onChange={(evt) => handleChange(evt)}
                    />
                    <br />
                    <label htmlFor="technocategory">Category</label>
                    <br />
                    <select
                        name="technocategory"
                        id="technocategory"
                        value={techno.technocategory}
                        onChange={(evt) => handleChange(evt)}
                    >
                        <option value="">Select category</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">FullStack</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <label htmlFor="technodescription">Description</label>
                    <br />
                    <textarea
                        name="technodescription"
                        id="technodescription"
                        cols="30"
                        rows="10"
                        value={techno.technodescription}
                        onChange={(evt) => handleChange(evt)}
                    ></textarea>
                    <br />
                    <input type="submit" value="Add Techno" className="btn" />
                </form>
            </div>
        </div>
    );
}
