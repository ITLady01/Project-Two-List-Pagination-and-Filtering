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

//console.log(studentsList);
//This code has been tested and is working
//The showPage function will show list and page
const showPage = (list, page) => {
//The index start page will start the page from 0-11 and etc.
//The index end page will end the page 
let indexFirst = (page * studentsPages) - studentsPages;
let indexLast= (page * studentsPages);
   
  for (let i = 0; i <= list.length; i++) { // The Students List will be going through a loop 
       if (i >= indexFirst  && i < indexLast)  {
          list[i].style.display = "block";// This will show the pages
           }  else    { 
          list[i].style.display = "none"; //This will hide the students pages
             }
          }
       
         };
         
         
 /*The `appendPageLinks function` will generate, append, and add 
   functionality to the pagination buttons.
*/
const appendPageLinks = (list) => {
      let AmtofPages = Math.ceil(list.length/studentsPages);  // This is calculating the total number of pages from the student list,
      const PageOfDivElement = document.querySelector('.page'); //The parent is PageOfDivElement and it will select the class name .page from the HTML file
      const paginationDiv = document.createElement('div');                     // Creating div
	   paginationDiv.className = 'pagination';                                          // Giving class of pagination
	   document.querySelector('.page').appendChild(paginationDiv);                     // Appending to .page div
	   let ul = document.createElement ('ul');                            // Creating ul
	   paginationDiv.appendChild (ul);     	

      for (let y = 0; y < AmtofPages; y++) {
	     let li = document.createElement("li");  // Adding a  <li> name tag       
	     let link = document.createElement("a");  // Adding <a> name tag
	     link.className = 'active';    // Makes current link class active 
	     link.href = '#';
	     link.textContent = y;
        ul.appendChild (li);  // Appending the child to the link      
        li.appendChild (link);// Adding the li                                                       
	      }
	       
	   }
	
appendPageLinks(studentsList);
// Remember to delete the comments that came with this file, and replace them with your own code comments.
