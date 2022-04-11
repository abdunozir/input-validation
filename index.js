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
  try {
    let el = e.target.value;
    if (el.length >= 6) {
      parolniTekshir(el);
    } else if (0 < el.length < 6) {
      userpassword.style.borderColor = 'red';
      userpasswordErr.innerHTML = "Kamida 6 ta belgidaniborat bo'lsin";
    } else {
      userpassword.style.borderColor = '#fff';
      userpasswordErr.innerHTML = '';
    }
  } catch (e) {
    console.log(e);
  }
});

let intiger = false;
let symbol = false;
let upper = false;
let lower = false;
let allowed_symbols = '!@#$%^&*()_+-{}:";\'`<>,.?/|.';

function parolniTekshir(el) {
  const split_password = el.split('');

  for (let el1 of split_password) {
    console.log('inside forEach');
    if (!Number.isNaN(+el1)) {
      intiger = true;
    } else if (allowed_symbols.includes(el1)) {
      symbol = true;
    } else if (el1.toUpperCase() == el1) {
      upper = true;
    } else if (el1.toLowerCase() == el1) {
      lower = true;
    } else {
    }
  }

  validateEl();
}

function validateEl() {
  if (!intiger) {
    userpasswordErr.innerHTML = `Raqamdan foydalaning`;
    userpassword.style.borderColor = 'red';
  } else if (!symbol) {
    userpasswordErr.innerHTML = `Symbollardan foydalaning`;
    userpassword.style.borderColor = 'red';
  } else if (!upper) {
    userpasswordErr.innerHTML = `Katta harflardan foydalaning`;
    userpassword.style.borderColor = 'red';
  } else if (!lower) {
    userpasswordErr.innerHTML = `Kichik harflardan foydalaning`;
    userpassword.style.borderColor = 'red';
  } else {
    userpasswordErr.innerHTML = "<span> To'g'ri foydalandingiz! </span>";
    userpassword.style.borderColor = 'blue';
    lower = false;
    symbol = false;
    intiger = false;
    upper = false;
  }
}

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
  if (username.value == '') {
    alert('ismingizni kiriting');
    username.style.borderColor = ' red';
  } else if (username.value !== '') {
    username.style.borderColor = 'rgb(227, 227, 227)';
  }
  if (usersurname.value == '') {
    console.log('ads');
    alert('Familiangizni kiriting');
    usersurname.style.borderColor = ' red';
  } else if (usersurname.value !== '') {
    usersurname.style.borderColor = 'rgb(227, 227, 227)';
  }

  if (userEmail.value == '') {
    console.log('ads');
    alert('Emailingizni kiriting');
    userEmail.style.borderColor = ' red';
  } else if (userEmail.value !== '') {
    userEmail.style.borderColor = 'rgb(227, 227, 227)';
  }

  if (userpassword.value == '') {
    console.log('ads');
    alert('parol kiriting');
    userpassword.style.borderColor = ' red';
  } else if (userpassword.value !== '') {
    userpassword.style.borderColor = 'rgb(227, 227, 227)';
  }
}
