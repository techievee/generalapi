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
     
    test: Ember.computed('model', {
        get() {
            return this.get('model.model_exp.candidatesTotal');
        }
    })    
   
    
});
