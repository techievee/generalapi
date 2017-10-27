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
            HttpHost: 'http://exp01.miningpoolindia.com',
            HttpPort: 9999,            

            // Stratum mining endpoint
            StratumHost: 'exp01.miningpoolindia.com',
            StratumPort: 9009,

            StratumHost1: 'exp02.miningpoolindia.com',
            StratumPort1: 9009,
            
            StratumHost2: 'exp01.miningpoolindia.com',
            StratumPort2: 9009,

            // Fee and payout details
            PoolFee: '0.5%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4G',
            
            //Current and Localization
            Currency: 'INR',
            CoinName: 'Expanse',
            CoinShortName: 'EXP',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@miningpoolindia.com',
            SupportHelpdesk: 'http://helpdesk.miningpoolindia.com',
            WebsiteName: 'exp.miningpoolindia.com',
            
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
            ApiUrl: '//ubiq.miningpoolindia.com/',

            // HTTP mining endpoint
            HttpHost: 'http://ubiq01.miningpoolindia.com',
            HttpPort: 8888,            

            // Stratum mining endpoint
            StratumHost: 'ubiq01.miningpoolindia.com',
            StratumPort: 8008,

            StratumHost1: 'ubiq01.miningpoolindia.com',
            StratumPort1: 8008,
            
            StratumHost2: 'ubiq02.miningpoolindia.com',
            StratumPort2: 8008,

            // Fee and payout details
            PoolFee: '0.5%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4G',
            
            //Current and Localization
            Currency: 'INR',
            CoinName: 'Ubiq',
            CoinShortName: 'UBIQ',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.miningpoolindia.com',
            WebsiteName: 'ubiq.miningpoolindia.com',
            
            //Coin Bases Settings
            ChainAddress : 'https://ubiqscan.io/en/address/',
            TransactionAddress : 'https://ubiqscan.io/en/tx/',
            UncleAddress : 'https://ubiqscan.io/en/uncle/',
            BlockAddress : 'https://ubiqscan.io/en/block/',
            
            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'miningpoolindia',
            

            // For network hashrate (change for your favourite fork)
            BlockTime: 14.4
             },
        DBIX: {
            // API host and port
            ApiUrl: '//dbix.miningpoolindia.com/',

            // HTTP mining endpoint
            HttpHost: 'http://dbix01.miningpoolindia.com',
            HttpPort: 7777,            

            // Stratum mining endpoint
            StratumHost: 'dbix01.miningpoolindia.com',
            StratumPort: 7007,

            StratumHost1: 'dbix02.miningpoolindia.com',
            StratumPort1: 7007,
            
            
            NicehashHost: 'exp01.miningpoolindia.com',
            NicehashPost: 7079,

            // Fee and payout details
            PoolFee: '0.5%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',
            
            //Current and Localization
            Currency: 'INR',
            CoinName: 'Dubai Coin',
            CoinShortName: 'DBIX',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@miningpoolindia.com',
            SupportHelpdesk: 'http://helpdesk.miningpoolindia.com',
            WebsiteName: 'dbix.miningpoolindia.com',
            
              //Coin Bases Settings
            ChainAddress : 'http://dbixscan.io/addr/',
	    TransactionAddress : 'http://dbixscan.io/tx/',
            UncleAddress : 'http://dbixscan.io/uncle/',
            BlockAddress : 'http://dbixscan.io/block/',
            
            
            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'miningpoolindia',
            

            // For network hashrate (change for your favourite fork)
            BlockTime: 90


        },
        MUSIC: {
            // API host and port
            ApiUrl: '//music.miningpoolindia.com/',

            // HTTP mining endpoint
            HttpHost: 'http://mc01.miningpoolindia.com',
            HttpPort: 6666,            

            // Stratum mining endpoint
            StratumHost: 'mc01.miningpoolindia.com',
            StratumPort: 6006,

            StratumHost1: 'mc02.miningpoolindia.com',
            StratumPort1: 6006,
            
            
            NicehashHost: 'mc01.miningpoolindia.com',
            NicehashPost: 6069,

            // Fee and payout details
            PoolFee: '0.5%',
            PayoutThreshold: '10',
            ShareDifficulty: '4000000000',
            
            //Current and Localization
            Currency: 'INR',
            CoinName: 'Music Coin',
            CoinShortName: 'MUSIC',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@miningpoolindia.com',
            SupportHelpdesk: 'http://helpdesk.miningpoolindia.com',
            WebsiteName: 'music.miningpoolindia.com',
            
              //Coin Bases Settings
            ChainAddress : 'https://orbiter.musicoin.org/addr/',
	    TransactionAddress : 'https://orbiter.musicoin.org/tx/',
            UncleAddress : 'https://orbiter.musicoin.org/uncle/',
            BlockAddress : 'https://orbiter.musicoin.org/block/',
            
            
            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'miningpoolindia',
            

            // For network hashrate (change for your favourite fork)
            BlockTime: 14.4


        },
        ETH: {
            // API host and port
            ApiUrl: '//eth.miningpoolindia.com/',

            // HTTP mining endpoint
            HttpHost: 'http://eth01.miningpoolindia.com',
            HttpPort: 8888,            

            // Stratum mining endpoint
            StratumHost: 'eth01.miningpoolindia.com',
            StratumPort: 8008,

            StratumHost1: 'eth02.miningpoolindia.com',
            StratumPort1: 8008,
            
            
            NicehashHost: 'eth01.miningpoolindia.com',
            NicehashPost: 8089,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.01',
            ShareDifficulty: '4000000000',
            
            //Current and Localization
            Currency: 'INR',
            CoinName: 'Ethereum',
            CoinShortName: 'ETH',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@miningpoolindia.com',
            SupportHelpdesk: 'http://helpdesk.miningpoolindia.com',
            WebsiteName: 'eth.miningpoolindia.com',
            
            //Coin Bases Settings
            ChainAddress : 'https://etherscan.io/address/',
	    TransactionAddress : 'https://etherscan.io/tx/',
            UncleAddress : 'https://etherscan.io/uncle/',
            BlockAddress : 'https://etherscan.io/block/',
            
            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'miningpoolindia',
            

            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        }
             


        }
    };

    if (environment === 'development') {
        /* Override ApiUrl just for development, while you are customizing
         frontend markup and css theme on your workstation.
         */
        ENV.APP.EXP.ApiUrl = 'https://exp.miningpoolindia.com/'
        ENV.APP.UBIQ.ApiUrl = 'https://ubiq.miningpoolindia.com/'
        ENV.APP.DBIX.ApiUrl = 'https://dbix.miningpoolindia.com/'
        ENV.APP.MUSIC.ApiUrl = 'https://music.miningpoolindia.com/'
        ENV.APP.ETH.ApiUrl = 'https://eth.miningpoolindia.com/'
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
