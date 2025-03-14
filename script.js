// PART 1
console.log(`PART 1`);
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

const radius = 5;
const PI = 3.1415;
const area = Math.round(PI * radius * radius);
const minimumSpace = 0.8;
const plantCount = 20;
let weekNumber = 3;
let newPlantCount = plantCount * 2 ** weekNumber;
let plantArea = Math.round(newPlantCount * minimumSpace);

// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

console.log(`The container area is ${area} square meters`);
console.log(`80% of the container area is ${area * 0.8} square meters`);
console.log(`50% of the container area is ${area * 0.5} square meters`);

try {
  if (plantArea > area) {
    throw `Error: Plant area = ${plantArea} square meters. Space required to hold the plants exceeds the amount of space available`;
  } else if (plantArea >= area * 0.8) {
    console.log(
      `The plant area is ${plantArea} square meters so you should Prune`
    );
  } else if (plantArea >= area * 0.5) {
    console.log(
      `The plant area is ${plantArea} square meters, so you should Monitor`
    );
  } else {
    console.log(
      `The plant area is ${plantArea} square meters, so you should Plant`
    );
  }
} catch (err) {
  console.log(err);
}

// PART 2
console.log(`PART 2`);
// The conservation area in which the garden is located has multiple other gardens.
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

let plantCount2 = 100;
let weekNumber2 = 10;
let newPlantCount2 = plantCount2 * 2 ** weekNumber2;
let plantArea2 = Math.round(newPlantCount2 * minimumSpace);
let additionalSpaceRequired = plantArea2 - area;
let radius2 = Math.round(Math.sqrt(additionalSpaceRequired / PI));
console.log(
  `The additional space required would be ${additionalSpaceRequired} square meters`
);
console.log(`The radius of the expanded garden would be ${radius2}`);

// PART 3
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.
