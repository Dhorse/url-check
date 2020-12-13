const axios = require("axios").default;

/** check url
 * Recursively checks for redirects.
 * @param url - Url to check
 * @param checkValue - text serching for
 * @param checkInterval - How often to check in ms
 * @param onSuccess - Callback function for successful redirect
 */
async function checkUrl(
    url,
    checkValue,
    contains,
    checkInterval,
    onSuccess,
    attempt = 1
) {
    axios.get(url).then((response) => {
        if (contains == true && response.data.indexOf(checkValue) > 0) {
            onSuccess();
        } else if (
            contains == false &&
            response.data.indexOf(checkValue) == -1
        ) {
            onSuccess();
        } else {
            setTimeout(() => {
                console.log(`${checkValue} not detected. Trying again...`);
                console.log("Attempt #", attempt);
                console.log("");
                attempt++;

                checkUrl(
                    url,
                    checkValue,
                    contains,
                    checkInterval,
                    onSuccess,
                    attempt
                );
            }, checkInterval);
        }
    });
}

module.exports = {
    checkUrl,
};
