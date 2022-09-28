const obj = {
  name: 'Oleksii',
  lastName: 'Ustinov',
  age: 31,
};

//Create an array form an object
function keys(obj) {
  const result = [];
  for (let key in obj) {
    result.push(key);
  }
  return result;
}

//console.log(keys(obj));

function values(obj) {
  const result = [];
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
}

//console.log(values(obj));

function entriesOfObject(obj) {
  const result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

//console.log(entriesOfObject(obj));

Object.keys(obj);
Object.values(obj);
Object.entries(obj);

const objectOfUsers = {
  Oleksii: {
    name: 'Oleksii',
    age: 31,
  },
  John: {
    name: 'John',
    age: 23,
  },
  Alexander: {
    name: 'Alexander',
    age: 16,
  },
};

const entries = Object.entries(objectOfUsers);
const modifiedEntries = entries.map((user) => {
  return [
    user[0],
    {
      name: user[1].name,
      age: user[1].age,
      isAdult: user[1].age > 18,
    },
  ];
});
Object.fromEntries(modifiedEntries);

//New Object types
const objectMap = new Map();
//dding new value to the object
objectMap.set(0, 'number');
//Get a value from the object
objectMap.get(0);
//Get a length of the object
objectMap.size;
//Check for the existence of a key
objectMap.has(0);
//Get object keys
objectMap.keys();

const mappedObj = new Map();

mappedObj.set(mappedObj, 'Object');

//Set allows to store only unique values

const arrayOfNumbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const set = new Set(arrayOfNumbers);
//console.log(set);

const newUserArray = ['Oleksii', 'Ustinov', 31];
//Деструктуризація масива
const [Firstname, lastName] = newUserArray;
//Отримання всіх інших значень масива за допомогою rest operator
const [firstname, ...rest] = newUserArray;
//Повне копіювання масиву
const [...args] = newUserArray;

function getFullName([name = 'John', lastName = 'Doe'], isUpperCase = false) {
  const result = `${name} ${lastName}`;

  return isUpperCase ? result.toUpperCase() : result;
}

const objectUserExample = {
  name: 'Oleksii',
  lastName: 'Ustinov',
  age: 31,
};

//const { name, ...other } = objectUserExample;
//In order to avoid undefined we could add the default
const { name = 'John', ...other } = objectUserExample;

function etFullName(
  { name = 'John', lastName = 'Doe' } = {},
  withConsole = false
) {
  withConsole && console.log('Hello World');
  return `${name} ${lastName}`;
}

//Object copying, object merging

const numberedArray = [1, 2, 3];

const copiedArrAy = [...numberedArray];

const AddedNumbersArray = [...copiedArrAy, 4, 5, 6];

const start = [1, 2, 3];
const middle = [5, 6, 7];
const end = [9, 10, 11];
const fullNumbersRow = [0, ...start, 4, ...middle, 8, ...end];

//Array method that allows to get elements from subarrays

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
//WE should point out the depth of copying
arr.flat(4);
