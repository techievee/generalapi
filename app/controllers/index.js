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
    }),
    
     get config_exp() {
        return config.APP.EXP  ;
    },

    height_exp: Ember.computed('model.model_exp.nodes', {
        get() {
            var node = this.get('bestNode_exp');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_exp: Ember.computed('model.model_exp.stats', {
        get() {
            return parseInt(this.get('model.model_exp.stats.roundShares'));
        }
    }),
    
    ethinr_exp: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_exp.exchangedata.price_inr'));
        }
    }),
    
     ethusd_exp: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_exp.exchangedata.price_usd'));
        }
    }),

    difficulty_exp: Ember.computed('model.model_exp.nodes', {
        get() {
            var node = this.get('bestNode_exp');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_exp: Ember.computed('difficulty_exp', {
        get() {
            return this.getWithDefault('difficulty_exp', 0) / config.APP.UBIQ.BlockTime;
        }
    }),

    immatureTotal_exp: Ember.computed('model.model_exp', {
        get() {
            return this.getWithDefault('model.model_exp.immatureTotal', 0) + this.getWithDefault('model.model_exp.candidatesTotal', 0);
        }
    }),

    bestNode_exp: Ember.computed('model.model_exp.nodes', {
        get() {
            var node = null;
            this.get('model.model_exp.nodes').forEach(function (n) {
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

    lastBlockFound_exp: Ember.computed('model.model_exp.', {
        get() {
            return parseInt(this.get('model.model_exp.lastBlockFound')) || 0;
        }
    }),

    roundVariance_exp: Ember.computed('model.model_exp.', {
        get() {
            var percent = (this.get('model.model_exp.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),
   
    nextEpoch_exp: Ember.computed('height_exp', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_exp', 1) % 30000)) * 1000 * this.get('config_exp').BlockTime;
            return Date.now() + epochOffset;
        }
    }),
     get config_dbix() {
        return config.APP.DBIX  ;
    },

    height_dbix: Ember.computed('model.model_dbix.nodes', {
        get() {
            var node = this.get('bestNode_dbix');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_dbix: Ember.computed('model.model_dbix.stats', {
        get() {
            return parseInt(this.get('model.model_dbix.stats.roundShares'));
        }
    }),
    
    ethinr_dbix: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_dbix.exchangedata.price_inr'));
        }
    }),
    
     ethusd_dbix: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_dbix.exchangedata.price_usd'));
        }
    }),

    difficulty_dbix: Ember.computed('model.model_dbix.nodes', {
        get() {
            var node = this.get('bestNode_dbix');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_dbix: Ember.computed('difficulty_dbix', {
        get() {
            return this.getWithDefault('difficulty_dbix', 0) / config.APP.DBIX.BlockTime;
        }
    }),

    immatureTotal_dbix: Ember.computed('model.model_dbix', {
        get() {
            return this.getWithDefault('model.model_dbix.immatureTotal', 0) + this.getWithDefault('model.model_dbix.candidatesTotal', 0);
        }
    }),

    bestNode_dbix: Ember.computed('model.model_dbix.nodes', {
        get() {
            var node = null;
            this.get('model.model_dbix.nodes').forEach(function (n) {
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

    lastBlockFound_dbix: Ember.computed('model.model_dbix.', {
        get() {
            return parseInt(this.get('model.model_dbix.lastBlockFound')) || 0;
        }
    }),

    roundVariance_dbix: Ember.computed('model.model_dbix.', {
        get() {
            var percent = (this.get('model.model_dbix.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),
   
    nextEpoch_dbix: Ember.computed('height_dbix', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_dbix', 1) % 30000)) * 1000 * this.get('config_dbix').BlockTime;
            return Date.now() + epochOffset;
        }
    }),
    get config_music() {
        return config.APP.MUSIC  ;
    },

    height_music: Ember.computed('model.model_music.nodes', {
        get() {
            var node = this.get('bestNode_music');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_music: Ember.computed('model.model_music.stats', {
        get() {
            return parseInt(this.get('model.model_music.stats.roundShares'));
        }
    }),
    
    ethinr_music: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_music.exchangedata.price_inr'));
        }
    }),
    
     ethusd_music: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_music.exchangedata.price_usd'));
        }
    }),

    difficulty_music: Ember.computed('model.model_music.nodes', {
        get() {
            var node = this.get('bestNode_music');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_music: Ember.computed('difficulty_music', {
        get() {
            return this.getWithDefault('difficulty_music', 0) / config.APP.MUSIC.BlockTime;
        }
    }),

    immatureTotal_music: Ember.computed('model.model_music', {
        get() {
            return this.getWithDefault('model.model_music.immatureTotal', 0) + this.getWithDefault('model.model_music.candidatesTotal', 0);
        }
    }),

    bestNode_music: Ember.computed('model.model_music.nodes', {
        get() {
            var node = null;
            this.get('model.model_music.nodes').forEach(function (n) {
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

    lastBlockFound_music: Ember.computed('model.model_music.', {
        get() {
            return parseInt(this.get('model.model_music.lastBlockFound')) || 0;
        }
    }),

    roundVariance_music: Ember.computed('model.model_music.', {
        get() {
            var percent = (this.get('model.model_music.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),
   
    nextEpoch_music: Ember.computed('height_music', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_music', 1) % 30000)) * 1000 * this.get('config_music').BlockTime;
            return Date.now() + epochOffset;
        }
    }),
    
    get config_eth() {
        return config.APP.ETH  ;
    },

    height_eth: Ember.computed('model.model_eth.nodes', {
        get() {
            var node = this.get('bestNode_eth');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_eth: Ember.computed('model.model_eth.stats', {
        get() {
            return parseInt(this.get('model.model_eth.stats.roundShares'));
        }
    }),
    
    ethinr_eth: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_eth.exchangedata.price_inr'));
        }
    }),
    
     ethusd_eth: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_eth.exchangedata.price_usd'));
        }
    }),

    difficulty_eth: Ember.computed('model.model_eth.nodes', {
        get() {
            var node = this.get('bestNode_eth');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_eth: Ember.computed('difficulty_eth', {
        get() {
            return this.getWithDefault('difficulty_eth', 0) / config.APP.MUSIC.BlockTime;
        }
    }),

    immatureTotal_eth: Ember.computed('model.model_eth', {
        get() {
            return this.getWithDefault('model.model_eth.immatureTotal', 0) + this.getWithDefault('model.model_eth.candidatesTotal', 0);
        }
    }),

    bestNode_eth: Ember.computed('model.model_eth.nodes', {
        get() {
            var node = null;
            this.get('model.model_eth.nodes').forEach(function (n) {
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

    lastBlockFound_eth: Ember.computed('model.model_eth.', {
        get() {
            return parseInt(this.get('model.model_eth.lastBlockFound')) || 0;
        }
    }),

    roundVariance_eth: Ember.computed('model.model_eth.', {
        get() {
            var percent = (this.get('model.model_eth.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),
   
    nextEpoch_eth: Ember.computed('height_eth', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_eth', 1) % 30000)) * 1000 * this.get('config_eth').BlockTime;
            return Date.now() + epochOffset;
        }
    })
   
    
});
