
function createStars(numberOfStars) {
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      document.body.appendChild(star);
    }
}
  
  createStars(180); 
  document.querySelector('.ham').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('active');
});

// Create the overlay element and append it to the body
const overlay = document.createElement('div');
overlay.className = 'blur-overlay';
document.body.appendChild(overlay);

// Add event listeners to the hover target
const hoverTarget = document.querySelector('.progress-outer');
hoverTarget.addEventListener('mouseenter', () => overlay.style.display = 'block');
hoverTarget.addEventListener('mouseleave', () => overlay.style.display = 'none');

const hoverTarget2 = document.querySelector('.profile-outer');
hoverTarget2.addEventListener('mouseenter', () => overlay.style.display = 'block');
hoverTarget2.addEventListener('mouseleave', () => overlay.style.display = 'none');

const hoverTarget3 = document.querySelector('.socials-outer');
hoverTarget3.addEventListener('mouseenter', () => overlay.style.display = 'block');
hoverTarget3.addEventListener('mouseleave', () => overlay.style.display = 'none');

const hoverTarget4 = document.querySelector('.courses-outer');
hoverTarget4.addEventListener('mouseenter', () => overlay.style.display = 'block');
hoverTarget4.addEventListener('mouseleave', () => overlay.style.display = 'none');

const hoverTarget5 = document.querySelector('.friends-outer');
hoverTarget5.addEventListener('mouseenter', () => overlay.style.display = 'block');
hoverTarget5.addEventListener('mouseleave', () => overlay.style.display = 'none');


function updateEditFriendsButtonState() {
  var button = document.querySelector('.edit-friends-btn');
  var friendsBody = document.querySelector('.friends-body');
  var childrenCount = friendsBody.children.length;

  // Update the button text based on whether there are friends listed or not
  if (childrenCount === 0) {
    // If you want to change button text or properties when there are no friends, do it here
    friendsBody.textContent = 'No Friends :(';
    friendsBody.style.color = 'white';
    friendsBody.style.fontWeight = 'bolder';
    friendsBody.style.textAlign = 'center';
    friendsBody.style.display = 'flex';
    friendsBody.style.alignItems = 'center';
    friendsBody.style.justifyContent = 'center';
    button.textContent = "Add Friends";
    button.href = "img/Huzaifa Vhora.png";
    button.style.color = 'white';
    button.style.backgroundColor = 'transparent';
    button.style.border = 'white 2px solid';
  } else {
    // Reset or adjust properties if needed when there are friends
  }
}

// Add event listener to toggle images and button text/style on '.edit-friends-btn' click
document.querySelector('.edit-friends-btn').addEventListener('click', function() {
  document.querySelectorAll('.message-icon').forEach(function(image) {
      if (image.src.includes('img/message.svg')) {
          image.src = 'img/remove.svg';
          image.style.animation = 'breathing-glow-svg-red 1s ease-in-out infinite';
      } else {
          image.src = 'img/message.svg';
          image.style.animation = '';
      }
  });

  var button = this; // 'this' refers to the '.edit-friends-btn' clicked
  if (button.textContent === "Edit Friends") {
      button.textContent = "Confirm";
      button.style.color = "black";
      button.style.backgroundColor = "white";
      button.style.border = "1px solid black";
  } else {
      button.textContent = "Edit Friends";
      button.style.color = "white";
      button.style.backgroundColor = "transparent";
      button.style.border = "1px solid white";
  }
});

// Attach click event listener to each '.message-icon' for deletion
document.querySelectorAll('.message-icon').forEach(function(icon) {
  icon.addEventListener('click', function() {
      if (this.src.includes('img/remove.svg')) {
          var targetDivId = this.id.slice(0, -3);
          var targetDiv = document.getElementById(targetDivId);
          if (targetDiv) {
              targetDiv.remove(); // Removes the div and all its children from the DOM
              console.log(`Div with ID ${targetDivId} has been deleted.`);
              // Call the update function to reflect changes
              updateEditFriendsButtonState();
          } else {
              console.log(`No div found with ID ${targetDivId}.`);
          }
      } else {
          console.log("This icon's src is not 'img/remove.svg'.");
      }
  });
});

// Initial call to set up the state correctly when the page loads
updateEditFriendsButtonState();




function adjustFriendsBodyRows() {
  var friendsBody = document.querySelector('.friends-body');
  if (friendsBody) {
      var childrenCount = friendsBody.children.length;
      // Assuming you want each row to take up an equal portion of the container
      friendsBody.style.gridTemplateRows = `repeat(${childrenCount}, 30%)`;
  }
}

function updateCoursesEditButton() {
  var button = document.querySelector('.courses-edit-btn');
  var coursesBody = document.querySelector('.courses-body');
  var childrenCount = coursesBody.children.length;

  if(childrenCount === 0) {
    button.textContent = "Add Courses";
    button.href = 'courses.html'; // Make sure your button is an <a> element for this to work.
    button.style.color = "white"; // Text color
    button.style.backgroundColor = "transparent"; // Background color
    button.style.border = "1px solid white"; // Remove border if it was added
  }
  // } else {
  //   button.textContent = "Edit Courses";
  //   // Reset other properties if needed
  // }
}

// Initial setup to ensure correct state
updateCoursesEditButton();

document.querySelector('.courses-edit-btn').addEventListener('click', function() {
  // Toggle images and then update button text and style
  // Your existing code for toggling and style changes
  document.querySelectorAll('.trash-icon').forEach(function(image) {
    if (image.src.includes('img/trash.svg')) {
        image.src = '';
        image.style.animation = ''; // Removed semicolon
    } else {
        image.src = 'img/trash.svg';
        // Optionally, clear the animation if you don't want it applied to the 'message.svg' state
        image.style.animation = 'breathing-glow-svg-red 1s ease-in-out infinite';
    }
});


// Toggle button text and style
var button = this; // 'this' refers to the clicked

var coursesBody = document.querySelector('.courses-body');

var childrenCount1 = coursesBody.children.length;
console.log(childrenCount1);
// If the target div exists, delete it
if(childrenCount1 == 0 && button.textContent == "Edit Courses"){
  console.log("hi");
  button.textContent = "Add Courses";
  button.href = 'courses.html'
}
 else if (button.textContent === "Edit Courses") {
    button.textContent = "Confirm";
    button.style.color = "black"; // Text color
    button.style.backgroundColor = "white"; // Background color
    button.style.border = "1px solid black"; // Optional: add border if needed for visibility
} else {
    button.textContent = "Edit Courses";
    button.style.color = "white"; // Text color
    button.style.backgroundColor = "transparent"; // Background color
    button.style.border = "1px solid white"; // Remove border if it was added
}
  // Call update function here if needed after changes
});

document.querySelectorAll('.trash-icon').forEach(function(icon) {
  icon.addEventListener('click', function(event) {
    event.preventDefault();
    // Your existing deletion logic
    // Check if the element's src is 'img/x-symbol.svg'
    if (this.src.includes('img/trash.svg')) {
      // Determine the target div's ID by removing the last 3 characters from this icon's ID
      var targetDivId = this.id += "-container";
      // Attempt to select the target div using the computed ID
      var targetDiv = document.getElementById(targetDivId);
      var coursesBody = document.querySelector('.courses-body');

      var childrenCount = coursesBody.children.length;
      // console.log(childrenCount);
      // If the target div exists, delete it
      if(childrenCount == 1){
        while (targetDiv.firstChild) {
          targetDiv.removeChild(targetDiv.firstChild);
        }
        coursesBody.textContent = 'No Courses :(';
        coursesBody.style.color = 'white';
        coursesBody.style.fontWeight = 'bolder';
        coursesBody.style.textAlign = 'center';
        coursesBody.style.display = 'flex';
        coursesBody.style.alignItems = 'center';
        coursesBody.style.justifyContent = 'center'
      }
      else if (targetDiv) {
          targetDiv.remove(); // This removes the div and all its children from the DOM
          console.log(`Div with ID ${targetDivId} has been deleted.`);
          
          // After deletion, adjust the .friends-body grid-template-rows
          adjustCoursesBodyRows();
          
      } else {
          console.log(`No div found with ID ${targetDivId}.`);
      }
  } else {
      // Handle the case where the src is not 'img/x-symbol.svg'
      console.log("This icon's src is not 'img/remove.svg'.");
  }
    // Update the button state after a course is removed
    updateCoursesEditButton();
  });
});

function adjustCoursesBodyRows() {
  var coursesBody = document.querySelector('.friends-body');
  if (coursesBody) {
      var childrenCount = coursesBody.children.length;
      // Assuming you want each row to take up an equal portion of the container
      coursesBody.style.gridTemplateRows = `repeat(${childrenCount}, 30%)`;
  }
}



