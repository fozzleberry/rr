import { falseResponse } from "../../fasleResponse";

import { r3CommonRequestFactory } from "../r3CommonRequestFactory";


class RRService {

    getRecommendedProductsFakeResponse() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(JSON.stringify(falseResponse));
            }, 300);
        });
    }

    async getRecommendedProducts() {


        // sets the values for the r3 call
        await r3CommonRequestFactory.itemPageHit();


        // makes the api call, assigns the response body to window.RR.data.JSON and fires the callback.
        window.r3();

        // the callback resolves the promise
        return new Promise((resolve) => {
            window.RR.jsonCallback = resolve(window.RR.data.JSON);
        });
    }
}

export { RRService };
