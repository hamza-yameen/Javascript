// 1. Ternary Operator
const isAdult = age >= 18 ? "Yes" : "No";

// 2. Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

// 3. Arrow Functions
const add = (a, b) => a + b;

// 4. Destructuring Objects
const { name, age } = person;

// 5. Destructuring Arrays
const [first, second] = colors;

// 6. Template Literals
const message = `Hi, ${user.name}!`;

// 7. Spread Operator
const newArray = [...oldArray, 4];

// 8. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

// 9. Optional Chaining
const street = user?.address?.street;

// 10. Nullish Coalescing
const username = inputName ?? "Anonymous";

// 11. Short-circuit Evaluation
const status = isLoggedIn && "Welcome!";

// 12. Logical OR Assignment
user.name ||= "Guest";
if (!user.name) {
  user.name = "Guest";
}
let user = { name: "" };
user.name ||= "Guest";
console.log(user.name); // Output: "Guest"


// 13. Logical AND Assignment
settings.debug &&= false;
if (settings.debug) {
  settings.debug = false;
}
let settings = { debug: true };
settings.debug &&= false;
console.log(settings.debug); // Output: false


// 14. Object Property Shorthand
const age1 = 30;
const person = { name, age1 };

// 15. Computed Property Names
const key = "level";
const player = { [key]: 42 };

// 16. For-of Loop
for (const item of items) {
  console.log(item);
}

// 17. forEach Loop
items.forEach(item => console.log(item));

// 18. Map Function
const squared = nums.map(n => n * n);

// 19. Filter Function
const evens = nums.filter(n => n % 2 === 0);

// 20. Reduce Function
const total = nums.reduce((a, b) => a + b, 0);

// 21. Includes Check
const found = list.includes("apple");

// 22. Set for Unique Values
const unique = [...new Set(array)];

// 23. Object.entries
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

// 24. Object.values
const vals = Object.values(obj);

// 25. Object.keys
const keys = Object.keys(obj);

// 26. Chaining Array Methods
const result = data.filter(a => a.active).map(a => a.name);

// 27. Flatten Array
const flat = arr.flat();

// 28. Trim String
const cleaned = str.trim();

// 29. Pad String
const padded = "5".padStart(2, "0");

// 30. Intl.NumberFormat
const price = new Intl.NumberFormat().format(1234567);