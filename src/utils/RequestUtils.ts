class RequestUtils {


    static getDomain() {
        return "https://blog-server-365.herokuapp.com"; // live server
       // return "http://localhost:8080"; // local server
     //  return "https://testing-srever-28dc3c2e4f31.herokuapp.com";
    }

    /**
     * Make a GET request to the specified URL
     * @param {String} url
     * @returns 
     */
    static get(url: string, token?: string | null | undefined) {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set("Content-Type", "application/json");
        requestHeaders.set("Authorization", token!);

        return fetch(this.getDomain() + url, {
            method: "get",
            headers: requestHeaders
        });
    }

    /**
     * Make a POST request to the specified URL with given JSON body
     * @param {String} url 
     * @param {JSONObject} object 
     * @returns 
     */
    static post(url: string, object: { name?: string | undefined; email?: string; subject?: string; message?: string; _id?: any; title?: string; bannerURL?: string; date?: any; description?: string; location?: string; category?: string; icon?: string; html?: string; show?: boolean; newAPI?: string; counter?: number; newsletter?: string; scheduledTime?: string; authorsNote?: string; haiku?: string; agree?: boolean; }, token?: string | null | undefined) {

        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set("Content-Type", "application/json");
        requestHeaders.set("Authorization", token!);

        return fetch(this.getDomain() + url, {
            method: "post",
            headers: requestHeaders, 
            body: JSON.stringify(object)
        });
    }
}

export default RequestUtils;