import React, { useState } from 'react';

import { Player } from './model/Player/PlayerModel';
import PlayerSearchParams from './model/Player/PlayerSearchParams';
import { getPlayers } from './api/PlayerAPI';
import Header from './components/Header';
import Footer from './components/Footer';
import { Request } from './model/Request';

export const App = (): JSX.Element => {
    const [playerNamePrefix, setPlayerNamePrefix] = useState('');
    const [players, setPlayers] = useState<Player[]>();
    const [errorMsg, setErrorMessage] = useState('');

    const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setErrorMessage('');
            setPlayers([]);

            const playerSearchParams = new PlayerSearchParams();
            playerSearchParams.namePrefix = playerNamePrefix;
            const request = new Request<PlayerSearchParams>(playerSearchParams);
            const response = getPlayers(request);
            console.log(response);

            if (response.isSuccess()) {
                setPlayers(response.response());
            } else {
                setErrorMessage(response.message);
            }
            
            setPlayerNamePrefix('');
        }
    }

    return (
        <div className="main-container">
            <Header />
            
            <input type="text"
                className="search"
                placeholder="Search..."
                value={playerNamePrefix}
                onChange={(e) => setPlayerNamePrefix(e.target.value)}
                onKeyPress={search}
            />

            {errorMsg && (
                <div className="error-message">
                    <span>{errorMsg}</span>
                </div>
            )}

            {!errorMsg && players && (
                <div className="players">
                    <ul>
                        {players.map(player => (
                            <li key={player.id().toString()}>
                                {player.name()}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <Footer />
        </div>
    );
}
