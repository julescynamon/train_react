import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage.jsx';

import Menu from './components/Menu.jsx';
import Home from './pages/Home.jsx';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

import './css/app.css';

function App() {
    const [technos, setTechnos] = useState([]);
    const STORAGE_KEY = 'technos';
    const [storeTechnos, setStoreTechnos] = useLocalStorage(STORAGE_KEY, []);

    useEffect(() => {
        setTechnos(storeTechnos);
    }, []);

    useEffect(() => {
        setStoreTechnos(technos);
    }, [technos]);

    function handleAddTechno(techno) {
        setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
    }

    function handleDeleteTechno(id) {
        setTechnos(technos.filter((tech) => tech.technoid !== id));
    }

    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/add"
                    element={<TechnoAdd handleAddTechno={handleAddTechno} />}
                />
                <Route
                    path="/list"
                    element={
                        <TechnoList
                            technos={technos}
                            handleDeleteTechno={handleDeleteTechno}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
