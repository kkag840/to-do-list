// Get references to input box and list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let btn = document.querySelector("button");

// Event listener for adding a new task
btn.addEventListener("click", () => {
   // Check if input box is empty
   if (inputBox.value === '') {
      alert("Bhai kuch likh to sahi 😂😂");
   } else {
      // Create a new list item
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);

      // Create a delete button for the task
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
   }
   inputBox.value = ''; // Clear input box
   saveData(); // Save data to local storage
});

// Event listener for checking or deleting a task
listContainer.addEventListener("click", function(e) {
   // Toggle the checked class for list items
   if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
   // Remove task if delete button is clicked
   } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
   }
   saveData(); // Save data to local storage
}, false);

// Function to save data to local storage
function saveData() {
   localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show tasks from local storage
function showTask() {
   listContainer.innerHTML = localStorage.getItem("data");
}

// Call showTask on page load to display saved tasks
showTask();
