/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('RSS Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Wrote a test that loops through each feed
         * in allFeeds object and ensures it has a URL 
         * and that URL is not empty.
         */
         it('URL is defined and not empty', function(){
            allFeeds.forEach(function(feed){
                feedUrl = feed.url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl.length).not.toBe(0);
            });
         });

        /* Wrote a test that loops through each feed
         * in allFeeds object and ensures it has a name
         * and that name is not empty.
         */
         it('Name is defined and not empty', function(){
            allFeeds.forEach(function(feed){
                feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            });
         });
         
    });


    /* Wrote a test suite named "The menu" */
    describe('The Menu', function(){
        var body = $('body');
        /* Wrote a test that ensures menu element is
         * hidden by default.
         */
         it('The Menu is Hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

         it('The Menu is Hidden', function(){
            expect(body.hasClass('menu-hidden')).toBe(true);
         });

         /* Wrote a test that ensures menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: 
          * 1. the menu is displaying when clicked.
          * 2. the menu is hiding when clicked again.
          */
          it('The Menu is Visible when menu icon is clicked and Hidden when clicked again', function(){
            var menuIcon = $('.menu-icon-link');

            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Wrote a test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Wrote a test that ensures when loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within .feed container.
         * Also, loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
            loadFeed(0, done);
        });

        it('there is at least one a single (.entry) within (.feed) container', function() {
          var feed = $('.feed');
          var entry = $('.entry');
          expect(feed.length).toBeGreaterThan(0);
          expect(entry.length).toBeGreaterThan(0);
        });

    });

    /* Wrote a test suite named "New Feed Selection" */
    describe('New Feed Section', function() {

        /* Wrote a test that ensures when a new feed is loaded
         * by loadFeed function that the content actually changes.
         * Also, loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         var legacyFeed;
         var newFeed;

         beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function(){
                legacyFeed = $('.feed').html();
                loadFeed(1, done);
            });
         });

        it('ensures a new feed is loaded when loadFeed is running', function() {
            newFeed = $('.feed').html();
            expect(legacyFeed).not.toBe(newFeed);
        });
     });

}());
