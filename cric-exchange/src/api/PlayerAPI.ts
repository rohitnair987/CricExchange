import PlayerSearchParams from '../model/Player/PlayerSearchParams';
import { getPlayerById, getPlayersByNamePrefix } from '../dbaccess/PlayerAccessor';
import { Player } from '../model/Player/PlayerModel';
import { Request } from '../model/Request';
import { Response } from '../model/Response';

export const getPlayers =  (request: Request<PlayerSearchParams>): Response<Player[]> => {
    if (request.request().id !== undefined) {
        return getById(request.request().id as number);
    }

    if (request.request().namePrefix !== undefined) {
        return getByNamePrefix(request.request().namePrefix as string);
    }

    return buildResponse([], "We currently support searching players only by id and name prefix");
}

const getById = (id: number): Response<Player[]> => {
    const players = getPlayerById(id);

    if (players.length !== 1) {
        return buildResponse([], "No unique player with id " + id);
    }

    return buildResponse(players, "");
}

const getByNamePrefix = (namePrefix: string): Response<Player[]> => {
    if (namePrefix.length === 0) {
        return buildResponse([], "You got to give me a start!");
    }

    const players = getPlayersByNamePrefix(namePrefix);

    return buildResponse(players, "No players starting with " + namePrefix);
}

const buildResponse = (players: Player[], message: string): Response<Player[]> => {
    if (players === undefined || players === null) {
        return new Response(500, message, players);
    }

    if (players.length === 0) {
        return new Response(200, message, players);
    }

    // To-do: change to log
    console.log("found players: ");
    console.log(players);

    return new Response<Player[]>(200, players.length + " player(s) matching search criteria.", players);
}
