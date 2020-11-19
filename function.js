// function 1

const odds = (values) => values.filter(x =>x%2!=0 );

// function 2

const unusualFive = () => ['a', 'b', 'c', 'd', 'e'].length;

// function 3

const formatMoney = amount => `$${amount.toFixed(2)}`; 

// function 4

const product = (a, b) => b - a > 1 ? Array.from(Array(b - a - 1), (_, i) => a + ++i).reduce((r, e) => r * e) :'Error';

// function 5

const findNeedle =haystack => "found the needle at position " + haystack.indexOf("needle");

// kata 6

const datingRange = (age) => age>=14?`${Math.floor(age/2+7)}-${Math.floor((age-7)*2)}`:`${Math.floor(age-(age*0.1))}-${Math.floor(age+(age*0.1))}`

// kata 7 

const DNAtoRNA = dna => dna.replace(/T/g, 'U');
