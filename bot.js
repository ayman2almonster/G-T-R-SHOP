const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", async () => {
            var guild = client.guilds.get('540626945679949855');

          setInterval(() => {
          if(!guild) return;
         var nameon=" Online ♪ :0" ; // يحب ان تبقي الصفر في الاسم المهم يكون موجود
          var channel1 = guild.channels.get("اي دي الروم يلي يظهر حالات الاعضاء النشطين");
           channel1.setName(`${nameon.replace(0, guild.members.filter(s => s.presence.status != 'offline').size)}`).catch(err => {
              if(err) return;
            });
          },500);
         var nameoff=" Offline ♪ :0" ; // يحب ان تبقي الصفر في الاسم المهم يكون موجود
          var channel2 = guild.channels.get("اي دي الروم يلي يظهر حالات الاعضاء الاوف");
           channel2 .setName(`${nameoff.replace(0, guild.members.filter(s => s.presence.status == 'offline').size)}`).catch(err => {
              if(err) return;
            });
          },500);
         var members=" Members♪ :0" ; // يحب ان تبقي الصفر في الاسم المهم يكون موجود
          var channel3 = guild.channels.get("600653680882221068");
           channel3 .setName(`${members.replace(0, guild.memberCount}`).catch(err => {
              if(err) return;
            });
          },500);

      
       
      });

const reps = JSON.parse(fs.readFileSync("./reps.json","utf8"));
client.on("message", msg => {
      moment.locale('ar_ly');
    let mention = msg.mentions.users.first();
    if(!msg.guild) return;
    if(msg.author.bot) return;
    if(!reps[msg.author.id]) reps[msg.author.id] = {
        rep: 0,
        reps: 1
    }
        fs.writeFile("./reps.json", JSON.stringify(reps), function(e) {
            if (e) throw e;
        })
    if(msg.content.startsWith(prefix + "rep")){
        if(!mention) return msg.channel.send(`**عليك ان تمنشن الشخص اولا**`)
        if(mention.id === msg.author.id) return msg.reply(`**من جد؟؟**`)
     
           if(!reps[mention.id]) reps[mention.id] = {
        rep: 0,
        reps: 1
    }
   
     if(reps[msg.author.id].reps != moment().format('L')) {
 
       reps[msg.author.id].reps = moment().format('L');
          reps[mention.id].rep += 1
        msg.reply(`**
 تم اعطاْء اعجاب لـ
 
${emote3}-User \`${mention.username}\`
 
**`)
let emb = new Discord.RichEmbed()
 .setColor('#36393f')
          .setAuthor(mention.tag,mention.avatarURL)
          .setTitle(`**تم اعطأك اعجاب **`)
          .addField(`**اسم الذي قام بأعطأك اعجاب**`, `\`${msg.author.username}\``)
          .addField(`**ايدي الذي قام بأعطأك اعجاب **`, `\`${msg.author.id}\``)
          .addField(`**سيرفر الذي تم اعجابك به **`,`\`${msg.guild.name}\``)
          mention.send(emb);
         
             fs.writeFile("./reps.json", JSON.stringify(reps), function(e) {
            if (e) throw e;
        })
    }else {
       msg.reply(`**
لأ تستطيع ان تعطي اعجاب
 
-User \`${mention.username}\`
 
 
-Time يمكنك ان تعطي اعجاب \`${moment().endOf('day').fromNow()}\` **`)
   
    } 
       }
});
}

 client.on('message', (message) => {
    if (message.content.startsWith('$kick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
});

client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني ابند شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**لقد تم اعطاء الباند الي شخص بنجاح** ✅");
}
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {  ///الامر
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **: عدد الاعضاء المستلمين**`); 
 message.delete(); 
};     
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","●MEMBERS●"));
    });


client.on('message', message => { //iTzMurtaja#8951
if(message.content.startsWith(prefix + "onbc")) { //iTzMurtaja#8951
if(message.author.bot) return; //iTzMurtaja#8951
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`**✖｜You need premessions.`); //iTzMurtaja#8951
var args = message.content.split(" ").slice(1).join(" ") //iTzMurtaja#8951
message.channel.send(`Done.`) //iTzMurtaja#8951
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => { //iTzMurtaja#8951
    m.send(`${args}`) //iTzMurtaja#8951
  }); //iTzMurtaja#8951
}}); //iTzMurtaja#8951

client.on('message', message => { //iTzMurtaja#8951
if(message.content.startsWith(prefix + "offbc")) { //iTzMurtaja#8951
if(message.author.bot) return; //iTzMurtaja#8951
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`**✖｜You need premessions.`); //iTzMurtaja#8951
var args = message.content.split(" ").slice(1).join(" ") //iTzMurtaja#8951
message.channel.send(`Done.`) //iTzMurtaja#8951
message.guild.members.filter(m => m.presence.status === 'offline').forEach(m => { //iTzMurtaja#8951
    m.send(`${args}`) //iTzMurtaja#8951
  }); //iTzMurtaja#8951
}}); //iTzMurtaja#8951

client.on("message", message => {  //iTzMurtaja
    if(message.content.startsWith(prefix + "emoji")) { //iTzMurtaja
        if(message.author.bot) return; //iTzMurtaja
        var emojiid =  message.content.split(" ").slice(1).join(" ") //iTzMurtaja
        console.log(emojiid) //iTzMurtaja
        if(emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid)) return  message.channel.send(`- Usage
${prefix}emoji <EmojiID>`); //iTzMurtaja
        else    //iTzMurtaja
        message.channel.send("This is the emoji that you requested:-",
          { //iTzMurtaja
            files: [`https://cdn.discordapp.com/emojis/${emojiid}.png`]
          }) //iTzMurtaja
        }  //iTzMurtaja
}) //iTzMurtaja

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Soon | Vettel`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});


client.login(process.env.BOT_TOKEN);
