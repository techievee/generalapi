/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'generalapi',
        environment: environment,
        rootURL: '/',
        locationType: 'hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            WebsiteName : 'miningpoolindia.com',
            Currency : 'INR',
            
             EXP: {
                    // API host and port
                    ApiUrl: '//exp.miningpoolindia.com/',

                    // HTTP mining endpoint
                    HttpHost: 'http://exp-us01.daggerpool.com',
                    HttpPort: 9999,            

                    // Stratum mining endpoint
                    StratumHost: 'exp-us01.daggerpool.com',
                    StratumPort: 9009,

                    StratumHost1: 'exp-us02.daggerpool.com',
                    StratumPort1: 9009,

                    StratumHost2: 'exp-uk01.daggerpool.com',
                    StratumPort2: 9009,

                    // Fee and payout details
                    PoolFee: '0%',
                    PayoutThreshold: '0.5',
                    ShareDifficulty: '4G',

                    //Current and Localization
                    Currency: 'USD',
                    CoinName: 'Expanse',
                    CoinShortName: 'EXP',
                    PaymentText: 'twice in a day',
                    SupportMail: 'helpdesk@daggerpool.com',
                    SupportHelpdesk: 'http://helpdesk.daggerpool.com',
                    WebsiteName: 'exp.daggerpool.com',

                    //Coin Bases Settings
                    ChainAddress : 'http://www.gander.tech/address/',
                    TransactionAddress : 'http://www.gander.tech/tx/',
                    UncleAddress : 'http://www.gander.tech/uncle/',
                    BlockAddress : 'http://www.gander.tech/tx/',

                    //Twitter Parameter
                    TwitterURL: 'https://twitter.com/',
                    TwitterHash: 'daggerpool_com',


                    // For network hashrate (change for your favourite fork)
                    BlockTime: 14.4
             },
             UBIQ: {
                     // API host and port
                    ApiUrl: '//ubiq.daggerpool.com/',

                    // HTTP mining endpoint
                    HttpHost: 'http://ubiq-us01.daggerpool.com',
                    HttpPort: 8888,            

                    // Stratum mining endpoint
                    StratumHost: 'ubiq-us01.daggerpool.com',
                    StratumPort: 8008,

                    StratumHost1: 'ubiq-us02.daggerpool.com',
                    StratumPort1: 8008,

                    StratumHost2: 'ubiq-uk01.daggerpool.com',
                    StratumPort2: 8008,

                    // Fee and payout details
                    PoolFee: '0%',
                    PayoutThreshold: '0.5',
                    ShareDifficulty: '4G',

                    //Current and Localization
                    Currency: 'USD',
                    CoinName: 'Ubiq',
                    CoinShortName: 'UBIQ',
                    PaymentText: 'twice in a day',
                    SupportMail: 'helpdesk@daggerpool.com',
                    SupportHelpdesk: 'http://helpdesk.daggerpool.com',
                    WebsiteName: 'ubiq.daggerpool.com',

                    //Coin Bases Settings
                    ChainAddress : 'https://ubiqscan.io/en/address/',
                    TransactionAddress : 'https://ubiqscan.io/en/tx/',
                    UncleAddress : 'https://ubiqscan.io/en/uncle/',
                    BlockAddress : 'https://ubiqscan.io/en/block/',

                    //Twitter Parameter
                    TwitterURL: 'https://twitter.com/',
                    TwitterHash: 'daggerpool_com',


                    // For network hashrate (change for your favourite fork)
                    BlockTime: 14.4
             }
             


        }
    };

    if (environment === 'development') {
        /* Override ApiUrl just for development, while you are customizing
         frontend markup and css theme on your workstation.
         */
        ENV.APP.EXP.ApiUrl = 'https://exp.daggerpool.com/'
        ENV.APP.UBIQ.ApiUrl = 'https://ubiq.daggerpool.com/'
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.baseURL = '/ember-cli-twitter-feed/';
    }

    ENV.contentSecurityPolicy = {
        'script-src': [
            "'self'",
            'https://syndication.twitter.com',
			            'https://cdn.syndication.twimg.com',
            "'sha256-XnNQECY9o-nIv2Qgcd1A39YarwxTm10rhdzegH_JBxY='"],
        'style-src': [
            "'self'",
            'http://platform.twitter.com',
            "'sha256-zCvYlDs6LsUp0EqrJFjIGUiM_AG2fGlkNrzJ2YiBTG0='"],
        'img-src': [
            "'self'",
            'data:',
            'https://pbs.twimg.com',
            'https://syndication.twitter.com',
            'http://platform.twitter.com']
    };
    return ENV;
};