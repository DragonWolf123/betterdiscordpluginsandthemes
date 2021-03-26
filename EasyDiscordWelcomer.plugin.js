//META{"name":"EasyDiscordWelcomer","source":"https://github.com/DragonWolf123/betterdiscordpluginsandthemes"}*//
module.exports = class DragonCore {
    getName() {
        return "EasyDiscordWelcomer";
    }
    getDescription() {
        return "Easy Discord Welcomer for Better Discord";
    }
    getVersion() {
        return "1.0.0";
    }
    getAuthor() {
        return "DragonWolf";
    }
    stop() {
    	alert("Stopped!");
    }
    start() {
    	alert("Hi! Welcome to EasyDiscordWelcomer! You can edit this text in plugin. Just click above Open plugin folder and edit EasyDiscordWelcomer.plugin in notepad for example. Good luck!");
    }
}
