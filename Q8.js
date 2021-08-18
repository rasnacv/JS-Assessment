const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
//merging objects name and details
let newName=Object.assign(name,details);