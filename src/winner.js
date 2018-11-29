function array_diff(array1, array2) {
  return array1.filter(e => array2.indexOf(e) === -1)
}

function message(message, animal) {
  const messageArr = (message || "").toLowerCase().split('');
  const animalArr = animal.toLowerCase().split('');

  return messageArr.length >= array_diff(messageArr, animalArr).length + animalArr.length;
}
module.exports = message;