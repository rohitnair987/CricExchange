import React, { useState } from 'react';

import { Player } from '../model/Player/PlayerModel';
import PlayerSearchParams from '../model/Player/PlayerSearchParams';
import { getPlayers } from '../api/PlayerAPI';
import { Request } from '../model/Request';

export const SearchPlayer = (): JSX.Element => {
    const [playerNamePrefix, setPlayerNamePrefix] = useState('');
    const [players, setPlayers] = useState<Player[]>();
    const [message, setMessage] = useState('');

    const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setPlayers([]);
            setMessage('');

            const playerSearchParams = new PlayerSearchParams();
            playerSearchParams.namePrefix = playerNamePrefix;
            const request = new Request<PlayerSearchParams>(playerSearchParams);
            const response = getPlayers(request);
            // To-do: change to log
            console.log(response);

            if (response.isSuccess() && response.response().length > 0) {
                setPlayers(response.response());
            } else {
                setMessage(response.message);
            }
            
            setPlayerNamePrefix('');
        }
    }

    return (
        <div className="players">
            <input type="text"
                className="search"
                placeholder="Search..."
                value={playerNamePrefix}
                onChange={(e) => setPlayerNamePrefix(e.target.value)}
                onKeyPress={search}
            />

            {message && (
                <div className="error-message">
                    <span>{message}</span>
                </div>
            )}

            {!message && players && (
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
        </div>
    );
}