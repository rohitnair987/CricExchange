export class Request<T> {

    /* will need when APIs are remote
     * requestMethod, headers
     */

    private _request: T;

    public constructor(request: T) {
        this._request = request;
    }

    public request = () => this._request;
    
}