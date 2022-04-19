// e-mail input checking...
let userEmail = document.querySelector('.useremail');
let userEmailErr = document.querySelector('.userEmailErr');

userEmail.addEventListener('keyup', (e) => {
  try {
    if (e.target.value.length == 0 || e.target.value == ' ') {
      userEmailErr.innerHTML = '';
      userEmail.classList.remove('isinvalid');
      userEmailErr.classList.remove('isalert');
      userEmail.classList.remove('isvalid');
      console.log('asdas');
    } else if (e.target.value.includes('@') !== true) {
      userEmail.classList.add('isinvalid');
      userEmail.classList.remove('isvalid');
      userEmailErr.classList.add('isalert');
      userEmailErr.classList.remove('isnotalert');
      userEmailErr.innerHTML = '@  belgidan fodalaning!';
      throw 'emailni hato kiritdingiz';
    } else if (e.target.value.includes('@') == true) {
      userEmail.classList.add('isvalid');
      userEmail.classList.remove('isinvalid');
      userEmailErr.classList.remove('isalert');
      userEmailErr.classList.add('isnotalert');
      userEmailErr.innerHTML = "To'g'ri foydalandingiz!";
    }
  } catch (e) {
    console.log(e);
  }
});

// password checking...
const userpassword = document.querySelector('#userpassword');
const userpasswordErr = document.querySelector('.userpasswordErr');

userpassword.addEventListener('keyup', (e) => {
  if (e.target.value.length > 6) {
    userpasswordErr.classList.remove('isvalid1');

    if (!e.target.value.match(/[A-Z]/)) {
      userpasswordErr.innerHTML = 'kATTA harfdan foydalaning';
      userpassword.style.borderColor = ' red';
    } else if (!e.target.value.match(/[a-z]/)) {
      userpasswordErr.innerHTML = 'kichik harfdan foydalaning';
      userpassword.style.borderColor = ' red';
    } else if (!e.target.value.match(/[!@#\$%.:;'"/?,<>}{`}]/)) {
      userpasswordErr.innerHTML = 'Bitta belgidan foydalaning';
      userpassword.style.borderColor = ' red';
    } else if (!e.target.value.match(/[0-9]/)) {
      userpasswordErr.innerHTML = 'Bitta raqatmdan foydalaning!';
      userpassword.style.borderColor = ' red';
    } else {
      userpasswordErr.innerHTML = `To'g'ri foydalandingiz!`;
      userpasswordErr.classList.add('isvalid1');
      userpassword.style.borderColor = 'rgb(227, 227, 227)';
    }
  } else {
    userpasswordErr.innerHTML = 'parol uzunligi 6 dan katta bolsin';
  }
});

// repeat password
const userpassword2 = document.querySelector('#userpassword2');
const userpasswordErr2 = document.querySelector('.userpasswordErr2');

userpassword2.addEventListener('keyup', (e) => {
  if (userpassword.value.length > 0) {
    if (e.target.value !== userpassword.value) {
      userpassword2.classList.add('isinvalid');
      userpasswordErr2.innerHTML = "Yuqoridagi parol bilan birhil bo'lsin";
    } else {
      userpasswordErr2.innerHTML = "<span> To'g'ri foydalandingiz! </span>";
      userpassword2.classList.add('isvalid');
      userpassword2.classList.remove('isinvalid');
    }
  } else {
    userpasswordErr2.innerHTML = 'Yuqoridagi formga parol kiritmadingiz!!';
    userpassword2.classList.add('isinvalid');
  }
});

// submit
const usersurname = document.querySelector('#usersurname');

function submitted(e) {
  e.preventDefault();
  if (username.value.length == 0) {
    username.style.borderColor = ' red';
  } else {
    username.style.borderColor = 'rgb(227, 227, 227)';
  }
  if (usersurname.value.length == 0) {
    usersurname.style.borderColor = ' red';
  } else {
    usersurname.style.borderColor = 'rgb(227, 227, 227)';
  }

  if (userEmail.value.length == 0) {
    userEmail.style.borderColor = ' red';
  } else {
    userEmail.style.borderColor = 'rgb(227, 227, 227)';
  }
  if (userEmail.value.length == 0) {
    userpassword2.style.borderColor = ' red';
  } else {
    userpassword2.style.borderColor = 'rgb(227, 227, 227)';
  }

  if (userpassword.value.length == 0) {
    userpassword.style.borderColor = ' red';
  } else {
    userpassword.style.borderColor = 'rgb(227, 227, 227)';
  }
}
