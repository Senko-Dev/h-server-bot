const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

process.on("unhandledRejection", error => {
  console.error(error);
});

client.on("guildMemberAdd", member => {
  member.setNickname("h");
  member.role.add("736289092307910768");
});

client.on("ready", () => {
  client.user.setActivity("h");
  console.log("h");
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content !== "h" && message.channel.id !== "736294939968929844") {
    message.delete({ timeout: 2000 }).then(() => {
      message
        .reply(
          `you G spy. You think you can deefat me in my owne realm? You think you can rebel aqaisnt my authority? You dare come into my house and spill G all my over my H. You thouqht you were safe behind that G of yours? I will take my H an destroy you. I did want war. It is illeqal to say anythinq other than \`h\` in this server.`
        )
        .then(() => {
          message.delete({ timeout: 6000 });
        });
    });
  }
  if(message.content !== 'hs' && message.channel.id === '736297919958876211') {
        message.delete({ timeout: 2000 }).then(() => {
      message
        .reply(
          `you can only say \`hs\` in this channel.`
        )
        .then(() => {
          message.delete({ timeout: 6000 });
        });
    });
  }
  if(message.content === 'hs' && message.channel.id === '736297919958876211') {
    message.reply('This is)
  }
});
client.login(process.env.TOKEN);
