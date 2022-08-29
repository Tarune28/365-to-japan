class RequestUtils {
    /*
        Frontend: Display, this application - user interaction
        Backend: Server, handles data and logic - process data, (tell DB to) store data
        Database: Purely to store data

        Often: Frontend wants to send data to backend, and vice versa (communicate)
        ex. User creates an event on frontend. Event obj created in Frontend, want to store it in DB
        Solution: frontend to "tell" the backend and give backend this event object
        Frontend and backend communicating is through HTTP REQUESTS

        Logistics: Frontend sends an HTTP Request to an "endpoint"/location (url)
        Backend is "listening" on that endpoint for any requests coming in (stationed at that location)

        Types of HTTP Requests:
        - GET (frontend to backend): Asking backend to retrieve something
        - POST (frontend to backend): Giving backend something 
    */

    /**
     * Make a GET request to the specified URL
     * @param {String} url
     * @returns 
     */
    static get(url) {

        // GET all users with the first name of Tarun: QUERY PARAMETERS vvv
        // fetch("http://localhost:8080/getUsers?firstName=Tarun&lastName=Eswar")

        return fetch(url, {
            method: "get" // type of http request
        });
    }

    /**
     * Make a POST request to the specified URL with given JSON body
     * @param {String} url 
     * @param {JSONObject} object 
     * @returns 
     */
    static post(url, object) {
        // fetch(): built in Javascript API for handling HTTP requests

        // fetch: URLString, RequestOptions --> Promise
        /*
            Promise: used when there's a delay in something
            Two options:
                1. Send the request. Have entire app PAUSE and wait for the backend to respond
                2. Send the request. Keep running the app, but do something WHEN the backend comes back and gives response
            Second option is better. This is called ASYNCHRONOUS HTTP Request
        */
        return fetch(url, {
            method: "post", // type of http request
            headers: {"Content-Type": "application/json"}, // "options" for an HTTP request. JSON = Javascript Object
            body: JSON.stringify(object)// "object" that you want to give backend
        });
    }
}

export default RequestUtils;