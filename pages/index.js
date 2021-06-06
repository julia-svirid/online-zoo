const signUpBtn = document.querySelector(".sign-up");
const logInBtn = document.querySelector(".log-in");
const popUpBg = document.querySelector(".pop-up_bg");
const popUp = document.querySelector(".pop-up");
const logInToggle = document.querySelector(".log-in_tab");
const createAccToggle = document.querySelector(".create-acc_tab");
const toggleButtons = document.querySelector(".pop-up_toggle");
const nameInput = document.querySelector("#name");
const nameInputLabel = document.querySelector(".name-label");
const checkboxAgree = document.querySelector(".checkbox_agree");
let state = "signUp";
const openPopUp = () => {
  popUpBg.classList.remove("hidden");
  popUp.classList.remove("hidden");
};
const openSignUp = () => {
  openPopUp();
  signUpMode();
};
signUpBtn.addEventListener("click", openSignUp);
const hidePopUp = () => {
  popUpBg.classList.add("hidden");
  popUp.classList.add("hidden");
}
popUpBg.addEventListener("click", hidePopUp);
const logInMode = () => {
  state = "logIn";
  createAccToggle.classList.remove("toggle_mode");
  logInToggle.classList.add("toggle_mode");
  nameInput.classList.add("hidden");
  nameInputLabel.classList.add("hidden");
  checkboxAgree.classList.add("hidden");
};
const signUpMode = () => {
  state = "signUp";
  createAccToggle.classList.add("toggle_mode");
  logInToggle.classList.remove("toggle_mode");
  nameInput.classList.remove("hidden");
  nameInputLabel.classList.remove("hidden");
  checkboxAgree.classList.remove("hidden");
};

const openLogIn = () => {
  openPopUp();
  logInMode();
};

logInBtn.addEventListener("click", openLogIn);
const toggleModes = (event) => {
  if (event.target.classList.contains("log-in_tab")) {
    logInMode();
  }
  if (event.target.classList.contains("create-acc_tab")) {
    signUpMode();
  }
};
toggleButtons.addEventListener("click", toggleModes);
const sendButton = document.querySelector(".send-btn");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const checkbox = document.querySelector("#agree");
let loggedIn = false;
const isFormFilled = (event) => {
  let empty = false;
  if (state === "signUp") {
    if (inputName.value === "" || inputEmail.value === "") {
        empty = true;
        inputName.placeholder = "Fill the input";
    }
    if (empty === true) {
      alert("Fill all inputs!");
      event.preventDefault();
    }
    if (inputPassword.value.length < 8) {
      inputPassword.placeholder = "Password is too short";
      event.preventDefault();
    }
    if (!checkbox.checked) {
        console.log(checkbox.checked);
      alert("Agree with terms");
      event.preventDefault();
    }
    else {
      loggedIn = true;
    }
  }
  if (state === "logIn") {
    if (inputEmail.value === "") {
        empty = true;
    }
    if (empty === true) {
        alert("Fill all inputs!");
        event.preventDefault();
      }
    if (inputPassword.value.length < 8) {
        inputPassword.value = "";
        inputPassword.placeholder = "Password is too short";
        event.preventDefault();
      }
      else {
        loggedIn = true;
      }
  }
    if (loggedIn === true) {
      console.log('logged');
    }
};
sendButton.addEventListener("click", isFormFilled);
const validateEmail = () => {
    const re = /^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/;
    const validEmail = re.test(String(inputEmail.value).toLowerCase());
    if (validEmail === false) {
        inputEmail.value = "";
        inputEmail.placeholder = "Invalid email";
    }
}
sendButton.addEventListener("click", validateEmail);
const userIcon = document.querySelector(".media-sign-up");
const getUserName = () => {
  const userName = inputName.value;
  return userName;
}
const userIconContainer =  document.querySelector(".username-icon");
const createUsernameTooltip = (personName) => {
  let tooltip = document.createElement("div");
  tooltip.classList.add("username-tooltip");
  userIconContainer.prepend(tooltip);
  tooltip.innerHTML = `<p>${personName}</p>`;
}

const loginInAccount = () => {
  if (loggedIn === true) {
    hidePopUp();
    signUpBtn.classList.add("hidden");
    logInBtn.classList.add("hidden");
    userIcon.classList.remove("hidden");
    userIconContainer.classList.remove("hidden");
    createUsernameTooltip(inputName.value);
  }
}
sendButton.addEventListener("click", loginInAccount);
const googleBtn = document.querySelector(".pop-up_google-btn");
const facebookBtn = document.querySelector(".pop-up_facebook-btn");
const socialBtns = document.querySelector(".pop-up_social");

socialBtns.addEventListener("click", (event) => {
  loggedIn === true;
  hidePopUp();
  signUpBtn.classList.add("hidden");
  logInBtn.classList.add("hidden");
  userIcon.classList.remove("hidden");
  if (event.target.classList.contains("pop-up_google-btn")) {
    createUsernameTooltip("Logged with google");
  }
  if (event.target.classList.contains("pop-up_facebook-btn")) {
    createUsernameTooltip("Logged with facebook");
  }
});
const userMenu = document.querySelector(".user-menu");
const openUserMenu = () => {
  if (userMenu.classList.contains("hidden")) {
    userMenu.classList.remove("hidden");
  }
}
const closeUserMenu = () => {
  if (!userMenu.classList.contains("hidden")) {
    userMenu.classList.add("hidden");
  }
}
userIcon.addEventListener("click", closeUserMenu);
userIcon.addEventListener("click", openUserMenu);
const logOutBtn =  document.querySelector(".log-out-btn");

const logOut = () => {
  loggedIn = false;
  signUpBtn.classList.remove("hidden");
  logInBtn.classList.remove("hidden");
  userIconContainer.classList.add("hidden");
}
logOutBtn.addEventListener('click', logOut);

/* Slider */
const buttonRight = document.querySelector(".pet-arrow-right");
const buttonLeft = document.querySelector(".pet-arrow-left");
const sliderLineFirst = document.querySelector(".slider-line-first");
const sliderLineSecond = document.querySelector(".slider-line-second");
const cardsFirst = document.querySelectorAll(".slider-line-first .pet-card");
const cardsSecond = document.querySelectorAll(".slider-line-second .pet-card");
let offset = 0;
let step = 0;
let slider = [];
const init = (line) => {
  for (let i = 0; i < line.length; i++) {
    slider[i] = line[i];
    slider[i].remove();
  }
};

const draw = () => {
  let card = document.createElement("div");
  card.classList.add("pet-card");
  card = slider[step];
  card.style.left = 350 + "px";
  sliderLineFirst.appendChild(card); 
  if (step + 1 === slider.length) {
    step = 0;
  }
  else {
    step++;
  }
  offset = 2;
  console.log(card);
}
let offset2 = 0;
const left = () => {
  let slides = document.querySelectorAll(".slider-line-first .pet-card");

  for (let i = 0; i < slides.length - 1; i++)  {
    slides[i].style.left = offset2*350 - 350 + "px";
    offset2++;
  }
  console.log(offset2);
}
buttonLeft.addEventListener("click", () => {
  console.log('left');
  init(cardsFirst);
  draw();
  left();
});

const right = () => {
  let slides = document.querySelectorAll(".slider-line-first .pet-card");
  for (let i = slides.length - 1; i>0; i--) {
    slides[i].style.left = offset2*350 + 350 + "px";
    offset2--;
  }
  console.log(offset2);
}

buttonRight.addEventListener("click", () => {
  console.log('right');
  init(cardsFirst);
  draw();
  draw();
  draw();
  right();
});

/* Leave feedback popup */
const leaveCommentBtn = document.querySelector(".testimonials-button");
const popUpFeedback = document.querySelector(".leave-feedback");
const openFeedbackPopUp = () => {
  popUpBg.classList.remove("hidden");
  popUpFeedback.classList.remove("hidden");
};
const hideFeedbackPopUp = () => {
  popUpBg.classList.add("hidden");
  popUpFeedback.classList.add("hidden");
}
popUpBg.addEventListener("click", hideFeedbackPopUp);
leaveCommentBtn.addEventListener("click", openFeedbackPopUp);

/*Add animal popup */
const addAnimalBtn = document.querySelector(".add-pet_btn");
const popUpAddAnimal = document.querySelector(".add-animal");
const openAddAnimalPopUp = () => {
  popUpBg.classList.remove("hidden");
  popUpAddAnimal.classList.remove("hidden");
};
const hideAddAnimalPopUp = () => {
  popUpBg.classList.add("hidden");
  popUpAddAnimal.classList.add("hidden");
}
popUpBg.addEventListener("click", hideAddAnimalPopUp);
addAnimalBtn.addEventListener("click", openAddAnimalPopUp);

const uploadPhotoBtn = document.querySelector(".upload-container  label");
const photoFile = document.querySelector(".upload-container input").files[0];

function previewFile() {
  const preview = document.querySelector('.preview');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

