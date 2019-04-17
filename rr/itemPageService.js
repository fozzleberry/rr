import { RRService } from "./services/RRService";
import { baseConfig, itemPageConfig } from "../config";

class itemPageService {

    constructor() {
        this.RRService = new RRService();
    }
    async getRecommendedProducts() {
        return this.RRService.getRecommendedProductsFakeResponse();
    }
}

export { itemPageService }
