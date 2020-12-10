const open = require("open");
const promptly = require("promptly");

const { checkUrl } = require("./utils");

/** Constants */
let numTries = 1;
const type = {
    disc: {
        check: "queue-it_log",
        url:
            "https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816",
    },
    digital: {
        check: "queue-it_log",
        url:
            "https://direct.playstation.com/en-us/consoles/console/playstation5-digital-edition-console.3005817",
    },
    test: {
        check: "windows and doors",
        url: "https://bit.ly/2W2yNA0",
    },
};

/** Start */
(async function () {
    const choice = await promptly.choose(
        "select a choice (disc, digital, test)",
        ["disc", "digital", "test"]
    );
    console.log(`Searching ${type[choice].url} for ${type[choice].check}`);

    const onSuccess = () => {
        console.log("Found it! Opening page now...");
        open(type[choice].url, { app: ["google chrome"] });
    };

    checkUrl(type[choice].url, type[choice].check, 5000, onSuccess);
})();
