/*
  1. Write a code to find area of rectangle
  Input: length = 5, width = 3
  Output: 15
*/
const areaOfRectangle = (length: number, width: number): number => {
  return length * width;
};
console.log(`Area of rectangle : ${areaOfRectangle(5, 3)}`);

/*
  2. Write a code to find diameter, circumference and area of a circle
  Input: radius = 5
  Output: diameter = 10, circumference = 31.4159, area = 78.539
*/
const circleProperties = (radius: number): void => {
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * Math.pow(radius, 2);

  console.log(`
    Radius : ${radius}
    Diameter : ${diameter}
    Circumference : ${circumference}
    Area : ${area}`);
};
circleProperties(5);

/*
  3. Write a code to find angles of triangle if two angles are given
  Input: a = 80, b = 65
  Output: 35
*/
const findThirdAngles = (a: number, b: number): number => {
  return 180 - (a + b);
};

const a = 80;
const b = 65;
const result = findThirdAngles(a, b);
console.log(`\nThid angles of triangle : ${result}`);

/*
  4. Write a code to get difference between dates in days.
  Input: date1 = 2024-03-19, date2 = 2024-03-21
  Output: 2
*/
const getDaysDifference = (date1: string, date2: string): number => {
  // create a new date object based on user input
  const dateOne = new Date(date1);
  const dateTwo = new Date(date2);

  // get time difference
  const timeDifference = dateTwo.getTime() - dateOne.getTime();

  // convert time difference (in milisecond) to days
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return daysDifference;
};

const date1 = "2024-03-19";
const date2 = "2024-03-21";
const daysDifference: number = getDaysDifference(date1, date2);
console.log(
  `Days difference between ${date1} and ${date2} : ${daysDifference} days`
);

/*
  5. Write a code to print your name initial in uppercase
  Input: John Doe
  Output: JD
*/
const printInitialName = (fullName: string): string => {
  const nameArray: string[] = fullName.split(" ");

  // for debugging only will delete later
  console.log(nameArray);

  // get each index value first character
  const getInitials = nameArray
    .map((name) => name.charAt(0).toUpperCase())
    .join("");

  return getInitials;
};

// normal function
function printInitial(fullName: string): string {
  const nameArray: string[] = fullName.split(" ");

  // for debugging only will delete later
  console.log(nameArray);

  // get each index value first character
  const getInitials = nameArray
    .map((name) => name.charAt(0).toUpperCase())
    .join("");

  return getInitials;
}

const fullName: string = "Fernaldy Saputra";
const initialName: string = printInitialName(fullName);
console.log(`Full name : ${fullName}`);
console.log(`Initial name : ${initialName}`);