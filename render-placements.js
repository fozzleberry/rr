/// this is going to have to be specific to each page

import { falseResponse } from "./fasleResponse";
import { recommendedPlacement } from "./recommendedPlacement";

class renderPlacements {

    constructor() {
        this.r3CommonResponse = falseResponse;
    }



    receiveResponse() {
        const response = falseResponse;

       renderPlacements.renderPlacements(response.placements.recommendedProducts);
    }

    static renderPlacements(placementData) {
        new recommendedPlacement(placementData);
    }

    sendData() {
        return setTimeout(this.receiveResponse, 3000)
    }
}
