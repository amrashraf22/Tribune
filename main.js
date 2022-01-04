const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");





form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task =     `   
  
  <div class="task">
  <span class="icon-star icon"> </span>
  <p>      ${input.value }     </p>

  <div>
    <span class="icon-trash icon"> </span>

    <span class="icon-angry2 icon"> </span>
  </div>

 </div>

  
  
  `

  container.innerHTML += task;
});



 
