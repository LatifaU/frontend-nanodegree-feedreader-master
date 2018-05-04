# Project Overview
Created test suites against Project #3 'Feed Reader Testing'. 
Tested the underlying business logic of the application as well as the event handling and DOM manipulation. 
Used [Jasmine](http://jasmine.github.io/) original work and complete test suites.


# To run unit test, please do the following steps:
* Downlaod this to your local machine and open `index.html`. This index page will loads jasmine reader at the bottom.
* Verify the following tests:
 * Loop through each feed in allFeeds object and ensures it has a URL defined and that the URL is not empty.
 * Loop through each feed in allFeeds object and ensures it has a name defined and that the name is not empty.
 * Ensure menu changes visibility when the menu icon is clicked.
 * Ensure menu element is hidden by default.
 * Ensure when loadFeed function is called and completes its work, there is at least a single `.entry` element within `.feed` container. Also, `loadFeed()` is asynchronous so this test requires the use of Jasmine's `beforeEach` and asynchronous `done()` function.
 * Ensure when a new feed is loaded by `loadFeed` function that the content **actually changes**. Also, `loadFeed()` is asynchronous so this test requires the use of Jasmine's `beforeEach` and asynchronous `done()` function.