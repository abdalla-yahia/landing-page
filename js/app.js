//Create variables used within the file 

let form       = document.querySelector('form'           );
let selector   = document.querySelector("[name='select']");
let divSection = document.querySelector(".section"       );
let inputText  = document.querySelector(".textInput"     );
let ullist     = document.querySelector(".unli"          );
let nav        = document.querySelector(".nav"           );
let ancorList  = document.querySelector(".list a"        );
let btn        = document.querySelector(".btn"           );

//Create an array to put the elements (section) in it
let array      = [];
//Create an array to put the elements (li) in it
let list = [];
//Create a counter to count the number of items created
let count      = 0;




//*******************************  Start New Event by click add button  ***********

form.addEventListener("submit", function () {

    if (selector.value === "<section></section>") {

//######################## Start Of Creat Section ##############################

      //Create a new item (section) and add (class + id )
            let newsection = document.createElement('section');
            newsection.id = `${count + 1}-section`;
            newsection.dataset.position = "";
            newsection.classList.add("newSection");
        // add new section to array
            array.push(newsection);
        // add new section to his parent (div) with class "section"
            divSection.appendChild(newsection)

        // creat new header "h1" 
            let newHeader = document.createElement("h1");
            newHeader.innerText = `Section ${count + 1}`;
            let hr = document.createElement("hr");
        // add the header to his parent section
            newsection.appendChild(newHeader);
            newsection.appendChild(hr);
        //Creat new paragraph with content text "Lorem"
            let newParagraph = document.createElement("p");
            newParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, iure delectus explicabo expedita debitis libero necessitatibus tenetur rem voluptas deserunt suscipit molestias maiores magnam ut sapiente sint quae culpa. Dicta?";
        //add paragraph to section
        newsection.appendChild(newParagraph)
        
//######################## End of Creat Section ###################################

        // Creat new list "li" element
            let newli = document.createElement("li");
        //add class name to li that's  equal his parent section id
            newli.className = `${count + 1}-section`;
            let newAncor = document.createElement("a");
            newAncor.innerText = `${newHeader.innerText}`;
            newli.appendChild(newAncor);
        //add the li element to unordered list
            ullist.appendChild(newli);
        //add "li" element to array with name list
            list.push(newli)
        //The counter is incremented by one with each press of the Add button
            count++;
    }

// Create a LOOP on the elements of an array containing (section) To place event click to li element
    array.forEach(function (e) {
        //loop on "li" elements
            list.forEach(function (el) {
            // place event click to each element "li"
            el.addEventListener("click", function () {
            if (el.className === e.id) {
                            
                    scrollTo({
                        top: e.offsetTop + 350,
                        behavior: "smooth"
                    })
                }
                })
        })
    })
    setData()

    
    })

//*******************************  End New Event by click add button  ***********


// This function to set the section on right or on left by it's numper
function setData() {
        
    array.forEach(function (e) {

        if (parseInt(e.id) % 2 === 0)
        //if the numper of section are even add "right " to data-position
        {
            e.dataset.position = "right";
        }
        else
        {
            //if the numper of section are odd add "left " to data-position
            e.dataset.position = "left";
        }
        
    })
}



//***************Start New scroll event for the page**********************
window.onscroll = function () {
    // Show the button when going down to a specific part of the page
    if (window.scrollY >= 600) {
        
        btn.style.display = "block";
        btn.style.transition = "1s";
    }
    //Hide the button when going up to a specific part of the page
    else { btn.style.display = "none";
    btn.style.transition = "1s";
    }
    
    let scrposi = document.documentElement.scrollTop;

    array.forEach(function (e) {

//Add an "active" class to the section that appears on the page and remove the active from all elements
        if (scrposi >= e.offsetTop && scrposi < e.offsetTop + e.offsetHeight) {
            array.forEach(function (el) {
                el.classList.remove("active");
            })
            
            e.classList.add("active");
            //Add Class "acti" to "li" which is equal to the section number on which ClassActive is placed
            list.forEach(function (el) {
                if (el.className === e.id) {
                    list.forEach(function (e) {
                        e.classList.remove("acti");
                    })
                    el.classList.add("acti");
                }
            })
        }
    })
}

//When you press the Up button, it moves to the top of the page
btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior:"smooth"
    })
}

//***************End New scroll event for the page**********************