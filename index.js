const open = require("open");
const promptly = require("promptly");

const { checkUrl } = require("./utils");

/** Constants */
let numTries = 1;
const type = {
    disc: {
        check: "queue-it_log",
        contains: true,
        url:
            "https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816",
    },
    digital: {
        check: "queue-it_log",
        contains: true,
        url:
            "https://direct.playstation.com/en-us/consoles/console/playstation5-digital-edition-console.3005817",
    },
    bestbuy: {
        check: "Add to Cart",
        contains: true,
        url:
            "https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149",
    },
    costco: {
        check: "oos-overlay",
        contains: false,
        url: "https://www.costco.com/.product.1483712.html",
    },
    test: {
        check: "windows and doors",
        contains: true,
        url: "https://bit.ly/2W2yNA0",
    },
    bestbuytest: {
        check: "Add to Cart",
        contains: true,
        url:
            "https://www.bestbuy.com/site/seagate-game-drive-for-ps4-systems-officially-licensed-2tb-external-usb-3-0-portable-hard-drive-black/6309234.p?skuId=6309234",
    },
    costcotest: {
        check: "oos-overlay",
        contains: false,
        url:
            "https://www.costco.com/mrs.-fields-cookies-deluxe-crate.product.11661859.html",
    },
};

/** Start */
(async function () {
    const choice = await promptly.choose(
        "select a choice (disc, digital, bestbuy, costco)",
        Object.keys(type)
    );
    const onSuccess = () => {
        console.log("Found it! Opening page now...");
        open(type[choice].url, { app: ["google chrome"] });
    };

    console.log(`Searching ${type[choice].url} for ${type[choice].check}`);

    checkUrl(
        type[choice].url,
        type[choice].check,
        type[choice].contains,
        5000,
        onSuccess
    );
})();
