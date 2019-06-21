/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

//These are the two global variables 
// The first variable within the global scope will query a list called"student-item" which has 54 students.
// The second variable is set to ten students per page
let studentsList = document.querySelectorAll('.student-item');
const studentsPages = 10;

//The showPage function will show list and page
const showPage = (list, page) => {
//The index start page will start the page from 0-11,
//The index end page will end the page 
    let indexStart = (page * studentsPages) - studentsPages;
    let indexEnd = (page * studentsPages);
 //This is the for loop and it will f
   
for (let i = 0; i <= list.length; i++) {
let li= list[i];
    if (i >= indexStart  && i< indexEnd)
         {
       list[i].style.display = "block";// This will show the pages
          } 
    else { 
          list[i].style.display = "none";//This will hide the students pages
          }
       }
    
    };
    
 
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

//showPage(studentsList, 6);
   /** The`appendPageLinks function` will generate, append, and add 
   functionality to the pagination buttons.
*/
const appendPageLinks = (list) => {
    let totalPages = Math.ceil(list.length / studentsPages);
    const PageOfDivElement = document.querySelector('.page');
    const paginationDiv = document.createElement('div');
    paginationDiv.setAttribute('class', 'pagination');//set the attribute to pagination

    // I am setting an attribute class to pagination
    document.querySelector(".page").appendChild(paginationDiv)// Appending the child
   
    let ul = document.createElement('ul');//create an element
    //pagination.classList.add('pagination');//create a classList and 
    

    for (let i = 1; i <= totalPages; i++) {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('class', 'link');
        //link.className = 'active';

        //link.style.color = "red";
        link.style.backgroundColor = "white";

        //let ActivePage = event.target.textContent;
        link.innerHTML = i;
        li.appendChild(link);
        ul.appendChild(li);
 
        link.addEventListener("click", (event) => {
            const buttons = event.target;
            const paginationLink = document.querySelectorAll('.paginationLi');
            for (let i = 0; i, buttons.length; i++) {
                buttons[i].className = "none";
            }
            
           // buttons.className = "active";
        }
        paginationDiv.appendChild(ul);
        Console.log(document.querySelector("ul").innerHTML);
    }

    

  //showPage(studentsList, ActivePage);
  appendPageLinks(studentsList);
  




// Remember to delete the comments that came with this file, and replace them with your own code comments.