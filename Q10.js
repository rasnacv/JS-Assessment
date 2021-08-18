/*
Question
---------
Consider below as an example of constructor function where we want name and level to be
referred to a function itself, is below example correct or not? Please explain?

function Hero(name, level)
{
name = name;
level = level;
}


Answer
------
It is not correct. For assigning the function values 'name' and 'level' to parameters 'name' and 'level' 
we should specify by using 'this' keyword.
If we display the value it will display the parameters not the function values as we have not assigned it correctly.

correct code will be

function Hero(name, level)
{
this.name = name;
this.level = level;
}

*/