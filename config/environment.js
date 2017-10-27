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
            WebsiteName : 'daggerpool.com',
            Currency : 'USD',
            
             EXP: {
                    // API host and port
                    ApiUrl: '//exp.daggerpool.com/',

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
                    PoolFee: '0.5%',
                    PayoutThreshold: '0.5',
                    ShareDifficulty: '4G',

                    //Current and Localization
                    Currency: 'USD',
                    CoinName: 'Expanse',
                    CoinShortName: 'EXP',
                    PaymentText: 'every 2 hours',
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
                    BlockTime: 30
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
                    PoolFee: '0.5%',
                    PayoutThreshold: '0.5',
                    ShareDifficulty: '4G',

                    //Current and Localization
                    Currency: 'USD',
                    CoinName: 'Ubiq',
                    CoinShortName: 'UBIQ',
                    PaymentText: 'every 2 hours',
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
             },
        DBIX: {
            // API host and port
            ApiUrl: '//dbix.daggerpool.com/',

            // HTTP mining endpoint
            HttpHost: 'http://dbix-us01.daggerpool.com',
            HttpPort: 7777,            

            // Stratum mining endpoint
            StratumHost: 'dbix-us01.daggerpool.com',
            StratumPort: 7007,

            StratumHost1: 'dbix-uk01.daggerpool.com',
            StratumPort1: 7007,
            
            NicehashHost: 'dbix-us01.daggerpool.com',
            NicehashPost: 7079,

            // Fee and payout details
            PoolFee: '0.5%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',
            
            //Current and Localization
            Currency: 'USD',
            CoinName: 'Dubai Coin',
            CoinShortName: 'DBIX',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'dbix.daggerpool.com',
            
            //Coin Bases Settings
            ChainAddress : 'http://dbixscan.io/addr/',
	    TransactionAddress : 'http://dbixscan.io/tx/',
            UncleAddress : 'http://dbixscan.io/uncle/',
            BlockAddress : 'http://dbixscan.io/block/',
            
            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',
            

            // For network hashrate (change for your favourite fork)
            BlockTime: 90


        },
        MUSIC:  {
            // API host and port
            ApiUrl: '//music.daggerpool.com/',

            // HTTP mining endpoint
            HttpHost: 'http://mc-us01.daggerpool.com',
            HttpPort: 6666,            

            // Stratum mining endpoint
            StratumHost: 'mc-us01.daggerpool.com',
            StratumPort: 6006,

            StratumHost1: 'mc-uk01.daggerpool.com',
            StratumPort1: 6006,
            
            NicehashHost: 'dbix-us01.daggerpool.com',
            NicehashPost: 6069,

            // Fee and payout details
            PoolFee: '0.5%',
            PayoutThreshold: '10',
            ShareDifficulty: '4000000000',
            
            //Current and Localization
            Currency: 'USD',
            CoinName: 'Music Coin',
            CoinShortName: 'MUSIC',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'music.daggerpool.com',
            
            //Coin Bases Settings
            ChainAddress : 'https://orbiter.musicoin.org/addr/',
	    TransactionAddress : 'https://orbiter.musicoin.org/tx/',
            UncleAddress : 'https://orbiter.musicoin.org/uncle/',
            BlockAddress : 'https://orbiter.musicoin.org/block/',
            
            
            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',
            

            // For network hashrate (change for your favourite fork)
            BlockTime: 14.4


        },
        ETH: {
            // API host and port
            ApiUrl: '//eth.daggerpool.com/',

            // HTTP mining endpoint
            HttpHost: 'http://eth-us01.daggerpool.com',
            HttpPort: 8888,            

            // Stratum mining endpoint
            StratumHost: 'eth-us01.daggerpool.com',
            StratumPort: 8008,

            StratumHost1: 'eth-uk01.daggerpool.com',
            StratumPort1: 8008,
            
            NicehashHost: 'eth-us01.daggerpool.com',
            NicehashPost: 8089,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.1',
            ShareDifficulty: '4000000000',
            
            //Current and Localization
            Currency: 'USD',
            CoinName: 'Ethereum',
            CoinShortName: 'ETH',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'eth.daggerpool.com',
            
            //Coin Bases Settings
            ChainAddress : 'https://etherscan.io/address/',
	    TransactionAddress : 'https://etherscan.io/tx/',
            UncleAddress : 'https://etherscan.io/uncle/',
            BlockAddress : 'https://etherscan.io/block/',
            
            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',
            

            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        }
             


        }
    };

    if (environment === 'development') {
        /* Override ApiUrl just for development, while you are customizing
         frontend markup and css theme on your workstation.
         */
        ENV.APP.EXP.ApiUrl = 'https://exp.daggerpool.com/'
        ENV.APP.UBIQ.ApiUrl = 'https://ubiq.daggerpool.com/'
        ENV.APP.DBIX.ApiUrl = 'https://dbix.daggerpool.com/'
        ENV.APP.MUSIC.ApiUrl = 'https://music.daggerpool.com/'
        ENV.APP.ETH.ApiUrl = 'https://eth.daggerpool.com/'
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