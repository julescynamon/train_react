export default function TechnoAdd() {
    return (
        <div className="techno-add">
            <h1>Add a Techno</h1>
            <div>
                <form>
                    <label htmlFor="techno-name">Name</label>
                    <br />
                    <input type="text" id="techno-name" name="techno-name" />
                    <br />
                    <label htmlFor="techno-category">Category</label>
                    <br />
                    <select name="techno-category" id="techno-category">
                        <option value="">Select category</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">FullStack</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <label htmlFor="techno-description">Description</label>
                    <br />
                    <textarea
                        name="techno-description"
                        id="techno-description"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <br />
                    <input type="submit" value="Add Techno" />
                </form>
            </div>
        </div>
    );
}
