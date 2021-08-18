/*
QUESTION
---------
Consider the two functions below. Will they both return the same thing? Why or why
not?

function foo1()
{
return {
bar: "hello"
};
}
function foo2()
{
return
{
bar: "hello"
};
}

ANSWER
--------

No. They wont return same output.
foo1 will return an object with item 'bar' having "hello" as the value.
foo2 will return nothing because after the keyword 'return' no further code will be executed. So the object written after the return statement won't get returned.

Since the object was written with its curly brackets starting with return keyword it gets returned in foo1 wherein foo2 there is nothing after return statement.

*/