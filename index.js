  const Discord = require('discord.js');
  const client = new Discord.Client();

  process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
  });

  client.on('ready', () => {
    client.user.setActivity('h');
    console.log('h');
  })

  client.on('message', message => {
    if(message.content !== "h") {
      message.delete();
    }
  })
  client.login(process.env.TOKEN);