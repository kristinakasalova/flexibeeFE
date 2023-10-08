import React, { useState, useEffect } from 'react';
import ObjednavkaTable from './Table';
import SearchBox from './SearchBox';
import axios from 'axios';

function App() {
    const [objednavkaData, setObjednavkaData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/api/objednavka');
                setObjednavkaData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (searchTerm) => {
        const filteredObjednavka = objednavkaData.filter(objednavka =>
            Object.values(objednavka).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredData(filteredObjednavka);
    };

    return (
        <div className="App">
            <SearchBox onSearchChange={handleSearchChange} />
            <ObjednavkaTable objednavkaData={filteredData} />
        </div>
    );
}

export default App;
