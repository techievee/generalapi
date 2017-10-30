import Ember from 'ember';
import RSVP from 'rsvp';
import config from '../config/environment';

export default Ember.Route.extend({
    intl: Ember.inject.service(),
    beforeModel() {
        this.get('intl').setLocale('en-in');
    },   
    model: function () {
        var url_exp = config.APP.EXP.ApiUrl + 'api/stats'; 
        var url_ubiq = config.APP.UBIQ.ApiUrl + 'api/stats'; 
        var url_dbix = config.APP.DBIX.ApiUrl + 'api/stats'; 
        var url_music = config.APP.MUSIC.ApiUrl + 'api/stats'; 
        var url_eth = config.APP.ETH.ApiUrl + 'api/stats'; 
        var url_etc = config.APP.ETC.ApiUrl + 'api/stats'; 
        var url_soil = config.APP.SOIL.ApiUrl + 'api/stats'; 
        var url_ele = config.APP.ELE.ApiUrl + 'api/stats'; 
        
      return RSVP.hash({
          model_ubiq:  Ember.$.getJSON(url_ubiq).then(function (data) {
            return Ember.Object.create(data);
        }),
        model_exp:Ember.$.getJSON(url_exp).then(function (data) {
            return Ember.Object.create(data);
        
        }),
        model_dbix:Ember.$.getJSON(url_dbix).then(function (data) {
            return Ember.Object.create(data);
        
        }),
        model_music:Ember.$.getJSON(url_music).then(function (data) {
            return Ember.Object.create(data);
        
        }),
        model_eth:Ember.$.getJSON(url_eth).then(function (data) {
            return Ember.Object.create(data);
        
        }),
         model_etc:Ember.$.getJSON(url_etc).then(function (data) {
            return Ember.Object.create(data);
        
        }),
         model_soil:Ember.$.getJSON(url_soil).then(function (data) {
            return Ember.Object.create(data);
        
        }),
         model_ele:Ember.$.getJSON(url_ele).then(function (data) {
            return Ember.Object.create(data);
        
        })
    });
        
      
        
    },
  
    setupController: function (controller, model) {
        this._super(controller, model);
        Ember.run.later(this, this.refresh, 5000);
    }
});
