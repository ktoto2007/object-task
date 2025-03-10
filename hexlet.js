let student = {
    name: "Bob",
    age: 22,
    grades: [90, 85, 88]
};
const hasGrades = (user) => {
    return Object.hasOwn(user, 'grades') ? console.log('Yes') : console.log('No')
}