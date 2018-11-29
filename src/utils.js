const concat = rulers => (rulers instanceof Array && rulers.length > 0) ? rulers.join(', ') : 'None'

const alliesMessage = ruler => `Allies of ${(typeof ruler === 'string' ? ruler : 'Ruler')}?`

const printRulerInfo = ({ruler, allies}) => {
	console.log('Who is the ruler of Southeros?');
	console.log(ruler);
	console.log(alliesMessage(ruler));
	console.log(concat(allies));
}

module.exports = {
	concat,
	alliesMessage,
	printRulerInfo
};
