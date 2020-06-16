const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on("ready", () => {
  console.log('qwertyuiopasdfghjklzxcvbnm');
  Client.user.setActivity("People Send Letters And Numbers!", {type:"WATCHING"})
})

Client.on("message", () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  if(message.content.includes(numbers)) {
    message.delete();
  }
})
Client.login(process.env.TOKEN);