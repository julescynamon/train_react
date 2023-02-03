export default function TechnoItem({ item }) {
    return (
        <div>
            <h2>{item.technoname}</h2>
            <h3>Category</h3>
            <p>{item.technocategory}</p>
            <h3>Description</h3>
            <p>{item.technodescription}</p>
        </div>
    );
}
