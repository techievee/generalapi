# General Consolidated Frontend for Ethash-mining-Pool (International Version)

*Refer other branches for Indian Version

When you run pool with multiple coins, then this frontend consolidates various coins into single page.

It works in combination with techievee/ethash-mining-pool and techievee/statistics-api 

This is an ember application, which can be hosted on any simple webserver.
The application static pages can be placed in any Content delivery network for faster access

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Branches 
**Please clone the project using the branches as  per the coin

* v1.0_in – Indian Version  
*	v1.0 – International Version



## Installation 

* `git clone -b <branch> https://github.com/techievee/statistics_api.git` this repository
* change into the new directory
* `npm install`
* `bower install`
* `sudo chmod +x build.sh`
* `./build.sh`

Copy the build files to your webserver or to CDN.

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

