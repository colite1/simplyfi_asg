// Define the travel places by kid
const cities = ['Amsterdam', 'Kiev', 'Zurich', 'Prague', 'Berlin', 'Barcelona'];

//creating a array of all the travel tickets
const tickets = [
  ['Paris', 'Skopje'],
  ['Zurich', 'Amsterdam'],
  ['Prague', 'Zurich'],
  ['Barcelona', 'Berlin'],
  ['Kiev', 'Prague'],
  ['Skopje', 'Paris'],
  ['Amsterdam', 'Barcelona'],
  ['Berlin', 'Kiev'],
  ['Berlin', 'Amsterdam']
];
const startingCity = 'Kiev';

// Create an empty route array to store the path traveled by kid
let route = [];

// Start with the starting city
let currentCity = startingCity;

// Loop until all cities are visited
while (route.length < cities.length) {
  // Find the next ticket with the current city as the departure point
  let nextTicket = tickets.find(ticket => ticket[0] === currentCity);
  console.log(nextTicket);
  // Add the current city to the route and update the current city
  route.push(currentCity);
  currentCity = nextTicket[1];
}

// Add the last city to the route
route.push(currentCity);

// Print the final route
console.log('Traveled route by kid:', route);
