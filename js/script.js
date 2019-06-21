//FSJS project 2 - List Filter and Pagination******************************************/


// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



/* Added the two global variables
  First variable studentsList this will pull the student list from the HTML file(DOM element)
  Then I added the queryselector this will query and search for any tag name with a class name that is called student-list.
Second variable is set to */
let studentsList = document.getElementsByClassName('students-item cf'); 
//let searchResults = Array.prototype.slice.call(document.querySelectorAll(".student-list"));

const studentsPages = 10;
//const pageHeader = document.querySelector('.page-header');

//const page = document.querySelector('.page');
//console.log(studentsList);


//Created a function that will show the page and list all ten students at one time and will hide the remaining student list
const showPage = (list, page) => {
 //This will go for firstpage and will list 10 students
   let indexStart = (page * studentsPages) - studentsPages;
   let indexEnd = (page * studentsPages);

  

   //Select appropriate
  
  
//some actions
         
   
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
    let ActivePage = event.target.textContent;
    link.innerHTML = i;
    
    link.addEventListener("click",(event) => {
    const buttons = event.target;
    const paginationLink = document.querySelectorAll('.paginationLi');
    showPage(studentsList, ActivePage);

 
     
    });
    
    li.appendChild(link);
    ul.appendChild(li);
   }
    showPage(studentsList, ActivePage);
    appendPageLinks(studentsList);
}
    //let buttons = document.querySelectorAll('a');
    
   
    

    
