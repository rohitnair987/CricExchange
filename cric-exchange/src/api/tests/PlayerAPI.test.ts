import { getPlayers } from '../PlayerAPI';
import { Request } from '../../model/Request';
import PlayerSearchParams from '../../model/Player/PlayerSearchParams';

const VALID_PLAYER_BY_ID = {
    ID: 10,
    NAME: "Sachin Tendulkar"
}
const INVALID_PLAYER_BY_ID = {
    ID: -20,
    NAME: "Sachin Tendulkar"
}
const VALID_PLAYER_BY_NAME_PREFIX = {
    NAME_PREFIX: "ten",
    NAME: "Sachin Tendulkar"
}
const INVALID_PLAYER_BY_NAME_PREFIX = {
    NAME_PREFIX: "xyz"
}

test('getById with null id', () => {
    // given
    const playerSearchParams = new PlayerSearchParams();
    // playerSearchParams.id = ;
    const request: Request<PlayerSearchParams> = new Request<PlayerSearchParams>(playerSearchParams);

    // when
    const response = getPlayers(request);
    
    // then
    expect(response.isSuccess()).toBe(true);
    expect(response.response().length).toBe(0);
    expect(response.message()).toBe("We currently support searching players only by id and name prefix");
});

test('getById with valid id', () => {
    // given
    const playerSearchParams = new PlayerSearchParams();
    playerSearchParams.id = VALID_PLAYER_BY_ID.ID;
    const request: Request<PlayerSearchParams> = new Request<PlayerSearchParams>(playerSearchParams);

    // when
    const response = getPlayers(request);
    
    // then
    expect(response.isSuccess()).toBe(true);
    expect(response.response().length).toBe(1);
    expect(response.response()[0].name()).toBe(VALID_PLAYER_BY_ID.NAME);
});

test('getById with invalid id', () => {
    // given
    const playerSearchParams = new PlayerSearchParams();
    playerSearchParams.id = INVALID_PLAYER_BY_ID.ID;
    const request: Request<PlayerSearchParams> = new Request<PlayerSearchParams>(playerSearchParams);

    // when
    const response = getPlayers(request);
    
    // then
    expect(response.isSuccess()).toBe(true);
    expect(response.response().length).toBe(0);
    expect(response.message()).toBe("No unique player with id " + INVALID_PLAYER_BY_ID.ID);
});

test('getByNamePrefix with valid name prefix', () => {
    // given
    const playerSearchParams = new PlayerSearchParams();
    playerSearchParams.namePrefix = VALID_PLAYER_BY_NAME_PREFIX.NAME_PREFIX;
    const request: Request<PlayerSearchParams> = new Request<PlayerSearchParams>(playerSearchParams);

    // when
    const response = getPlayers(request);
    
    // then
    expect(response.isSuccess()).toBe(true);
    expect(response.response().length).toBe(1);
    expect(response.response()[0].name()).toBe(VALID_PLAYER_BY_NAME_PREFIX.NAME);
});

test('getByNamePrefix with invalid name prefix', () => {
    // given
    const playerSearchParams = new PlayerSearchParams();
    playerSearchParams.namePrefix = INVALID_PLAYER_BY_NAME_PREFIX.NAME_PREFIX;
    const request: Request<PlayerSearchParams> = new Request<PlayerSearchParams>(playerSearchParams);

    // when
    const response = getPlayers(request);
    
    // then
    expect(response.isSuccess()).toBe(true);
    expect(response.response().length).toBe(0);
    expect(response.message()).toBe("No players starting with " + INVALID_PLAYER_BY_NAME_PREFIX.NAME_PREFIX);
});
