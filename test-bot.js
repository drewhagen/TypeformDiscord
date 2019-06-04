//#region requiring packages, plus an external file, & load them into variables
    var Discord = require('discord.io'); // About: https://www`.npmjs.com/package/discord.io
    var logger = require('winston'); // logging library. About: https://github.com/winstonjs/winston/tree/2.x
    var auth = require('./auth.json');
//#endregion

//#region Configuring logger settings
    // (details on how to configure linked in last region above, in Winston's "About")
    logger.remove(logger.transports.Console);
    logger.add(new logger.transports.Console, {
        colorize: true
    });
    logger.level = 'debug';
//#endregion

//#region Initialize and connect Discord Bot
    var bot = new Discord.Client({
        token: auth.token,
        autorun: true
    });

    bot.on('ready', function (evt) {
        logger.info('Connected');
        logger.info('Logged in as: ');
        logger.info(bot.username + ' - (' + bot.id + ')');
    });
//#endregion

//#region bot responsing to user input
    bot.on('message', function (user, userID, channelID, message, evt) {
        // Our bot needs to know if it will execute a command
        // It will listen for messages that will start with `!`
        if (message.substring(0, 1) == '!') {
            var args = message.substring(1).split(' ');
            var cmd = args[0];
        
            args = args.splice(1);
            switch(cmd) {
                // !marco
                case 'marco':
                    bot.sendMessage({
                        to: channelID,
                        message: 'Polo!'
                    });
                break;
                //#region realstic commands to work on
                    // !complaints
                    case 'complaints':
                        bot.sendMessage({
                            to: channelID,
                            message: 'List complaints?'
                        });
                    break;
                    // !banAppeals
                    case 'banAppeals':
                        bot.sendMessage({
                            to: channelID,
                            message: 'List banAppeals?'
                        });
                    break;
                    // !modApps
                    case 'modApps':
                        bot.sendMessage({
                            to: channelID,
                            message: 'List modApps?'
                        });
                    break;
                    // !mentorApps
                    case 'mentorApps':
                        bot.sendMessage({
                            to: channelID,
                            message: 'List mentorApps?'
                        });
                    break;
                    // !supportApps
                    case 'supportApps':
                        bot.sendMessage({
                            to: channelID,
                            message: 'List supportApps?'
                        });
                    break;
                //#endregion
                // Just add any case commands if you want to..
            }
        }
    });
//#endregion
