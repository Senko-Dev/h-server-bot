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
  if (message.content !== "h" && message.channel.id !== '736300220681551952') {
    message.delete({ timeout: 2000 }).then(() => {
      message
        .reply(
          `you G spy. You think you can deefat me in my own realm? You think you can rebel aqaisnt my authority? You dare come into my house and spill G all my over my H. You thouqht you were safe behind that G of yours? I will take my H and destroy you. I did want war. It is illeqal to say anythinq other than \`h\` in this server.`
        )
        .then(() => {
          message.delete({ timeout: 6000 });
        });
    });
  }
  if (message.channel.id === "736303776624934972") {
    if (
      message.content !== "hs"
    ) {
      message.delete({ timeout: 2000 }).then(() => {
        message.reply(`you can only say \`hs\` in this channel.`).then(() => {
          message.delete({ timeout: 6000 });
        });
      });  
    }
    if (
      message.content === "hs"
    ) {
      message.reply("This isn't made yet.");
    }
  }
});
client.login(process.env.TOKEN);
