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

// const overlay = document.createElement('div');
// overlay.className = 'blur-overlay';
// document.body.appendChild(overlay);


// const hoverTarget = document.querySelector('.progress-outer');
// hoverTarget.addEventListener('mouseenter', () => overlay.style.display = 'block');
// hoverTarget.addEventListener('mouseleave', () => overlay.style.display = 'none');

// const hoverTarget2 = document.querySelector('.profile-outer');
// hoverTarget2.addEventListener('mouseenter', () => overlay.style.display = 'block');
// hoverTarget2.addEventListener('mouseleave', () => overlay.style.display = 'none');

// const hoverTarget3 = document.querySelector('.socials-outer');
// hoverTarget3.addEventListener('mouseenter', () => overlay.style.display = 'block');
// hoverTarget3.addEventListener('mouseleave', () => overlay.style.display = 'none');

// const hoverTarget4 = document.querySelector('.courses-outer');
// hoverTarget4.addEventListener('mouseenter', () => overlay.style.display = 'block');
// hoverTarget4.addEventListener('mouseleave', () => overlay.style.display = 'none');

// const hoverTarget5 = document.querySelector('.friends-outer');
// hoverTarget5.addEventListener('mouseenter', () => overlay.style.display = 'block');
// hoverTarget5.addEventListener('mouseleave', () => overlay.style.display = 'none');


function updateEditFriendsButtonState() {
  var button = document.querySelector('.edit-friends-btn');
  var friendsBody = document.querySelector('.friends-body');
  var childrenCount = friendsBody.children.length;

  
  if (childrenCount === 0) {

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

  }
}

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

  var button = this; 
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

document.querySelectorAll('.message-icon').forEach(function(icon) {
  icon.addEventListener('click', function() {
      if (this.src.includes('img/remove.svg')) {
          var targetDivId = this.id.slice(0, -3);
          var targetDiv = document.getElementById(targetDivId);
          if (targetDiv) {
              targetDiv.remove();
              console.log(`Div with ID ${targetDivId} has been deleted.`);
              updateEditFriendsButtonState();
          } else {
              console.log(`No div found with ID ${targetDivId}.`);
          }
      } else {
          console.log("This icon's src is not 'img/remove.svg'.");
      }
  });
});

updateEditFriendsButtonState();




function adjustFriendsBodyRows() {
  var friendsBody = document.querySelector('.friends-body');
  if (friendsBody) {
      var childrenCount = friendsBody.children.length;
      friendsBody.style.gridTemplateRows = `repeat(${childrenCount}, 30%)`;
  }
}

function updateCoursesEditButton() {
  var button = document.querySelector('.courses-edit-btn');
  var coursesBody = document.querySelector('.courses-body');
  var childrenCount = coursesBody.children.length;

  if(childrenCount === 0) {
    button.textContent = "Add Courses";
    button.href = 'courses.html'; 
    button.style.color = "white";
    button.style.backgroundColor = "transparent"; 
    button.style.border = "1px solid white"; 
  }
}

updateCoursesEditButton();

document.querySelector('.courses-edit-btn').addEventListener('click', function() {
  document.querySelectorAll('.trash-icon').forEach(function(image) {
    if (image.src.includes('img/trash.svg')) {
        image.src = '';
        image.style.animation = ''; 
    } else {
        image.src = 'img/trash.svg';
        image.style.animation = 'breathing-glow-svg-red 1s ease-in-out infinite';
    }
});


var button = this; 
var coursesBody = document.querySelector('.courses-body');

var childrenCount1 = coursesBody.children.length;
console.log(childrenCount1);
if(childrenCount1 == 0 && button.textContent == "Edit Courses"){
  console.log("hi");
  button.textContent = "Add Courses";
  button.href = 'courses.html'
}
 else if (button.textContent === "Edit Courses") {
    button.textContent = "Confirm";
    button.style.color = "black"; 
    button.style.backgroundColor = "white"; 
    button.style.border = "1px solid black"; 
} else {
    button.textContent = "Edit Courses";
    button.style.color = "white"; 
    button.style.backgroundColor = "transparent";
    button.style.border = "1px solid white";
}
});

document.querySelectorAll('.trash-icon').forEach(function(icon) {
  icon.addEventListener('click', function(event) {
    event.preventDefault();
    if (this.src.includes('img/trash.svg')) {
      
      var targetDivId = this.id += "-container";
      var targetDiv = document.getElementById(targetDivId);
      var coursesBody = document.querySelector('.courses-body');

      var childrenCount = coursesBody.children.length;
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
          targetDiv.remove(); 
          console.log(`Div with ID ${targetDivId} has been deleted.`);
          
          adjustCoursesBodyRows();
          
      } else {
          console.log(`No div found with ID ${targetDivId}.`);
      }
  } else {
      console.log("This icon's src is not 'img/remove.svg'.");
  }
    updateCoursesEditButton();
  });
});

function adjustCoursesBodyRows() {
  var coursesBody = document.querySelector('.friends-body');
  if (coursesBody) {
      var childrenCount = coursesBody.children.length;
      coursesBody.style.gridTemplateRows = `repeat(${childrenCount}, 30%)`;
  }
}



