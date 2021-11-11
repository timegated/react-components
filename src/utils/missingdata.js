const  dataWith = {
  id: 'some-id1',
  name: 'Something',
  value: '34',
  age: '28',
  laugh: 'lol',
  signature: 'SomeSig1'
};

const dataWithout = {
  id: 'some-id2',
  name: 'Something2',
  age: '30',
  value: '28',
  laugh: 'lol',
  signature: 'SomeSig2',
  plays: '0',
  playThroughs: 'Object'
};


const dataWithArr = Object.keys(dataWith);

const dataWoutArr = Object.keys(dataWithout);

// Mock React Component
function displayTableHeaders(arr) {
  const [id, name, value, age, laugh, signature, plays, playThroughs] = arr;
  const mapArr = arr.map(item => {
    if (item === undefined) throw new Error('One of the items in the array is undefined');
    return formatText(item, 'id');
  });
  console.log(mapArr);
  return {
    id,
    name,
    value,
    age,
    laugh,
    signature,
    plays,
    playThroughs
  }
}

function formatText(str, ...args) {
  return str.includes(args[0]) ? str.toUpperCase() : str;
}
console.log(displayTableHeaders(dataWithArr));