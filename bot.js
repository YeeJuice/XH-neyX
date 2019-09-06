const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix ="!";

Client.on('ready', ()=>{
    console.log("Bot is online.");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;
    
    if(message.content.startsWith(prefix + "Hello")){
        message.channel.send("Hello, " + message.author + " What's good in the hood?");

    }

    if(message.content.startsWith(prefix + "Help")){
        message.channel.send("Check PM");
        message.author.send("Hello, this is my help command.");
    }


})


Client.login(process.env.BOT_TOKEN);
