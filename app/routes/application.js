import Ember from 'ember';
import config from '../config/environment';
export default Ember.Route.extend({
    intl: Ember.inject.service(),
    beforeModel() {
        this.get('intl').setLocale('en-in');
    },   
    model_exp: function () {
        var url = config.APP.EXP.ApiUrl + 'api/stats';
            console.log( Ember.inspect(url) );
        return Ember.$.getJSON(url).then(function (data) {
            return Ember.Object.create(data);
        });
    },
    model_ubiq: function () {
        var url = config.APP.UBIQ.ApiUrl + 'api/stats';
        return Ember.$.getJSON(url).then(function (data) {
            return Ember.Object.create(data);
        });
    },
    setupController: function (controller, model) {
        this._super(controller, model);
        Ember.run.later(this, this.refresh, 5000);
    }
});
