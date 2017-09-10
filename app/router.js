import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('not-found');
  this.route('help');
  this.route('miners');
  this.route('exchange');
  this.route('about');
   this.route('helpdesk', { path: 'http://helpdesk.miningpoolindia.com' });
});

export default Router;
