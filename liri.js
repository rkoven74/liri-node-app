var keys = require('./keys.js');
var Twitter = require('twitter');
var client = new Twitter(keys.twitterKeys);
var getMyTweets = function(){


var params ={screen_name: 'inrtracker'};
client.get('statuses/user_timeline', params, function(error, tweets,
    response){
        if (!error){
        for(var i=0; i<tweets.length; i++){
            
        }
    }
    });
}
var getMeSpotify = function(songName){
    spotify.search({ type: 'track',query: songName}, function(err, data))

var pick = function(caseData, functionData){
    switch(caseData) {
        case 'my-tweets'
        getMyTweets();
        break;
        default:
        console.log('LIRI does not know that');
    }
}
}
var runThis = function(argOne, argTwo){
    pick(argOne, argTwo);
};
runThis(process.argv[2], process.argv[3]);

require('dotenv').config();
var spotify_instance = require('./keys.js');
var axios = require('axios');
//this would be our command

console.log(process.argv[2]);
var commandObject = {
    'concert-this': function(band){
        //this fetched concert data
        console.log('Got concert data');
        concertThisBand(band);
       
    },
    'spotify-this-song': function(song){
        console.log('Got song data');
        spotifyASong(song);
    },
    'do-what-it-says': function() {
        console.log('did what it said');
    },
    'movie-this': function () {
        console.log('Get movie');
    }
}

var commandResponse = commandObject[process.argv[2]];
var commandModifier = process.argv.slice(3).join('+');
console.log('command modifier',commandModifier);
if(commandResponse) {
    commandResponse(commandModifier);
}
else {
    //I dont support this command
    console.log('I dont support this command');
}

function concertThisBand(band){
    axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp")
    .then(function(response) {
        for (var i = 0; i < response.data.length; i++){
            
            
        
            var concertData = [
                "Name of the Venue: " + response.data[i].venue.name,
                "Venue location: " + response.data[i].venue.city + ', ' + response.data[i].venue.region,
                "line-up: " + response.data[i].lineup.length !== 1 ? response.data[i].lineup.join(', ') : response.data[i].lineup[0],
                "Tickets available: " + response.data[i].offers.filter(function(offerObj){
                    return offerObj.type === 'Tickets';
                })[0].status
            ].join("\n\n");
            console.log(concertData);
            
        }
            
    })
    .catch(function(err){
        console.log(err);
    });
}

function spotifyASong(song){
 
    spotify_instance.search({ type: 'track', query: song || 'All the Small Things', limit:1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 

var songData = [
    "Artist: " + data.tracks.items[0].artists[0].name,
    "The song's name(s): " + data.tracks.items[0].name,
    "Link for Song: " + data.tracks.items[0].external_urls.spotify,
    "The Album the song is from: " + data.tracks.items[0].album.name
  ].join("\n\n");
  console.log(songData);

});
}
