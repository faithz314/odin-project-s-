const container= document.querySelector('#container');

const content= document.createElement("div");
content.classList.add("content");
content.textContent= "This is the glorious text-content!";

container.appendChild(content);


//exercises 1-3:
const red= document.createElement('p');
red.style.color= 'red';
red.textContent= "Hey I'm red!";
container.appendChild(red);


const blueHeading= document.createElement('h3');
blueHeading.style.color= 'blue';
blueHeading.textContent= "I'm a blue h3!";
container.appendChild(blueHeading)


const newDiv= document.createElement('div');
newDiv.setAttribute('style', 'background-color: pink; border: 2px black;');


const newHeading= document.createElement('h1');
newHeading.textContent = "I'm in a div hehhe";
newDiv.appendChild(newHeading);

const newP= document.createElement('p');
newP.textContent= "ME TOOOO";
newDiv.appendChild(newP)


container.appendChild(newDiv)





console.log('run finished')