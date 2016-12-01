var restify = require('restify');
var builder = require('botbuilder');
var getHosto = require('./apis/googleplaces.js').getHospital;
//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================
bot.dialog('/',[
    function(session) {
        builder.Prompts.choice(session, "Hello, in which country are you ?\n choices :", 
        ["France", "Germany", "Spain", "Italia", "Great Britain"]);
    },
    function(session, results){
        session.userData.country = results.response.entity  ;
        session.send('You have choice : %s!', session.userData.country);
        session.beginDialog('/' + session.userData.country);
    }
]);

bot.dialog('/France', [
    function(session) {
        builder.Prompts.choice(session, "In wich city are you ?\nChoices :", 
        ["Paris",
        "Marseille",
        "Lyon",
        "Toulouse",
        "Nice",
        "Nantes",
        "Strasbourg",
        "Montpellier",
        "Bordeaux",
        "Lille",
        "Calais"]);
    },
    function(session, results){
        session.userData.city = results.response.entity  ;
        session.send('You have choice : %s!', session.userData.city);
        session.beginDialog('/Choices');
    }
]);

bot.dialog('/Germany', [
    function(session) {
        builder.Prompts.choice(session, "In wich city are you ?\nChoices :", 
        ["Berlin",
        "Hambourg",
        "Munich",
        "Cologne",
        "Francfort-sur-le-Main",
        "Stuttgart",
        "Düsseldorf",
        "Dortmund",
        "Essen",
        ]);
    },
    function(session, results){

        session.userData.city = results.response.entity  ;
        session.send('You have choice : %s!', session.userData.city);
        session.beginDialog('/Choices');
    }
]);

bot.dialog('/Spain', [
    function(session) {
        builder.Prompts.choice(session, "In wich city are you ?\nChoices :", 
        ["Madrid",
        "Barcelone",
        "Valence",
        "Séville",
        "Bilbao",
        "Malaga",
        "Asturies",
        ]);
    },
    function(session, results){
        session.userData.city = results.response.entity  ;
        session.send('You have choice : %s!', session.userData.city);
        session.beginDialog('/Choices');
    }
]);
bot.dialog('/Italia', [
    function(session) {
        builder.Prompts.choice(session, "In wich city are you ?\nChoices :",  
        ["Rome",
        "Milan",
        "Naples",
        "Turin",
        "Palerme",
        "Gênes",
        "Florence",
        ]);
    },
    function(session, results){
        session.userData.city = results.response.entity  ;
        session.send('You have choice : %s!', session.userData.city);
        session.beginDialog('/Choices');
    }
]);

bot.dialog('/Great Britain', [
    function(session) {
        builder.Prompts.choice(session, "In wich city are you ?\nChoices :", 
        ["Londres",
        "Birmingham",
        "Glasgow",
        "Manchester",
        "Édimbourg",
        "Liverpool",
        "Bristol",
        ]);
    },
    
    function(session, results){
        session.userData.city = results.response.entity  ;
        session.send('You have choice : %s!', session.userData.city);
        session.beginDialog('/Choices');
    }
]);


bot.dialog('/Choices', [
    function(session){
        builder.Prompts.choice(session, "In wich city are you ?\nChoices :", 
        ["Nearest Hospital", 
        "Nearest Reception Center", 
        "Nearest doctor", 
        "Nearest grossery", 
        "Nearest food bank",
        "Nearest contacts"]);
    },
    function(session, results){
        session.userData.city = results.response.entity  ;
        session.send('You have choice : %s!\nThanks You!', session.userData.city);
		getHosto("France", "Aire sur Adour", function (results){
			for (var s of results){
				session.send(s);
			}
		})
        session.endDialog();
    }
]);
