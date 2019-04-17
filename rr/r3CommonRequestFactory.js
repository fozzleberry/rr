import {baseConfig} from "../config";
import {falseResponse} from "../fasleResponse";

class r3CommonRequestFactory {
    static itemPageHit(requestData, getPlacements = false) {

        return new Promise(function (resolve, reject) {
            try {

            } catch {
                const R3_COMMON = new window.r3_common();

                R3_COMMON.setApiKey(baseConfig.apiKey);
                R3_COMMON.setBaseUrl(window.location.protocol + '//integration.richrelevance.com/rrserver/');
                R3_COMMON.setClickthruServer(window.location.protocol + "//" + window.location.host);
                R3_COMMON.setSessionId(requestData.sessionId);
                R3_COMMON.setUserId(requestData.userId || '');  // if no user ID is available, please leave this blank

                if (!getPlacements) {
                    // Use this code if you are not requesting placement(s) for personalization
                    R3_COMMON.addPlacementType('item_page');
                } else {
                    requestData.placements.forEach(placement => {
                        // Replace placement_name with the placement name you set up in Dashboard.
                        // Call multiple times to display more than one placement.
                        R3_COMMON.addPlacementType(placement.name);
                    });
                }

                // We highly recommend you provide the Category Hint ID. See above for more information.
                R3_COMMON.addCategoryHintId(requestData.categoryHintId);

                const R3_ITEM = new window.r3_item();
                R3_ITEM.setId(requestData.itemId);
                R3_ITEM.setName(requestData.itemName);

                window.rr_flush_onload();

                resolve();
            }
        });

    }
};


export {r3CommonRequestFactory}
