// Initialisation
const Discord = require('discord.js');
const bot = new Discord.Client();
const key = process.env.token;

// Fonctions utiles
function randInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

// Commandes
var commandes = ['!help', '!d + nombre'],
    cpseudo = ['!Bernard', '!Tom'],
    cinvis = ['!membres'];
// commandes => Pour les commandes basiques ; cpseudo => Pour les commandes liées au pseudo ; cinvis => Pour les commandes qui n'apparaissent pas dans le !help
var asw = {
	help: ['**Commandes disponibles :**\n```' + commandes.join('\n') + '```\n_!membres_ pour plus de commandes'],
	membres: ['**Commandes disponibles :**\n```' + cpseudo.join('\n') + '```\n_!help_ pour plus de commandes'],
	Bernard: ['C\'est pas moi !'],
	Lilith: ["Toi tu es dans la catégorie 4", "Je suis Tom, le despote flamboyant", "Mouais", "On fait quoi ce WE ?", "^^"]
};

bot.on('message', function (msg) {
	
	var txt = msg.content;
	
	if (txt.slice(0, 2) === '!d' && !isNaN(txt.substr(2))) {
		if(txt.substr(2) == 0) {
			msg.channel.send('Ca existe ce machin?');
		}
		else {
		var des = randInt(txt.substr(2)) + 1;
		msg.channel.send("d" + txt.substr(2) + " : ***" + des + "***");
		}
	}
	
	else if ((commandes.indexOf(txt) != -1) || (cpseudo.indexOf(txt) != -1) || (cinvis.indexOf(txt) != -1)) {
		if ((txt.substr(1) === msg.author.username)) {
			msg.channel.send('Bah c\'est toi idiot  ._.' );
		} else {
			var L = asw[txt.substr(1)];
			msg.channel.send(L[randInt(L.length)]);
		}
	}
});

// Login
bot.login(key);
