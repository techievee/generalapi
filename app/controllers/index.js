import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
        
    get config_ubiq() {
        return config.APP.UBIQ  ;
    },

    height_ubiq: Ember.computed('model.model_ubiq.nodes', {
        get() {
            var node = this.get('bestNode_ubiq');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_ubiq: Ember.computed('model.model_ubiq.stats', {
        get() {
            return parseInt(this.get('model.model_ubiq.stats.roundShares'));
        }
    }),
    
    ethinr_ubiq: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_ubiq.exchangedata.price_inr'));
        }
    }),
    
     ethusd_ubiq: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_ubiq.exchangedata.price_usd'));
        }
    }),

    difficulty_ubiq: Ember.computed('model.model_ubiq.nodes', {
        get() {
            var node = this.get('bestNode_ubiq');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_ubiq: Ember.computed('difficulty_ubiq', {
        get() {
            return this.getWithDefault('difficulty_ubiq', 0) / config.APP.UBIQ.BlockTime;
        }
    }),

    immatureTotal_ubiq: Ember.computed('model.model_ubiq', {
        get() {
            return this.getWithDefault('model.model_ubiq.immatureTotal', 0) + this.getWithDefault('model.model_ubiq.candidatesTotal', 0);
        }
    }),

    bestNode_ubiq: Ember.computed('model.model_ubiq.nodes', {
        get() {
            var node = null;
            this.get('model.model_ubiq.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_ubiq: Ember.computed('model.model_ubiq.', {
        get() {
            return parseInt(this.get('model.model_ubiq.lastBlockFound')) || 0;
        }
    }),

    roundVariance_ubiq: Ember.computed('model.model_ubiq.', {
        get() {
            var percent = (this.get('model.model_ubiq.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),
   
    nextEpoch_ubiq: Ember.computed('height_ubiq', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_ubiq', 1) % 30000)) * 1000 * this.get('config_exp').BlockTime;
            return Date.now() + epochOffset;
        }
    })
   
    
});
