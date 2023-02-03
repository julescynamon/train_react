import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Menu from './components/Menu.jsx';
import Home from './pages/Home.jsx';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

import './css/app.css';

function App() {
    const [technos, setTechnos] = useState([]);

    function handleAddTechno(techno) {
        setTechnos([...technos, techno]);
    }

    console.log(technos);

    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/add"
                    element={<TechnoAdd handleAddTechno={handleAddTechno} />}
                />
                <Route path="/list" element={<TechnoList />} />
            </Routes>
        </>
    );
}

export default App;
