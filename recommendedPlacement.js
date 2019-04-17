class recommendedPlacement {

    constructor(placementData) {
        this.placementData = placementData;
    }

    render() {
        const {
            clickURL,
            clickTrackingURL,
            salePriceCents,
            imageURL,
            name,
            priceCents,
            productURL,
            strategyMessage
        } = this.placementData;

        return `
        <div id="optimizely-extension-5b6a6c9799b446779e7b6edfd7af32c3" class="optly-recommendations" style="background-color:rgba(255, 255, 255, 1)">
    <div class="optly-recommendations__inner">
        <h3 class="block__title">${strategyMessage}</h3>

        <div class="optly-reco-scroller-chevron optly-reco-scroller-chevron-left">
            <a href="${clickURL}">
                <img src="data:image/svg+xml;utf8,&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 9.24 16&quot;&gt;&lt;title&gt;left chevron active&lt;/title&gt;&lt;g id=&quot;Layer_2&quot; data-name=&quot;Layer 2&quot;&gt;&lt;g id=&quot;Layer_1-2&quot; data-name=&quot;Layer 1&quot;&gt;&lt;path d=&quot;M0,8,7.74.26A.88.88,0,0,1,9,1.5L2.49,8,9,14.5a.88.88,0,0,1-1.24,1.24Z&quot;&gt;&lt;/path&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;">
            </a>
        </div>

        <div class="optly-recommendations-scroller">
            <ul class="cara" style="width: 2300px;">
                <li class="ui-carousel--related__item">
                        <a href="https://www.missguided.co.uk/rust-bardot-slinky-ruched-bodycon-midaxi-dress-10142139" class="reco-link">
                            <div class="reco-img-wrapper">
                                <div class="reco-img-container">
                                    <img src="https://media.missguided.com/s/missguided/DE928991_set/1/rust-bardot-slinky-ruched-bodycon-midaxi-dress.jpg?$product-page__main--1x$&amp;w=300">
                                </div>
                            </div>
                        </a>
                        <div class="price-box">£22.00</div>
                        <p class="reco-desc">rust bardot slinky ruched bodycon midaxi...</p>
                        <div class="reco-details">
                            <div class="10142139-RUST-sizes reco-bottom--size"><ul class="size-drop-down"><li class="init">select your size</li><li data-value="4" data-id="7399" class="available">Size 4</li><li data-value="6" data-id="7357" class="available">Size 6</li><li data-value="8" data-id="7358" class="available">Size 8</li><li data-value="10" data-id="7359" class="available">Size 10</li><li data-value="12" data-id="7360" class="available">Size 12</li><li data-value="14" data-id="7361" class="available">Size 14</li><li data-value="16" data-id="7362" class="available">Size 16</li></ul></div>
                            <div class="reco-bottom--add">
                                <a class="button reco-add-to-bag" href="#" data-super_attribute="super_attribute[164]" data-productid="1035960" data-sku="10142139-RUST">add to bag</a>
                            </div>
                        </div>
                </li>
            </ul>
        </div>

        <div class="optly-reco-scroller-chevron optly-reco-scroller-chevron-right">
            <a href="#">
                <img src="data:image/svg+xml;utf8,&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 9.24 16&quot;&gt;&lt;title&gt;right chevron active&lt;/title&gt;&lt;g id=&quot;Layer_2&quot; data-name=&quot;Layer 2&quot;&gt;&lt;g id=&quot;Layer_1-2&quot; data-name=&quot;Layer 1&quot;&gt;&lt;path d=&quot;M9.24,8,1.5,15.74A.88.88,0,0,1,.26,14.5L6.76,8,.26,1.5A.88.88,0,0,1,1.5.26Z&quot;&gt;&lt;/path&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;">
            </a>
        </div>
    </div>
</div>
        `
    }
}

export { recommendedPlacement };
