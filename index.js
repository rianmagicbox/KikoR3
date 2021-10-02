const { prefix, token } = require("./config.json");
const { Client, Intents, MessageEmbed } = require('discord.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

function contagemregressiva (message) {
  setTimeout(function() {
    message.channel.send("contagem regressiva").then(message => {
      setTimeout(function() {
        message.edit("10");
      }, 10000);
      setTimeout(function() {
        message.edit("9");
      }, 11000);
      setTimeout(function() {
        message.edit("8");
      }, 12000);
      setTimeout(function() {
        message.edit("7");
      }, 13000);
      setTimeout(function() {
        message.edit("6");
      }, 14000);
      setTimeout(function() {
        message.edit("5");
      }, 15000);
      setTimeout(function() {
        message.edit("4");
      }, 16000);
      setTimeout(function() {
        message.edit("3");
      }, 17000);
      setTimeout(function() {
        message.edit("2");
      }, 18000);
      setTimeout(function() {
        message.edit("1");
      }, 19000);
      setTimeout(function() {
        message.delete();
      }, 19000);
    })
  }, 1000);
}
function charada1 (message) {
  message.channel.send("Perguntaram para Maria quantos anos ela tem. Maria respondeu que em dois anos terá o dobro da idade que ela tinha há cinco anos. Quantos anos Maria tem?");
  contagemregressiva(message);
  setTimeout(function() {
    message.channel.send("Resposta: 12 anos.");
  }, 23000);
}
function charada2 (message) {
  message.channel.send("Alguns meses tem 31 dias, outros apenas 30 dias. Quantos meses tem 28 dias?");
  contagemregressiva(message);
  setTimeout(function() {
    message.channel.send("Resposta: Todos.");
  }, 23000);
}
function charada3 (message) {
  message.channel.send("O que é, o que é? Nunca volta, embora nunca tenha ido.");
  contagemregressiva(message);
  setTimeout(function() {
  message.channel.send("resposta: O passado.")
  }, 23000);
}

client.once("ready", () => {
  console.log("Ready!");
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  var gifs = ["https://magiagifs.com.br/wp-content/uploads/2019/08/gifs-anime22.gif","https://media2.giphy.com/media/f4V2mqvv0wT9m/giphy.gif?cid=ecf05e47vrzo2lrelin3gl5o0jou9vm3qkzhyq0rb07396xs&rid=giphy.gif&ct=g","https://i.pinimg.com/originals/cf/4d/98/cf4d9899601b696bbafc065eef9df166.gif","https://media3.giphy.com/media/139eZBmH1HTyRa/giphy.gif?cid=790b7611659b1bb0d222fefcd7e034180763387309b25154&rid=giphy.gif&ct=g","https://media4.giphy.com/media/RTVur5J0hr1dWiIdZf/giphy.gif?cid=790b761176895ae6854a9ab9c41b13579ff9b400dfac38bc&rid=giphy.gif&ct=g"];
  var randgif = gifs[Math.floor(Math.random() * gifs.length)];
  console.log(member);  
  const mensagem = new MessageEmbed()
  .setColor('##9400D3')
  .setTitle(`seja bem-vindo para o nosso sever ${member.user.username}`)
  .setAuthor('kikoR3')
  .addFields(
    { name: 'É com muita alegria e de braços abertos que hoje recebemos você! Esperamos que esta se torne a sua casa por muitos anos.', value: '\u200B' , inline: true  }
   )
  .setImage(randgif)
  .setTimestamp()
    guild.channels.cache.find(channel => channel.name === "seja-bem-vindo").send(mensagem);
    member.send(`seja bem-vindo ${member.user.username}`);
});

client.on('messageReactionAdd', async (reaction, user) => {
  try {
    await reaction.fetch();
    console.log(reaction.message);
    let rMember = reaction.message.guild.members.cache.find((m) => m.user.tag === user.tag);
    let role = reaction.message.guild.roles.cache.find((r) => r.name == '❖ ' + reaction.emoji.name);
    if (!role)
      return reaction.message.channel.send(
      "Which role do I give to this user, frog lover? :point_right: :point_left:"
    );
    if(rMember.roles.cache.has(role.id)) {
      console.log(`Yay, the author of the message has the role!`);
    } else {
      rMember.roles.add(role).catch(console.error);
    }
  } catch (error) {
    console.error('Something went wrong when fetching the message:', error);
    return;
  }

	console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
	console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '➥') {
    const playstationid = message.guild.emojis.cache?.find(emoji => emoji.name == 'playstation').id;
    const pcid = message.guild.emojis.cache?.find(emoji => emoji.name == 'pc').id;
    const nintendoid = message.guild.emojis.cache?.find(emoji => emoji.name == 'nintendo').id;
    const mobileid = message.guild.emojis.cache?.find(emoji => emoji.name == 'mobile').id;
    const xboxid = message.guild.emojis.cache?.find(emoji => emoji.name == 'xbox').id;
    
    message.react(`<:pc:${pcid}>`);
    message.react(`<:xbox:${xboxid}>`);
    message.react(`<:playstation:${playstationid}>`);
    message.react(`<:nintendo:${nintendoid}>`);
    message.react(`<:mobile:${mobileid}`);
    
  } else if (command === "rocket") {
    message.channel.send("league."); 
  } else if (command === "charada") {
    var charadas = [charada1, charada2, charada3]
    var randcharadas = charadas[Math.floor(Math.random() * charadas.length)];
    randcharadas(message);
  } else if (command === "memedeimagem") {
    message.channel.send("https://i.pinimg.com/originals/7b/4f/33/7b4f331d1244f89c1b9e8efbd021b49e.png");
  } else if (command === "bot") {
    message.channel.send("🥚 pó pó 🐔");
  } else if (command === "gif") {
    message.channel.send("https://c.tenor.com/2FBo3mMHE9kAAAAC/naruto-dance.gif");
  } else if (command === "ping") {
    message.channel.send("pong")
  } else if (command === "troll") {
    message.channel.send("chega mais perto amigo", {
      files: [{
        attachment: "./efeitossonoros/avisoimportante.mp3",
        name: "SPOILER_avisoimportante.mp3"
      }]
    });
  } else if (command === "piada") {
    message.channel.send("Você conhece a piada do pônei? - Pô nei eu")
  } else if (command === "ajuda") {
    const ajuda = new MessageEmbed()
    .setColor('#4feacb')
    .setTitle('ajuda')
    .setAuthor('kikoR3')
    .setDescription('use "!" para ativar um comando')
    .addFields(
      { name: 'comandos disponiveis:', value: '\u200B' , inline: true  })
    .addField('!rocket', 'responde "⁕⁕⁕⁕⁕⁕"', false)
    .addField('!charada', 'conta uma charada', false)
    .addField('!piada', 'conta uma piada', false)
    .addField('!troll', 'teste você mesmo', false)
    .addField('!bot', 'segredo', false)
    .addField('!server', 'informações do server', false)
    .addField('!ping', 'responde: pong', false)
    .addField('!memedeimagem', 'manda um meme de imagem', false)
    .addField('!gif', 'manda um gif de preconceito com os uchiras', false)   
    .setTimestamp()
    .setFooter('até mais!');

    message.channel.send(ajuda);
  } else if (message.content === `${prefix}server`) {
	    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } else if (command === 'delete') {
	  const numerodmenssagem = parseInt(args[0]); 

    if (isNaN(numerodmenssagem)) {
	    return message.reply('esse não parece ser um número válido.');
    } else if (numerodmenssagem < 2 || numerodmenssagem > 100) {
	    return message.reply('você precisa inserir um número entre 2 e 100.');
    }
  
    message.channel.bulkDelete(numerodmenssagem);
  }
});

client.login(token);
