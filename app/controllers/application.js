import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
    get config_exp() {
        return config.APP.EXP;
    },
     get config_ubiq() {
        return config.APP.UBIQ;
    },

//EXP RELATED VARIABLES
  
    lastBlockFound_exp: Ember.computed('model', {
        get() {
            return parseInt(this.get('model.lastBlockFound')) || 0;
        }
    }),
    
    roundShares_exp: Ember.computed('model.stats', {
        get() {
            return parseInt(this.get('model.stats.roundShares'));            
        }
    })

   
});
