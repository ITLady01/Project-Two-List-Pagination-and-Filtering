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
/* Added the two constant variables
  First variable studentsList this will pull the student list from the HTML file(DOM element)
  Then I added the queryselector this will query and search for any tag name with a class name that is called student-list.
Second variable is set to */
let studentsList = document.querySelector('.student-item').children; 
let searchResults = Array.prototype.slice.call(document.querySelectorAll(".student-item"));
let AmtOfStudents = studentsList.length;
const studentsPages = 10;
const pageHeader = document.querySelector('.page-header');
const AmtOfPages = Math.ceil(AmtOfStudents/studentsPages);
const page = document.querySelector('.page');
//console.log(studentsList);




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parents when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function ***/ 

//Created a function that will show the page and list all ten students at one time and will hide the remaining student list
const showPage = (list, page) => {
 //This will go for firstpage and will list 10 students
   let indexStart = (page * studentsPages )  - studentsPages;
   let indexEnd = page * studentsPages;
  // console.log(list, page);
   //console.log(list, page);

   //Select appropriate
  
  
//some actions
         
   
  /*** Loop over items in the list parameter
   -- If the index of a list item is >= the index of the first
   item that should be shown on the page
   -- && the list item index is <= the index of the last item
   that should be shown on the page, show it***/
   

for (let i = 0; i < studentsList.length; i++) {
let li= list[i];
if (i >= indexStart  && i<=indexEnd){
   list[i].style.display = "display";// This will show the pages
      } else { 
      list[i].style.display = "";//This will hide the students pages
      }
   }

};

   /*The`appendPageLinks function` will generate, append, and add 
   functionality to the pagination buttons.*/

   const appendPageLinks = (list) => {
   let totalPages = Math.ceil(list.length/studentsPages);
   const PageOfDivElement = document.querySelector('.page');
   const paginationDiv = document.createElement('div');

   // I am setting an attribute class to pagination
  PageOfDivElement.appendChild(paginationDiv)
   paginatonDiv.setAttribute('class','pagination');
   let ul= document.createElement('li');
   pagination.classList.add('pagination');
   paginationDiv.appendChild(ul);

   for (let i = 1; i <= AmtOfPages; i+= 1){
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('class', 'link');
   }

    link.innerText = i;
    li.appendChild(link);
    ul.appendChild(li);

    link.addEventListener("click",(e) => {
      showPage(studentsList,i);

      
   }
   
   

























  
  
  //this button will only show the next set of 10 items, the rest will be hidden. 
  //It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
  //will scroll to the top of the page when clicked, just for user convenience.

  button1.addEventListener("click", function(){
   for (var i = 0; i < li.length; i++){
       if (i >= 10){
           li[i].style.display = "none"
       }

       else {li[i].style.display = "block"
       }
   }

   button1.className = "buttons highlighted";
   button2.className = "buttons ";
   button3.className = "buttons";
   button4.className = "buttons";
   button5.className = "buttons";
   button6.className = "buttons";

   document.body.scrollTop = document.documentElement.scrollTop = 0;

})

  
  button2.addEventListener("click", function(){
      for (var i = 0; i < li.length; i++){
          if (i < 11 ){
              li[i].style.display = "none"
  
          }
          else if (i >20){li[i].style.display = "none"}
  
          else {li[i].style.display = "block"
          }
      }
      button1.className = "buttons";
      button2.className = "buttons highlighted";
      button3.className = "buttons";
      button4.className = "buttons";
      button5.className = "buttons";
      button6.className = "buttons";
  
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
  
  /*this button will only show the next set of 10 items, the rest will be hidden. 
  It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
  will scroll to the top of the page when clicked, just for user convenience. 
  
  
  button3.addEventListener("click", function(){
      for (var i = 0; i < li.length; i++){
          if (i < 21 ){
              li[i].style.display = "none"
  
          }
          else if (i > 30){li[i].style.display = "none"}
  
          else {li[i].style.display = "block"
          }
      }
  
      button1.className = "buttons";
      button2.className = "buttons";
      button3.className = "buttons highlighted";
      button4.className = "buttons";
      button5.className = "buttons";
      button6.className = "buttons";
  
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  
  })
  
  /*this button will only show the next set of 10 items, the rest will be hidden. 
  It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
  will scroll to the top of the page when clicked, just for user convenience. 
  
  
  
  
  button4.addEventListener("click", function(){
      for (var i = 0; i < li.length; i++){
          if (i < 31 ){
              li[i].style.display = "none"
  
          }
          else if (i > 40){li[i].style.display = "none"}
  
          else {li[i].style.display = "block"
          }
      }
  
      button1.className = "buttons";
      button2.className = "buttons";
      button3.className = "buttons";
      button4.className = "buttons highlighted";
      button5.className = "buttons";
      button6.className = "buttons";
  
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  
  })
  
  /*this button will only show the next set of 10 items, the rest will be hidden. 
  It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
  will scroll to the top of the page when clicked, just for user convenience. 
  
  button5.addEventListener("click", function(){
      for (var i = 0; i < li.length; i++){
          if (i < 41 ){
              li[i].style.display = "none"
  
          }
          else if (i > 50){li[i].style.display = "none"}
  
          else {li[i].style.display = "block"
          }
      }
  
      button1.className = "buttons";
      button2.className = "buttons";
      button3.className = "buttons";
      button4.className = "buttons";
      button5.className = "buttons highlighted";
      button6.className = "buttons";
  
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  
  })
  
  this button will only show the next set of 10 items, the rest will be hidden. 
  It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
  will scroll to the top of the page when clicked, just for user convenience. 
  
  
  
  
  button6.addEventListener("click", function(){
      for (var i = 0; i < li.length; i++){
          if (i < 51 ){
              li[i].style.display = "none"
  
          }
          else if (i > 60){li[i].style.display = "none"}
  
          else {li[i].style.display = "block"
          }
      }
  
      button1.className = "buttons";
      button2.className = "buttons";
      button3.className = "buttons";
      button4.className = "buttons";
      button5.className = "buttons";
      button6.className = "buttons highlighted";
  
  
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  
  })
  
        //some actions
      }
    };
  
  
  
   
   1. Determine how many pages are needed for the list by dividing the
   total number of list items by the max number of items per page
   2. Create a div, give it the “pagination” class, and append it to the .page div
   3. Add a ul to the “pagination” div to store the pagination links
   4. for every page, add li and a tags with the page number text

   5. Add an event listener to each a tag. When they are clicked
   call the showPage function to display the appropriate page

   window.addEventListener("load", function(){
    for (var i = 0; i < li.length; i++){
        if (i >= 10){
            li[i].style.display = "none"
        }

        else {li[i].style.display = "block"
        }
    }

})
   6. Loop over pagination links to remove active class from all links
   7. Add the active class to the link that was just clicked. You can identify that
   clicked link using event.target
   
  let studentsList = listObject.children().length;
  let pageCount = Math.ceil()

  [{
   studentsPage: [ 'name', 'category' ],
   page:1,
   pagination: 
[{


   }
   Document.addEventListener('DOMContentLoaded',EventTarget, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

