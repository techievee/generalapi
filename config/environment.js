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
            HttpPort: 40004,

            // Stratum mining endpoint
            StratumHost: 'exp01.miningpoolindia.com',
            StratumPort: 40014,

            StratumHost1: 'exp02.miningpoolindia.com',
            StratumPort1: 40014,

            StratumHost2: 'exp-nh.miningpoolindia.com',
            StratumPort2: 40024,

            // Fee and payout details
            PoolFee: '0.9%',
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
            HttpPort: 40005,

            // Stratum mining endpoint
            StratumHost: 'ubiq01.miningpoolindia.com',
            StratumPort: 40015,

            StratumHost1: 'ubiq01.miningpoolindia.com',
            StratumPort1: 40015,

            StratumHost2: 'ubiq-nh.miningpoolindia.com',
            StratumPort2: 40024,

            // Fee and payout details
            PoolFee: '0.9%',
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
            HttpPort: 40007,

            // Stratum mining endpoint
            StratumHost: 'dbix01.miningpoolindia.com',
            StratumPort: 40017,

            StratumHost1: 'dbix02.miningpoolindia.com',
            StratumPort1: 40017,


            NicehashHost: 'exp01.miningpoolindia.com',
            NicehashPost: 40027,

            // Fee and payout details
            PoolFee: '0.9%',
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
            HttpPort: 40003,

            // Stratum mining endpoint
            StratumHost: 'mc01.miningpoolindia.com',
            StratumPort: 40013,

            StratumHost1: 'mc02.miningpoolindia.com',
            StratumPort1: 40013,


            NicehashHost: 'mc-nh.miningpoolindia.com',
            NicehashPost: 40023,

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
            HttpPort: 40001,

            // Stratum mining endpoint
            StratumHost: 'eth01.miningpoolindia.com',
            StratumPort: 40011,

            StratumHost1: 'eth02.miningpoolindia.com',
            StratumPort1: 40011,


            NicehashHost: 'eth-nh.miningpoolindia.com',
            NicehashPost: 40021,

            // Fee and payout details
            PoolFee: '0.99%',
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


        },

        ETC: {
            // API host and port
            ApiUrl: '//etc.miningpoolindia.com/',

            // HTTP mining endpoint
            HttpHost: 'http://etc01.miningpoolindia.com',
            HttpPort: 40002,

            // Stratum mining endpoint
            StratumHost: 'etc01.miningpoolindia.com',
            StratumPort: 9009,

            StratumHost1: 'etc02.miningpoolindia.com',
            StratumPort1: 9009,


            NicehashHost: 'etc-nh.miningpoolindia.com',
            NicehashPost: 40022,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'INR',
            CoinName: 'Ethereum Classic',
            CoinShortName: 'ETC',
            PaymentText: 'Every 2 hours',
            SupportMail: 'helpdesk@miningpoolindia.com',
            SupportHelpdesk: 'http://helpdesk.miningpoolindia.com',
            WebsiteName: 'etc.miningpoolindia.com',

            //Coin Bases Settings
            ChainAddress : 'https://gastracker.io/addr/',
	    TransactionAddress : 'https://gastracker.io/tx/',
            UncleAddress : 'https://gastracker.io/uncle/',
            BlockAddress : 'https://gastracker.io/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'miningpoolindia',


            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        },


        SOIL: {
            // API host and port
            ApiUrl: '//soil.miningpoolindia.com/',

            // HTTP mining endpoint
            HttpHost: 'http://soil01.miningpoolindia.com',
            HttpPort: 40008,

            // Stratum mining endpoint
            StratumHost: 'soil01.miningpoolindia.com',
            StratumPort: 40018,

            StratumHost1: 'soil02.miningpoolindia.com',
            StratumPort1: 40018,


            NicehashHost: 'soil-nh.miningpoolindia.com',
            NicehashPost: 40028,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'INR',
            CoinName: 'SOILcoin',
            CoinShortName: 'SOIL',
            PaymentText: 'Every 2 hours',
            SupportMail: 'helpdesk@miningpoolindia.com',
            SupportHelpdesk: 'http://helpdesk.miningpoolindia.com',
            WebsiteName: 'soil.miningpoolindia.com',

            //Coin Bases Settings
            ChainAddress : 'http://178.62.133.174:9001/#/address/',
	    TransactionAddress : 'http://178.62.133.174:9001/#/tx/',
            UncleAddress : 'http://178.62.133.174:9001/#/uncle/',
            BlockAddress : 'http://178.62.133.174:9001/#/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'miningpoolindia',


            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        },

        ELE: {
            // API host and port
            ApiUrl: '//ele.miningpoolindia.com/',

            // HTTP mining endpoint
            HttpHost: 'http://ele01.miningpoolindia.com',
            HttpPort: 40009,

            // Stratum mining endpoint
            StratumHost: 'ele01.miningpoolindia.com',
            StratumPort: 40019,

            StratumHost1: 'ele02.miningpoolindia.com',
            StratumPort1: 40019,


            NicehashHost: 'ele-nh.miningpoolindia.com',
            NicehashPost: 40029,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'INR',
            CoinName: 'Elementrem',
            CoinShortName: 'ELE',
            PaymentText: 'Every 2 hours',
            SupportMail: 'helpdesk@miningpoolindia.com',
            SupportHelpdesk: 'http://helpdesk.miningpoolindia.com',
            WebsiteName: 'ele.miningpoolindia.com',

            //Coin Bases Settings
            ChainAddress : 'http://www.elementrem.net/address/',
	    TransactionAddress : 'http://www.elementrem.net/tx/',
            UncleAddress : 'http://www.elementrem.net/uncle/',
            BlockAddress : 'http://www.elementrem.net/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'miningpoolindia',


            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        },

        PIRL: {
             // API host and port
            ApiUrl: '//pirl.miningpoolindia.com/',

            // HTTP mining endpoint
            HttpHost: 'http://pirl01.miningpoolindia.com',
            HttpPort: 40006,

            // Stratum mining endpoint
            StratumHost: 'pirl01.miningpoolindia.com',
            StratumPort: 40016,

            StratumHost1: 'pirl02.miningpoolindia.com',
            StratumPort1: 40016,


            NicehashHost: 'pirl-nh.miningpoolindia.com',
            NicehashPost: 40026,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'INR',
            CoinName: 'PIRL',
            CoinShortName: 'PIRL',
            PaymentText: 'Every 2 hours',
            SupportMail: 'helpdesk@miningpoolindia.com',
            SupportHelpdesk: 'http://helpdesk.miningpoolindia.com',
            WebsiteName: 'pirl.miningpoolindia.com',

            //Coin Bases Settings
            ChainAddress : 'https://explorer.pirl.io/#/address/',
	    TransactionAddress : 'https://explorer.pirl.io/#/tx/',
            UncleAddress : 'https://explorer.pirl.io/#/uncle/',
            BlockAddress : 'https://explorer.pirl.io/#/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'miningpoolindia',


            // For network hashrate (change for your favourite fork)
            BlockTime: 13


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
        ENV.APP.ETC.ApiUrl = 'https://etc.miningpoolindia.com/'
        ENV.APP.SOIL.ApiUrl = 'https://soil.miningpoolindia.com/'
        ENV.APP.ELE.ApiUrl = 'https://ele.miningpoolindia.com/'
        ENV.APP.PIRL.ApiUrl = 'https://pirl.miningpoolindia.com/'
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
