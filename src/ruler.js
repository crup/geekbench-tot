const winner = require('./winner');
const kingdoms = require('./kingdoms');

function ruler(messages, king) {
  const response = {
    ruler: 'None',
    allies: [],
  }

  if((messages instanceof Array)) {
    const allies = messages.filter(({ to, message }) => {
      return winner(message, kingdoms[to]);
    });

    if(allies.length >= 3) {
      return {
        ruler: king,
        allies: allies.map(a => a.to),
      };
    }  
  }

  return response;
}

module.exports = ruler;