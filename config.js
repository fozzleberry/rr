const baseConfig = {
    p13nUrl : '//media.richrelevance.com/rrserver/js/1.2/p13n.js', //static db value
    r3CommonBaseUrl: '//integration.richrelevance.com/rrserver/', //static db value
    apiKey: 'abcd5432e1', //static db value
};

const itemPageConfig = {
    sessionId: '6B4D397B',
    userId: '10987',
    placementType: 'item_page', //static db value
    placements: ['item_page.placement_name', 'item_page.placement_name2'], //static db value
    itemId: '123456789',
    itemName: 'slinkyDress'
};

export { baseConfig, itemPageConfig };
