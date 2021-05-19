const Discord = require('discord.js');
const { endianness } = require('os');
client = new Discord.Client();
client.login('Nzg0MDg2MDU2OTI3NDk0MTY0.X8kLCw.IgOV4zyrRWcGVrdzBMajJTUWA2U');

client.on('ready', () => {
  client.user.setLook("Finger");
  console.log("Finger est allumer");
});


//EMBED

client.on("message", async message => {
  if (message.content.startsWith("/wsh")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;


    let embed = new Discord.MessageEmbed()


      .setColor('BLACK')
      .setTitle("**Liste**")
      .setDescription("__**Serveur ON !**__")
      .addField("**Finger RP**", "🟢 Ok", true)
      .addField("**Finger GF**", "🟢 Ok", true)
      .addField("**Cash Money**", "🟢 Ok", true)
      .addField("**LSDS**", "🟢 Ok", true)
      .setImage("https://images-ext-1.discordapp.net/external/OVpNg4FICHEkqVXFs2Ou9USSWV06c0YwiX5T3wwBCGA/https/imgur.com/6tDIx4H.png?width=717&height=487%22")
      .setFooter("Finger")
      .miniature("https://images-ext-1.discordapp.net/external/OVpNg4FICHEkqVXFs2Ou9USSWV06c0YwiX5T3wwBCGA/https/imgur.com/6tDIx4H.png?width=717&height=487%22")

    message.channel.send(embed);
  }
});

//avatar
client.on('message', message => {
  if (message.content.startsWith("F.avatar")) {
    message.channel.send('**Voici votre avatar**')

    message.reply(message.author.displayAvatarURL());
  }
});


// Présentation 

client.on("message", async message => {
  if (message.content.startsWith("/rentre")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

    let embed = new Discord.MessageEmbed()

      .setColor('BLACK')
      .setTitle("**🌴 Bienvenue sur FINGER 🌴**")
      .setDescription("**Pour rejoindre FINGER tout se passe en entretien vocal ! Il suffit d'attendre une annonce d'Ouverture des Withliste dans le salon Annonce WL La date et l'heure d'ouverture seront précisés**")
      .addField("**Il faudra :**", false)
      .addField("**- Avoir pris connaissance des règle**", false)
      .addField("**- Avoir préparé un Personnage (Background)**", false)
      .addField("**- Avoir 15 ans ou plus**", false)
      .addField("**- Avoir un Nom & Prénom RP**", false)
      .addField("**- Avoir un bon micro**", false)
      .addField("**- Avoir une bonne connexion** ", true)
      .setFooter("A bientôt sur FINGER ! 🦅")
    message.channel.send(embed);

  }
});

//CAPTURE 


client.on("message", async message => {
  if (message.content.startsWith("/plage")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;


    let embed = new Discord.MessageEmbed()


      .setColor('BLACK')
      .setTitle("**Zone De Capture**")
      .setDescription("**Cette Zone appartient au ZT**")
      .setImage("https://medias.liberation.fr/photo/588739-arton15504.jpg?modified_at=1352800500&width=960")
      .setMiniature("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwySXAyzHEoP0DYJxEfnoXZjpkNVc0Fy92Rg&usqp=CAU")
      .addField("**Clétus**", "**Pour avoir  la Zone vous devez tuer tous les ennemis**")
    message.channel.send(embed);

  }
});

client.on("message", async message => {
  if (message.content.startsWith("/foraine")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

    let embed = new Discord.MessageEmbed()

      .setColor('BLACK')
      .setTitle("**Zone De Capture**")
      .setDescription("**Cette Zone appartient au ZT**")
      .setImage("https://www.grandtheftauto5.fr/images/analyse-trailer-pc-ps4-xbox-one-20.png")
    message.channel.send(embed);
  }
});

client.on("message", async message => {
  if (message.content.startsWith("/cimetier")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

    let embed = new Discord.MessageEmbed()

      .setColor('BLACK')
      .setTitle("**Zone De Capture**")
      .setDescription("**Cette Zone appartient a personne**")
      .setImage("https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1394579196.jpg")
    message.channel.send(embed);
  }
});


/// dossier

client.on("message", async message => {
  if (message.content.startsWith("/dossier")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

    let embed = new Discord.MessageEmbed()

      .setColor('#EEEE')
      .setTitle("**+dossier en MP du Bot**")
      .setDescription("**Pour avoir tous les dossier du serveur**")

    message.channel.send(embed);
  }
});

// Dorgue en ville

client.on("message", async message => {
  if (message.content.startsWith("!drogue")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

    let embed = new Discord.MessageEmbed()

      .setColor('BLACK')
      .setTitle("**Les Différents types de drogues**")
      .setDescription("****")

    message.channel.send(embed);

  }
});

//Panel de recrutement

client.on("message", async message => {
  if (message.content.startsWith("/panel")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

    let embed = new Discord.MessageEmbed()

      .setColor('#663300')
      .setTitle("**Panel de Recrutement**")
      .setDescription("Une nouvelle session de recrutement a été ajoutée sur le panel. Connectez-vous dans le salon vocal pour vous inscrire.")
      .addField("**Date et heure de début :**", "15/02/2021 à 15:00", true)
      .addField("**Limite d'inscriptions**", "15", true)
    message.channel.send(embed);

  }
});

client.on("message", async message => {
  if (message.content.startsWith("/session")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

    let embed = new Discord.MessageEmbed()

      .setColor('#663300')
      .setTitle("__**Session**__")
      .setDescription("**Une Session rolpley vien d'etre programmer**")
      .addField("**Date et heure :**", "15/02/2021 à 15:00", true)
      .setFooter("'Merci de réagir au émojie ci-dessus'")

    message.channel.send(embed);

  }
});

//commande HELP

client.on("message", async message => {
  if (message.content.startsWith("/Zone Capture")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

    let embed = new Discord.MessageEmbed()

      .setColor('#663300')
      .setTitle("__**Zone Capture**__")
      .setDescription("**Voici les Différent touche pour capturer les Zone**")
      .addField("```/plage```", "**Pour capturer la Zone du Masque**", true)
      .addField("```/aréna```", "**Pour capturer toute la Zone de l'aréna**", true)
      .addField("```/cimetier```", "**Pour capturer le Cimitier**", true)
      .addField("```/foraine```", "**Pour capturer la fete foraine**", true)
      .setFooter("Merci de bien lire le Règlment de des Zone Capture en fesant +ZC dans les mp du Bot discord")

    message.channel.send(embed);

  }
});


//Pong

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply(' **🏓**')
  }
})

// CONSOLE LOG //

client.on('messageDelete', message => {
  console.log(`Un Message a été supprimer par ${message.author.tag}.`);  //Message supprimer
});

client.on('guildBanAdd', async (guild, user) => {
  console.log(`${user.tag} c'est fais bannir du serveur :${guild.name}.`); //Personne Ban

});


// Nombre de personne dans le serveur 

client.on("message", async message => {
  if (message.content.startsWith("/nb")) {
    let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
    let totalmembers = message.guild.members.cache.size;
    let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

    let embed = new Discord.MessageEmbed()

      .setColor('#663300')
      .setTitle("__**Nombre de Joueur**__")
      .setDescription("**/help pour avoir plus de commande**")
      .addField("```/support```", "**Pour conctacter le support**", true)
      .setFooter("Merci d'avoir utiliser le bot discord")

    message.channel.send(embed);

  }
});


// Meths = Orga 
// Cocaine = Latino
// Weed = Afro 
// Groupe évent pour la Kétamine 

// test 

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});