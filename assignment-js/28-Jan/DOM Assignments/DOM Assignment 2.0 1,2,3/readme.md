## DOM Assignment 1
### Task 1
![](firstAssignmentImage/task1Output.png)
```javascript
// removing Contact from navItems
let navItems = document.querySelector("nav ul");
navItems.removeChild(navItems.lastElementChild);

// Adding Projects and HireMe to navItem

function appendNewNavLink(link, name) {
    let element = document.createElement("li");
    element.innerHTML = `<li><a href="${link}">${name}</a></li>`;
    let navItems = document.querySelector("nav ul");
    navItems.appendChild(element);
}
appendNewNavLink("#", "Projects");
appendNewNavLink("#", "Hire Me");
```

### Task 2
![](firstAssignmentImage/task2Output.png)

```javascript
// remove HireMe
let navItems2 = document.querySelector("nav ul");
navItems.removeChild(navItems.lastElementChild);

// change search placeholder
let searchElement = document.querySelector(".search-field input");
searchElement.placeholder = "Search My Projects";
```

### Task 3
![](firstAssignmentImage/task3Output.png)

```javascript
// change in role and company
let aboutDeveloper = document.querySelectorAll(
".hero-left-section p span"
);

aboutDeveloper[1].innerText = "an Employee";
aboutDeveloper[2].innerText = "iNeuron intelligence Pvt Ltd";
```

### Task 4
![](firstAssignmentImage/task4Output.png)

```javascript
// change image source

let imgElement = document.querySelector(".hero-right-section img");
imgElement.src =
"https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

### Task 5
![](firstAssignmentImage/task5Output.png)

```javascript
// Create Support Me button

let btnDivElement = document.querySelector(".hero-right-section-btns");
let btnElement = document.createElement("button");
btnElement.innerText = "Support Me";
btnDivElement.appendChild(btnElement);
```
## DOM Assignment 02
### Task 1
*change background color of accordion heading and paragraph*

![](secondAssignmentImage/task1Output.png)
```javascript

let accordion = document.querySelectorAll(".accordian h3");
accordion.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;

    // change accordion paragraph background color
    para.style.backgroundColor = "#ececfe";

    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
  // change accordion heading background color
  element.style.backgroundColor = "#d6d6f6";
});
```
### Task 2
*Adding new accordion*

![](secondAssignmentImage/task2Output.png)
```javascript
// creating a new accordion
let accordianWrapper = document.querySelector(".accordian-wrapper");
let accordionElement = document.createElement("div");
accordionElement.innerHTML = ` 
<h3>Skills</h3>
<p>I possess a very good command over Full Stack Development technologies like MERN which can be seen im my work over the github</p>
`;
accordionElement.classList.add("accordian");
accordianWrapper.appendChild(accordionElement);
console.log(accordionElement);

// adding click event to all the accordion and changing background color
let accordion = document.querySelectorAll(".accordian h3");
accordion.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;

    // change accordion paragraph background color
    para.style.backgroundColor = "#ececfe";

    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
  // change accordion heading background color
  element.style.backgroundColor = "#d6d6f6";
});
```