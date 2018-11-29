const message = require('./message');
const kingdoms = require('./kingdoms');

function ruler(messages, king) {
  let ruler = 'None'
  let allies = [];
  let kingdomsWon = 0;

  if(messages.length >= 3 && messages !== null && messages !== undefined) {
  	messages.forEach(m => {
  		if(message(m.message, kingdoms[m.to])) {
  			allies.push(m.to);
  			ruler = king;
  			kingdomsWon++;
  		}
  	});
    if(kingdomsWon < 3) {
      allies = [];
      ruler = 'None';
    }
  }

  return {
  	ruler,
  	allies
  };
}
module.exports = ruler;