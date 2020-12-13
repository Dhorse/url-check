# URL Check

This will check a url for a value,  If it does not find the value it waits a set time and then tries again.... indefinetly until it does.  Once it does it will open the page

# FAQ
### How do I start this?
1. Install [Node](https://nodejs.org/en/).
2. Run "npm install"
3. Run npm run watch`
4. Choose the url you would like to setup

### How do I stop this from running?
Enter `Control + C` in your Terminal window, or exit the Terminal altogether.

### How do I expand this?
The "type" const is at the top of the index.js file is a variable that has these properties:
- check: this is the string we are checking for on the page.  It needs to be an element that either is there, or is not there depending on if the item is available for purchase.
- contains: this is a boolean that determines if the success criterea wants the "check" property on the page or off.
 - url: url we are checking.

### future enhancements.  
Ideally I would want this to be multithreaded and to run each of the options (checking all the sites), instead of just one since we are unaware of which one will pop