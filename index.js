const { prefix, token } = require("./config.json");
const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
function contagemregressiva (message) {
  setTimeout(function() {
    message.channel.send("contagem regressiva");
  }, 9000);
  setTimeout(function() {
    message.channel.send("10");
  }, 10000);
  setTimeout(function() {
    message.channel.send("9");
  }, 11000);
  setTimeout(function() {
    message.channel.send("8");
  }, 12000);
  setTimeout(function() {
    message.channel.send("7");
  }, 13000);
  setTimeout(function() {
    message.channel.send("6");
  }, 14000);
  setTimeout(function() {
    message.channel.send("5");
  }, 15000);
  setTimeout(function() {
    message.channel.send("4");
  }, 16000);
  setTimeout(function() {
    message.channel.send("3");
  }, 17000);
  setTimeout(function() {
    message.channel.send("2");
  }, 18000);
  setTimeout(function() {
    message.channel.send("1");
  }, 19000);
}
function charada1 (message) {
  message.channel.send("Perguntaram para Maria quantos anos ela tem. Maria respondeu que em dois anos terá o dobro da idade que ela tinha há cinco anos. Quantos anos Maria tem?");
  contagemregressiva(message);
  setTimeout(function() {
    message.channel.send("Resposta: 12 anos.");
  }, 20000);
}
function charada2 (message) {
  message.channel.send("Alguns meses tem 31 dias, outros apenas 30 dias. Quantos meses tem 28 dias?");
  contagemregressiva(message);
  setTimeout(function() {
    message.channel.send("Resposta: Todos.");
  }, 20000);
}
function charada3 (message) {
  message.channel.send("O que é, o que é? Nunca volta, embora nunca tenha ido.");
  contagemregressiva(message);
  setTimeout(function() {
  message.channel.send("resposta: O passado.")
  }, 20000);
}

client.once("ready", () => {
  console.log("Ready!");
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  var gifs = ["https://magiagifs.com.br/wp-content/uploads/2019/08/gifs-anime22.gif","https://media2.giphy.com/media/f4V2mqvv0wT9m/giphy.gif?cid=ecf05e47vrzo2lrelin3gl5o0jou9vm3qkzhyq0rb07396xs&rid=giphy.gif&ct=g","https://i.pinimg.com/originals/cf/4d/98/cf4d9899601b696bbafc065eef9df166.gif","https://media3.giphy.com/media/139eZBmH1HTyRa/giphy.gif?cid=790b7611659b1bb0d222fefcd7e034180763387309b25154&rid=giphy.gif&ct=g","https://media4.giphy.com/media/RTVur5J0hr1dWiIdZf/giphy.gif?cid=790b761176895ae6854a9ab9c41b13579ff9b400dfac38bc&rid=giphy.gif&ct=g"];
  var randgif = gifs[Math.floor(Math.random() * gifs.length)];
  console.log(member);  
  const mensagem = new Discord.MessageEmbed()
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

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "rocket") {
    message.channel.send("league.");
    
  } else if (command === "cargo") {
    console.log(message);
    message.channel.send(message.author.username);
    let rMember =
    message.mentions.members.first() || // `.first()` is a function.
    message.guild.members.cache.find((m) => m.user.tag === message.author.username) ||
    message.guild.members;
    let role =
    message.guild.roles.cache.find((r) => r.name == args[0]) ||
    message.guild.roles.cache.find((r) => r.id == args[0]) ||
    message.mentions.roles.first();
    if (!role)
      return message.channel.send(
      "Which role do I give to this user, frog lover? :point_right: :point_left:"
    );
    if(message.member.roles.cache.has(role.id)) {
      console.log(`Yay, the author of the message has the role!`);
    } else {
      message.member.roles.add(role).catch(console.error);
    }
  } else if (command === "charada") {
    var charadas = [charada1, charada2, charada3]
    var randcharadas = charadas[Math.floor(Math.random() * charadas.length)];
    randcharadas(message);

  } else if (command === 'oi') {
    const xboxid = message.guild.emojis.cache?.find(emoji => emoji.name == 'xbox').id;

    message.react(`<:xbox:${xboxid}>`);
  } else if (command === "bot") {
    message.channel.send("🥚 pó pó 🐔");
  } else if (command === "gif") {
    message.channel.send("https://c.tenor.com/2FBo3mMHE9kAAAAC/naruto-dance.gif");
  } else if (command === "quehsão?") {
    const Data = new Date();
    message.channel.send(Data.toLocaleTimeString());
    
  } else if (command === "dunk") {
    message.channel.send("aqui esta o dunk❗ https://media.giphy.com/media/f7N5HZny5eWXqAmN27/giphy.gif");
  
  } else if (command === "ping") {
    message.channel.send("pong")
  } else if (command === "piada") {
    message.channel.send("Você conhece a piada do pônei? - Pô nei eu")
  } else if (command === "walldrag-dunk") {
    message.channel.send("aqui esta o walldrag-dunk❗ https://media.giphy.com/media/VDMahXlG9aP29oHE9i/giphy.gif")
  } else if (command === "walldrag") {
    message.channel.send("aqui esta o walldrag❗ https://media.giphy.com/media/efseqrFXskWmRZoZ56/giphy.gif ")
  } else if (command === "help") {
    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#4feacb')
    .setTitle('ajuda/help')
    .setAuthor('kikoR3')
    .setDescription('use "$" para ativar um comando')
    .addFields(
      { name: 'comandos disponiveis:', value: '\u200B' , inline: true  },
      { name: '\u200B', value: '\u200B' },
      { name: '$rocket', value: 'responde "⁕⁕⁕⁕⁕⁕"', inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: '$quehsão?', value: 'mostra a hora', inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: '$(fale uma destas jogadas a baixo)', value: '\u200B' , inline: true },
      { name: 'lista de jogadas:', value: '\u200B' , inline: false },
      { name: '\u200B', value: '\u200B' },
      { name: '1°', value: '$dunk', inline: true },
      { name: '2°', value: '$walldrag-dunk', inline: true },
      { name: '3°', value: '$walldrag', inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: '$help', value: 'mostra esta ajuda', inline: true },
     )
    .addField('mande suas jogadas para eu registrar no meu sever', 'obrigado', false)    
    .setTimestamp()
    .setFooter('tchal');

    message.channel.send(exampleEmbed);
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

client.login("*******************************"); 
