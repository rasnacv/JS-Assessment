/*
Q3. What will be the output of the following code?

var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company Console.log(emp1.company);


OUTPUT
-------
undefined


explanation
------------
'delete Emp1.company' will delete the key company from the object. So if we try to display it, output will be undefined as there is not such key now.
*/

