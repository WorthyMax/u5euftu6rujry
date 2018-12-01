const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NDcwNTYwMTgxODAyMTA2ODgx.DnmAyA.brY86oquFtDDzxDqmgKXqztSM3k')

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('by worthyomar');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " {Splash} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});



client.on('ready', () => {
  client.user.setGame(` -help || WorthyServer`,'https://www.twitch.tv/v5bz');
});

client.on('message', eyad => {
  if (eyad.content.startsWith('-mute')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**You don't have permessions** |  ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`Mention someone` ');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
He got muted
Because of : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")

client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
He got muted
Because of : <@${eyad.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
})

client.on('message', eyad => {
  if (eyad.content.startsWith('-unmute')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**You don't have permession** | ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`Mention someone `');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         SEND_MESSAGES: true
         })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
Is unmuted
Because of : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")

client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
Is unmuted
Because of : <@${eyad.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
})

client.on('message', function(msg) {
    const prefix = '-'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  *${msg.guild.name}*`)
      .addField('** Server Type**',`[** __${msg.guild.region}__ **]`,true)
      .addField('** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('**__ Member__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('**__ Online Members__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('**__ Type Chat__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('**__ Voice Chat__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('**__ Owner__**',`**${msg.guild.owner}**`,true)
      .addField('**__ Server ID__**',`**${msg.guild.id}**`,true)
      .addField('**__ Server Created In__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  
  client.on('message', message => {
   if(message.content.startsWith("-"+ "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` You Have Invited :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});

client.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
	const prefix = '-'
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("447121312960479242")) return message.reply("**# You cannot ban me!**");
       if(toBan === message.member.guild.owner) return message.reply("**# You cannot ban the owner of the server!**");
       if(toBan.bannable) return message.reply("**# - I cannot ban someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toBan.id === message.author.id) return message.reply("**# You cannot ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been banned from a server!")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Banned By:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );
       
   }
});
client.on('message' , message => {
    var prefix = "-";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`You Dont Have`**');
        if(!user) return  message.channel.send(`**# - Mention a user!**`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});

client.on('message', message => {
   if (message.content.startsWith("-id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("-avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


var prefix = "-"
client.on('message', message => {
  if (message.author.shyboy_05) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have a Permission to kick**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have a Permission to kick**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**Mention someone**");
  if(!reason) return message.reply ("**Type the reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I cant kick someone is higher than my role**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
})

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '⸢🙌ɯլƈ-լєƛɣє🙌⸥');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | Have A Great Time' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| YOU Are Memeber Number',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' Server', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`اHave A Great Life ✋:skin-tone-1: 😔`)
        .setDescription(`GoodBye ✋:skin-tone-1: 😔 `)
        .addField('👤   Remaing',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== We Wish You Are Happy ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '⸢🙌ɯլƈ-լєƛɣє🙌⸥')
    if (!channel) return;
    channel.send({embed : embed});
    })
	client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });
					client.on('message', message => {
	const prefix = '-'
  if(message.content.startsWith(prefix + "help")) {
    if(message.content.split(' ')[0] !== prefix + 'help') return;
    var leHeRo = new Discord.RichEmbed()
    .setColor('#257542')
.setDescription(`
Perfix {-}

	:heart:{Admin Command):heart:
	
	-mute
	-kick
	-unmute
	-ban
	-unban
	
	:smile:{Normal Comands}:smile:
	
	-id
	-avatar
	-server
	-invites
	-help
	-ping
	
	:slight_smile: {**Have Fun**}:slight_smile: 
`);
message.author.send(leHeRo).catch(e => {
  message.react('❎');
});
message.react('✅');
  }
});
