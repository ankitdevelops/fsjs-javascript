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