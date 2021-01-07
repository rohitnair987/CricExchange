import { Player } from '../model/PlayerModel';

export const getPlayerById = async (query: string) => {
    return new Player("sample player name for " + query);
}