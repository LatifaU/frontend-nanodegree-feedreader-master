# Project Overview
Created test suites against Project #3 'Feed Reader Testing'. 
Tested the underlying business logic of the application as well as the event handling and DOM manipulation. 
Used [Jasmine](http://jasmine.github.io/) original work and complete test suites.


# Why this Project?
Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers Wrote tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.
Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


# What will I learn?
I will learn how to use Jasmine to Write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


# How will this help my career?
* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How will I complete this project?
1. Wrote a test that loops through each feed in `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Wrote a test that loops through each feed in `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Wrote a new test suite named `"The menu"`.
4. Wrote a test that ensures menu element is hidden by default.
5. Wrote a test that ensures menu changes visibility when the menu icon is clicked. This test have two expectations: 1. the menu is displaying when clicked. 2. the menu is hiding when clicked again.
6. Wrote a test suite named `"Initial Entries"`.
7. Wrote a test that ensures when `loadFeed` function is called and completes its work, there is at least a single `.entry` element within `.feed` container.
8. Wrote a test suite named `"New Feed Selection"`.
9. Wrote a test that ensures when a new feed is loaded by `loadFeed` function that the content actually changes.
10. Wrote a README file.