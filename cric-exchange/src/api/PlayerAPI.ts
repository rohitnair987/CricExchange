import { getPlayerById } from '../dbaccess/PlayerAccessor';

export const getPlayerByPlayerId =  (query: string) => {
    return getPlayerById(query);
}