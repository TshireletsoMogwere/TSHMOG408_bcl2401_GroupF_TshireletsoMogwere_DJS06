// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

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
