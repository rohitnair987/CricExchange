import React, { useState } from 'react';

import { getPlayerByPlayerId } from './api/getPlayers';

const App = () => {
    const [query, setQuery] = useState('');
    const [player, setPlayer] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await getPlayerByPlayerId(query);
            console.log(data);

            setPlayer(data);
            setQuery('');
        }
    }
    
    return (
        <div className="main-container">
            <input type="text"
                className="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />

            {player.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{player.name}</span>
                    </h2>
                </div>
            )}
        </div>
    );
}

export default App;