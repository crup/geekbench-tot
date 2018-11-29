const ruler = require('../ruler');
const app = require('../index'); 
const { rulerName, messages } = require('../inputs'); 

test("Displays correct allies and ruler", () => {
  let outputData = [];
  let storeLog = inputs => (outputData.push(inputs));
  console["log"] = jest.fn(storeLog);
  
  const ruler_before = ruler();
  const ruler_after = ruler(messages, rulerName);
  
  app(ruler_before, ruler_after, rulerName, messages);

  expect(outputData).toEqual([
  	'Who is the ruler of Southeros?',
    'None',
    'Allies of None?',
    'None',
    'Input Messages to kingdoms from King Shan',
    'Air, "oaaawaala"',
    'Land, "a1d22n333a4444p"',
    'Ice, "zmzmzmzaztzozh"',
    'Who is the ruler of Southeros?',
    'King Shan',
    'Allies of King Shan?',
    'Air, Land, Ice',
  ]);
});