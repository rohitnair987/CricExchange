export class Response<T> {

    private _responseCode: number;
    private _message: string;
    private _response: T;

    public constructor(responseCode: number, message: string, response: T) {
        this._responseCode = responseCode;
        this._message = message;
        this._response = response;
    }

    public responseCode = () => this._responseCode;
    public message = () => this._message;
    public response = () => this._response;
    public isSuccess = () => this._responseCode.toString()[0] === '2';

}