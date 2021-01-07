import React, { useState } from 'react';

import { Player } from './model/PlayerModel';
import { getPlayerByPlayerId } from './api/PlayerAPI';

export const App = () => {
    const [query, setQuery] = useState('');
    const [player, setPlayer] = useState<Player>();

    const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
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

            {player && (
                <div className="player">
                    <h2 className="player-name">
                        <span>{player.name}</span>
                    </h2>
                </div>
            )}
        </div>
    );
}
