import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('not-found');      
  this.route('about');   
  this.route('helpdesk', { path: 'http://helpdesk.daggerpool.com' });
});

export default Router;
