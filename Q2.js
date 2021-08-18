var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title:  'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];

//Display book details in table format
console.table(library)

//Display book details one by one

console.log("\nBOOK DETAILS")
for(let i=0;i<library.length;i++)
{
console.log("\n");
console.log("Book Name: ",library[i].title);
console.log("Author: ",library[i].author);
console.log("Reading Status: ",library[i].readingStatus);
}