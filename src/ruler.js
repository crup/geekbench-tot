const winner = require('./winner');
const kingdoms = require('./kingdoms');

function ruler(messages, king) {
  let ruler = 'None'
  let allies = [];

  if(messages.length >= 3 && messages !== null && messages !== undefined) {
    const kingdoms_won = messages.filter(({ to, message }) => {
      return winner(message, kingdoms[to]);
    });

    if(kingdoms_won.length >= 3) {
      allies = kingdoms_won.map(m => m.to);
      ruler = king;
    }
  }

  return {
  	ruler,
  	allies,
  };
}
module.exports = ruler;