/******************************************
JavaScript List Filtering and Pagination App.
******************************************/
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//These are the define all global variables 
// The first variable within the global scope will query a list called"student-item" which has 54 students.
// The second variable is set to ten students per page
let studentsList = document.querySelectorAll('li');
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
   let startIndex = (page * studentsPages) - studentsPages;
   let endIndex = page * studentsPages;

   for(let i = 0; i < list.length; i++) {// The students List will be going through a loop 
      if(i >= startIndex && i < endIndex) {
         list[i].style.display = 'block';// This will show the pages
      } else {
         list[i].style.display = 'none';//This will hide the students pages
      }
   }
}

// showPage(studentsList, 2); Tested the code and called function and it displayed the ten students and hid the rest of the list.
 /*The `appendPageLinks function` will generate, append, and add functionality to the pagination buttons.*/
 const appendPageLinks = (list) => {
   const paginationDiv= document.createElement('div');// Creating div and creating an element for div
   const PageOfDivElement = document.querySelector('.page');//The parent is PageOfDivElement and it will select the class name .page from the HTML file
   const ul = document.createElement('ul');//Creating an element for ul
   const AmtofPages = Math.ceil(list.length / 10);// This is calculating the total number of pages from the student list.
   paginationDiv.className = "pagination";// Giving class name to the parent "paginationDiv"

   PageOfDivElement.appendChild(paginationDiv);// Appending the parent to the child (paginationDiv)
   paginationDiv.appendChild(ul);//Appending the child to (ul)

   
   for(let i = 0; i <AmtofPages; i++){//For loop to set the amount of pages to loop 10 students per page
      const li = document.createElement('li');// Adding a <li> name tag 
      ul.appendChild(li);// Appending the child to the li
      const link = document.createElement('a');// Adding <a> name tag
      link.href = '#';// This is the href and it's assigned to # which will pulled from the HTML file
      link.textContent = i + 1;//Makes the text content will be value of i
      li.appendChild(link);//Appending the child to the (link)
      //Tested the the function
      showPage(list, i,);
   }

   const anchors = document.querySelectorAll('a');// This is a query selector and it will select all a tags.

   ul.firstElementChild.firstElementChild.className = "active";//Set the first element child to active classname

   for(let i = 0; i < anchors.length; i++) {// This is the for loop and it will loop through the anchors
      anchors[i].addEventListener('click', (event) => {// This is the eventlistner and when the click is pressed by user the event will listen for the click.
   const li_list = ul.getElementsByTagName('li');// This is get the all elements by pulling the Tag name li

   for(let i = 0; i < li_list.length; i++) {// This is the for loop and it will loop through the list
    li_list.item(i).firstElementChild.className = "";//This is the firstElement child (li_list.item)
   }
      event.target.className = "active";// set event target classname to active
      showPage(list, event.target.textContent);//This is the showPage function and it worked
   })
}
}



//function to create and append search input elements

function appendSearchInput() {
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

appendSearchInput();

//search bar functionality
const search = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
search.setAttribute('onkeyup', 'searchStudents(search, studentsList)');
search.addEventListener('keyup', () => {
   if(!(document.querySelectorAll('.match').length) && search.value !== ""){
   document.querySelector('#none-found').style.display = "";
   document.querySelector('.pagination').remove();
   appendPageLinks('<ul></ul>');
   } else if(document.querySelectorAll('.match').length) {
      document.querySelector('#none-found').style.display = "none";
      document.querySelector('.pagination').remove();
      let gotMatch = document.querySelectorAll('.match');
      for(let i = 0; i < gotMatch.length; i++) {
        gotMatch[i].style.display = "";
      }
      appendPageLinks(gotMatch);
      showPage(gotMatch, 1);     
   } else if(search.value == "") {
      document.querySelector('.pagination').remove();
      appendPageLinks(studentsList);
      showPage(studentsList, 1);
   }
}
)
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
appendPageLinks(studentsList);
showPage(studentsList, 1);