const Discord = require("discord.js");
const client = new Discord.Client();

process.on("unhandledRejection", error => {
  console.error("Unhandled promise rejection:", error);
});

client.on("guildMemberAdd", member => {
  member.setNickname("h");
  member.role.add('736289092307910768');
  
});

client.on("ready", () => {
  client.user.setActivity("h");
  console.log("h");
});

client.on("message", message => {
  if (message.content !== "h" && message.author.bot) {
    message.delete();
    message.reply(
      `,you G spy. You think you can deefat me in my owne realm? You think you can rebel aqaisnt my authority? You dare come into my house and spill G all my over my H. You thouqht you were safe behind that G of yours? I will take my H an destroy you. I did want war. It is illeqal to say anythinq other than \`h\` in this server.`
    );
  }
});
client.login(process.env.TOKEN);
