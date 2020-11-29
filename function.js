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

// kata 8

// Add the Houses to the array
var houses = [  
  {name: "Targaryen", motto: "Fire and Blood"},
  {name: "Stark",     motto: "Winter is Coming"},
  {name: "Bolton",    motto: "Our Blades Are Sharp"},
  {name: "Greyjoy",   motto: "We Do Not Sow"},
  {name: "Tully",     motto: "Family, Duty, Honor"},
  {name: "Arryn",     motto: "As High as Honor"},
  {name: "Lannister", motto: "Hear Me Roar!"},
  {name: "Tyrell",    motto: "Growing Strong"},
  {name: "Baratheon", motto: "Ours is the Fury"},
  {name: "Martell",   motto: "Unbowed, Unbent, Unbroken"}
];
var targaryen = {name: "Targaryen", motto: "Fire and Blood"};

// Implement the function
function motto(name) {
   const search = houses.find(v=>v.name===name)
   return search?search.motto:''
}
// kata 9
const aspectRatio = (x,y) => [Math.ceil(y*16/9), y];

// kata 10

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
// kata 11

const hotpo = (n, acc = 0) => n <= 1 ? acc : hotpo(n % 2 === 0 ? n / 2 : 3 * n + 1, acc + 1)

// kata 12 

const contamination = (text, char) => char.repeat(text.length);

// kata 13

const Calculator = function() {
  this.evaluate = string => {
let arr = string.split(" ");
    while (arr.length > 1) {
      const mult = arr.findIndex(a => a === "*" || a === "/");
      const index =
        mult === -1 ? arr.findIndex(b => b === "+" || b === "-") : mult;
      const a = Number(arr[index - 1]);
      const b = Number(arr[index + 1]);
      const calc =
        arr[index] === "/"
          ? a / b
          : arr[index] === "*"
          ? a * b
          : arr[index] === "-"
          ? a - b
          : a + b;
      arr.splice(index - 1, 3, calc);
    }
    return Number(arr[0]);
  };
};
