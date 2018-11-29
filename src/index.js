const { printRulerInfo } = require('./utils');

const ruler = require('./ruler');
const { rulerName, messages } = require('./inputs'); 
const ruler_before = ruler();
const ruler_after = ruler(messages, rulerName);


const app = (ruler_before, ruler_after, rulerName, messages) => {
	printRulerInfo(ruler_before);
	console.log(`Input Messages to kingdoms from ${rulerName}`);
	messages.forEach(({to, message}) => console.log(`${to}, "${message}"`));
	printRulerInfo(ruler_after);	
}

app(ruler_before, ruler_after, rulerName, messages);

module.exports = app;