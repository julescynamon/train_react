import TechnoItem from '../components/TechnoItem';

export default function TechnoList({ technos }) {
    return (
        <div className="techno-list">
            <h1>All Technos</h1>
            <p>TODO display all technos added</p>
            <br />
            <div>
                {technos.map((item) => (
                    <TechnoItem item={item} />
                ))}
            </div>
        </div>
    );
}
