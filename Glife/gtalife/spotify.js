const Discord = require('discord.js');
client = new Discord.Client();

client.login('NzkyNTUxNTQyODc5NjgyNTcw.X-fXJA.mWJ6lro8hWBrBnIOMgERQBf_3hg');

client.on('ready', () => {
  client.user.setActivity("Spotify");
  console.log("Spotify est allumer");
});

//Racine 

client.on("message", async message => {
  if (message.content.startsWith('+vc'))
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join()
      play('audio.spotify.com')
    }
});

client.on("message", async message => {
  if (message.content === 'crée un compte') {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;


    let embed = new Discord.MessageEmbed()

      .setColor('GREEN')
      .setTitle("Spotify")
      .setDescription("**Félicitation vous venez de crée un compte Spotify**")
      .setImage("https://tse1.mm.bing.net/th?id=OIP.yZzC09nQJjGfWGi1deptpgHaCO&pid=Api&P=0&w=572&h=172")
    message.channel.send(embed);
  }

});

// SPOTIFY MUSIQUE

client.on("message", async message => {
  if (message.content.startsWith("/crystal")) {
    message.channel.send('https://soundcloud.com/alex-fdp-309295464/le-r-crystal')
  }
});

client.on("message", async message => {
  if (message.content.startsWith("/motel")) {
    message.channel.send('https://soundcloud.com/alex-fdp-309295464/le-r-motel')
  }
});

client.on("message", async message => {
  if (message.content.startsWith("/flex")) {
    message.channel.send('https://soundcloud.com/alex-fdp-309295464/biggy-ft-le-r-flex')
  }
});

client.on("message", async message => {
  if (message.content.startsWith("/doliprane")) {
    message.channel.send('**ZT**                                                                   https://soundcloud.com/alex-fdp-309295464/doliprane')
  }
});






//SPOTIFY OF RHE SITE 

client.on("message", async message => {
  console.log("message")
});

//site : 