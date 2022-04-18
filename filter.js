  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */
// Simple Filtering. Allows us to filter the contents of an array. If the array item passes the test in the callback function woll be included in the result.
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
// Want to create an array of people who are 21 years old and older
// Want to call the filter method and pass through a callback function with our condition
const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);
const eighteenYearsOnly = people.filter(person => person.age == 18);
console.log(eighteenYearsOnly);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];
// Want to filter out students who don't have at least 5 years experience on one skill
const candidates = students.filter(students => {
  let strongSkills = students.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
})
console.log(candidates);

const strongSkills = students => {
  let strongSkills = students.skills.filter(skill => skill.yrsExperience.length > 5
  );
const hasFiveYearsExp = skill => skill.yrsExperience >= 5;
const strongCandidates = students.filter(strongSkills);
console.log(strongCandidates);