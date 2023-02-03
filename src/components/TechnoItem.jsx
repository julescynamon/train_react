export default function TechnoItem({ item, handleDeleteTechno }) {
    return (
        <div className="card">
            <h2>{item.technoname}</h2>
            <h3>Category</h3>
            <p>{item.technocategory}</p>
            <h3>Description</h3>
            <p>{item.technodescription}</p>
            <button
                className="btn-delete"
                onClick={() => handleDeleteTechno(item.technoid)}
            >
                Supprimer
            </button>
        </div>
    );
}
