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

let studentsList = document.querySelector('student-list'); 
const studentsPages = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => {

    let indexStart = (page * studentsPages) - studentsPages;
    let indexEnd = (page * studentsPages);

    /*** Loop over items in the list parameter
   -- If the index of a list item is >= the index of the first
   item that should be shown on the page
   -- && the list item index is <= the index of the last item
   that should be shown on the page, show it***/
   

for (let i = 1; i < studentsList.length; i++) {
    let li= list[i];
    if (i >= indexStart  && i< indexEnd) {
       list[i].style.display = "block";// This will show the pages
          } else { 
          list[i].style.display = "none";//This will hide the students pages
          }
       }
    
    };
    
 
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

//showPage(studentsList, 2)
   /*The`appendPageLinks function` will generate, append, and add 
   functionality to the pagination buttons.*/

   const appendPageLinks = (list) => {
    let totalPages = Math.ceil(list.length/studentsPages);
    const PageOfDivElement = document.querySelector('.page');
    const paginationDiv = document.createElement('div');
 // I am setting an attribute class to pagination
 document.querySelector(".page").appendChild(paginationDiv)// Appending the child
 paginatonDiv.setAttribute('class','pagination');//set the attribute to pagination
 let ul= document.createElement('ul');//create an element
 //pagination.classList.add('pagination');//create a classList and 
 paginationDiv.appendChild(ul);

 for (let i = 1; i <= totalPages; i++){
  let li = document.createElement('li');
  let link = document.createElement('a');
  link.setAttribute('class', 'link');
  a.className = 'active';
  let ActivePage = event.target.textContent;
  link.innerHTML = i;
  
  link.addEventListener("click",(event) => {
  const buttons = event.target;
  const paginationLink = document.querySelectorAll('.paginationLi');
  for( let i = 0; i, buttons.length; i ++){
buttons[i].className ="none";
  }
  buttons.className ="active";
});
 }
  
  li.appendChild(link);
  ul.appendChild(li);
 }
  showPage(studentsList, ActivePage);
  appendPageLinks(studentsList);
  




// Remember to delete the comments that came with this file, and replace them with your own code comments.