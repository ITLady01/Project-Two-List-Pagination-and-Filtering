/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//These are the define all global variables 
// The first variable within the global scope will query a list called"student-item" which has 54 students.
// The second variable is set to ten students per page
let studentsList = document.querySelectorAll('.li');
const studentsPages = 10;
let p = document.createElement('p');
p.innerHTML = "Students not listed";
p.style.display = "none";
p.id = "none-found";
document.querySelector('.page').appendChild(p);

//console.log(studentsList);
//This code has been tested and is working
//The showPage function will show list and page
const showPage = (list, page) => {
//The index first page will start the page from 0-11 and etc.
//The index last page will end the page 
   let indexFirst = (page * studentsPages) - studentsPages;
   let indexLast = page * studentsPages;

   for (let i = 0; i < list.length; i++) { // The students List will be going through a loop 
            if (i >= indexFirst && i < indexLast) {
         list[i].style.display ='block';// This will show the pages
      } else {
         list[i].style.display = "none";//This will hide the students pages
      }
   }

}
         
  // showPage(studentsList, 2); Tested the code and called function and it displayed the ten students and hid the rest of the list.
 /*The `appendPageLinks function` will generate, append, and add functionality to the pagination buttons.*/
const appendPageLinks = (list) => {
   const AmtofPages = Math.ceil(list.length / studentsPages);  // This is calculating the total number of pages from the student list.
   const PageOfDivElement = document.querySelector('.page'); //The parent is PageOfDivElement and it will select the class name .page from the HTML file
   const paginationDiv = document.createElement('div');    // Creating div and creating an element for div
   const ul = document.createElement('ul');                 // Creating an element for ul
   paginationDiv.className = "pagination";                 // Giving class name to the parent "paginationDiv"
   PageOfDivElement.appendChild(paginationDiv);     	// Appending the parent to the child (ul)
   paginationDiv.appendChild(ul);

   for (let i = 0; i < AmtofPages; i++) { //For loop to set the amount of pages to loop 10 students per page
      const li = document.createElement('li');  // Adding a <li> name tag 
      ul.appendChild(li);  // Appending the child to the li       
      const link = document.createElement('a');  // Adding <a> name tag
      li.appendChild(link);// Adding the li to child to the link   
     // link.setAttribute('class', 'pagination');// Setting the attribute to the class and pagination
      link.className = 'active';    // Makes current link class active 
      link.href = '#';// This is the href and it's assigned to # which will pulled from the HTML file
      link.textContent = i + 1;//Makes the text content will be value of i
      //link.style.backgroundColor = "white";//Added the style background white  
      //link.style.color = "blue"//Added the style to the color blue
      showPage(list, i,);                                             
   }
   const anchors = document.querySelectorAll('a');// This is a query selector and it will select all a tags.

   //ul.firstElementChild.firstElementChild.className = "active";
   
     
      for (let i = 0; i < anchors.length; i++) {  // This is the for loop and it will loop through the anchors
         anchors[i].addEventListener('click', event => { // This is the eventlistner and when the click is pressed by user the event will listen for the click.
            const li_list = ul.getElementsByTagName('li');// This is get the all elements by pulling the Tag name li

         for (let i = 1; i < li_list.length; i++) { // This is the for loop and it will loop through the list
            li_list.item(i).firstElementChild.className = "";//This is the firstElement child (li_list.item)
         }
         event.target.className = "active";
         showPage(list, event.target.textContent);
                         
      })
   
   }
   }

//function to create and append search input elements
 appendsearchInput = () => {
   const searchDiv = document.createElement('div');
   const searchInput = document.createElement('input');
   const searchButton = document.createElement('button');
   searchInput.placeholder = "Searching...";
   searchInput.id = "search-input";
   searchInput.className = 'student-search';
   searchButton.id = "search-button";
   searchButton.className = 'student-search';
   searchButton.innerHTML = "Search";
   searchDiv.appendChild(searchInput);
   searchDiv.appendChild(searchButton);
   document.querySelector('.page-header').appendChild(searchDiv);
}

appendsearchInput();

//search button functionality
const search = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
search.setAttribute('onkeyup', 'searchStudents(search, studentsList)');
search.addEventListener('keyup', () => {
   if (!(document.querySelectorAll('.match').length) && search.value !== "") {
      document.querySelector('#none-found').style.display = "";
      document.querySelector('.pagination').remove();
      appendPageLinks('<ul></ul>');
   } else if (document.querySelectorAll('.match').length) {
      document.querySelector('#none-found').style.display = 'none';
      document.querySelector('.pagination').remove();
      let gotMatch = document.querySelectorAll('.match');
      for (let i = 0; i < gotMatch.length; i++) {
         gotMatch[i].style.display = "";
      }
      appendPageLinks(gotMatch);
      showPage(gotMatch, 1);
   } else if (search.value == "") {
      document.querySelector('.pagination').remove();

   }
}
)
//This is a function set for the search button and this function will search for students within the search button.
searchButton.setAttribute('click', 'searchStudents(search, studentsList)');

function searchStudents(search, students) {
   for(let i = 0; i < students.length; i++) {
      students[i].classList.remove('match');
    if(search.value.length !== 0 && students[i].querySelector('h3').textContent.toLowerCase().includes(search.value.toLowerCase())) {
    students[i].classList.add('match'); 
    } else if(search.value.length === 0) {
      students[i].style.display = "";
   } else {
       students[i].style.display = "none";
      }
    }
  }
   
//Calling all functions
showPage(studentsList, 1);
appendPageLinks(studentsList);
