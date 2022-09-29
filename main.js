/*
function name xify
parameters string - str
return string
*/

// function xify(string1)
// {
   
//    for(index = 0; string1.length > index; index++)
//    {
//     let newString1 = string1[index] = "x";
//     console.log(newString1)
//    }
// }

// xify("help");

function xify (str)
{
    let newStr = "";
    for(let i =0; i < str.length; i++)
    {
       newStr += "x";
    }
    return newStr
}

console.log(xify('hello there'));




//yellingChars

// function yellingChars(string2)
// {
//    let newString2 = "";
//    for(index = 0; string2.length > index; index++)
//    {
//     let newString2 = string2[index] += "!";
//     console.log(newString2)
//    }
// }
// yellingChars("help");

/*
function yellingChars
parameters: 1 string str
return a newStr

let newStr = "";
loop
+=!



*/

function yellingChars(str)
{
    let newStr ="";
    for(let i =0; i < str.length; i++)
    {
        newStr += str[i];
        newStr += "!";

    }
    return newStr
}

console.log(yellingChars("What the Heck"));




// indexedChars

function indexedChars(string3)
{
   let strOne = "";
   for(index = 0; string3.length > index; index++)
   {
     strOne += index;
     strOne += string3[index];
   }
   return strOne
}
console.log(indexedChars("help"));




//exclaim

// function exclaim (string4)
// {
//     let newString4 = "";

//     for(let index = 0; string4.length - 1 > index; index++)
//      {

        
//              while (string4[string4.length-1] === "?")
//             { 
//                 newString4 -= string4.length-1;
//                 newString4 += "!";  
//             }  
                        
//     }

//     return newString4 

// }


// console.log(exclaim("what the heck?"));


/*
function name exclaim
keeping the strings of the characters intact

if(str[i] === "?")

*/

function exclaim(str)
{
    let newStr ="";
    for(let i =0; i < str.length; i++)
    {
        if(str[i] === "?" || str[i] === ".")
         {
             newStr += "!";
         } else 
         {
            newStr += str[i];
         }  
        
    }
    return newStr;
}

console.log(exclaim("what the heck?"));
console.log(exclaim("this is fine."));



//Truncate
// function truncate(str)
// {
//     let newStr = "";
//     for(let i =0; i < str.length; i++)
//     {
        
//          if (str[i] < 15)
//          {
//             newStr += str[i]; 
//          } else if (str[i] === 15)
//          {
//             newStr += "...";
//          }
//     return newStr
// }

// console.log(truncate("I am hoping that if I type all this it will work"))



function truncate(str) 
{
    let newStr = "";
    for(let i =0; i < 15; i++)
    {
        newStr += str[i];
        
    }
    newStr += "..."
    return newStr;
}

console.log(truncate("I am hoping that if I type all this it will work"))


//ciEmailify creates email from two part name
/* first name last name to firstname.lastname

*/

function ciEmailify (str)
{
    let newStr = "";
    
    for(let i=0; i < str.length; i++)
    {
        if(str[i] === " ")
        {
            newStr += ".";

        } else
        {
            newStr += str[i];
        }
        
    }
    newStr += "@codeimmersives.com"
    return newStr.toLowerCase();
}

console.log(ciEmailify("jane doe"));
console.log(ciEmailify("Mark Twain"));


//reverse

function reverse(str)
{
let newStr = "";
    
for(let i=str.length-1; i >= 0; i--)
{
  newStr += str[i];
}
return newStr
}

console.log(reverse("reverse this string"))

//only vowels 

function onlyVowels(str)
{
let newStr = "";
    
for(let i=0; i < str.length; i++)
{
    if (str[i] === "a" || str[i] === "i" || str[i] === "e" || str[i] ===  "u" || str[i] === "o" )
    {
        newStr += str[i];
    } 
    
}
return newStr.toLowerCase();
}

console.log(onlyVowels("Grab the vowels"))
