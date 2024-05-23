// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']


// Iterates through names and province objects
console.log('Names and Provinces:')
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

console.log('Names with matching provinces:')
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Creates a new array of provinces
const provincesUpperCase = provinces.map(province => province.toUpperCase());
console.log('Uppercase Provinces:', provincesUpperCase);

// Creates a new array for length of names
const nameLengths = names.map(name => name.length);
console.log('Name Lengths:', nameLengths);

// Sorts provinces in lexicographical odrder
provinces.sort( );
console.log('Sorted Provinces:', provinces);

// Creates new array passing test implemented by function
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log('Remaining provinces:', filteredProvinces.length, filteredProvinces);

// Creates a boolean array
const hasS = names.map(name => name.split('').some(char => char.toLowerCase() === 's'));
console.log(hasS);

// Creates an array object
const namesAndProvinces = names.reduce((accumulator, name, index) => {
  accumulator[name] = provinces[index];
  return accumulator;
}, {});

console.log(namesAndProvinces);

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Logs each product name
console.log(products.forEach(products => console.log(products.product)));

// Filters name's length
console.log(products.filter(products => products.product.length <= 5));