import { Player } from '../model/Player/PlayerModel';

export const getPlayerById = (playerId: number): Player[] => {
    let players: Player[] = [];

    samplePlayers.forEach(player => {
        if (player.id() === playerId) {
            players.push(player);
        }
    });

    return players;
}

export const getPlayersByNamePrefix = (playerNamePrefix: string): Player[] => {
    let players: Player[] = [];

    const playerNamePrefixLowerCase = playerNamePrefix.toLowerCase();

    samplePlayers.forEach(player => {
        const playerNameSplit = player.name().toLowerCase().split(" ");
        playerNameSplit.forEach(word => {
            if (word.startsWith(playerNamePrefixLowerCase)) {
                players.push(player);
            }
        })
    });

    return players;
}

// placeholders while the db is being set up
let samplePlayers = new Set([
    new Player(10, "Sachin Tendulkar"),
    new Player(20, "Rahul Dravid"),
    new Player(30, "Saurabh Ganguly")
]); 