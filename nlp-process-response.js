var scores = {
music : 0,
movie : 0,
family: 0,
outdoors: 0,
nightlife: 0,
}

var text = "I want to go hiking and fish and trekking and walk in nature. Like, or maybe go to a concert. And get drunk, score some drugs, LOL!. Or perhaps take a walk in nature. Or just party all night if a good DJ is playing. Or maybe go to a pantomime. I've only got like four free hours on sunday so maybe then I'll just relax";

var musicTokens = new RegExp("^(rock|jazz|grunge|classical|band|bands|concert|performance)$");
var movieTokens = new RegExp("^(cinema|film|movie|Hollywood|blockbuster|actor|entertainment|actress|star)$");
var familyTokens = new RegExp("^(family|fun|children|child|parents|married|park|performance|play|pantomime|entertainer|stories)$");
var outdoorsTokens = new RegExp("^(|nature|hike|hiking|walk|fish|camp|trekking|mountain|ski|snowboard)$");
var nightlifeTokens = new RegExp("^(bar|club|DJ|party|disco|drugs|drunk|high|cocktail)$");

var tokenize = function (text) {
       text = text.toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, ' ').trim().split(' ');

   for (var i = 0; i < text.length; i++) {
         if (text[i].match(musicTokens)) {
           scores.music++;
         }
         if (text[i].match(movieTokens)) {
           scores.movie++;
         }
          if (text[i].match(familyTokens)) {
           scores.family++;
         }
          if (text[i].match(outdoorsTokens)) {
           scores.family++;
         }
          if (text[i].match(nightlifeTokens)) {
           scores.nightlife++;
         }
       }
   return text;
   };

var words = tokenize(text);

console.log(scores.music);
console.log(scores.movie);
console.log(scores.family);
console.log(scores.outdoors);
console.log(scores.nightlife);

var winner = "";
var count = 0;

for(var prop in scores){
  if (scores[prop] > count){
    count = scores[prop];
    winner = prop;
  }

  if(scores[prop] == count && winner.indexOf(prop)){
    winner = winner + "," + prop;
  }
}

console.log ("Here are some " + winner + " activities and events suggestions: ")