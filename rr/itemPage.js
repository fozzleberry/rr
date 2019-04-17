import { itemPageService } from "./itemPageService";

class RRItemPage {
    constructor() {
        this.pageService = new itemPageService();
    }

    getData() {
       return this.pageService.getRecommendedProducts();
    }
}

// item page is an RR page implementation

// item page has placements

// a placement is an RR placement implementation

// a placement has a renderer

// a placement is responsible for injecting the markup into the page
