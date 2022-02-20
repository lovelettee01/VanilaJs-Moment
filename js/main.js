const loginForm = document.querySelector("#loginForm");
const logoutBtn = document.querySelector("#logoutBtn");
const LOGIN_KEY = "Moment_Login";
let LOGINED_DATA = null;

//Visible Login Controller
function loginCompleted(isLogin) {
  const HIDDEN_CLASS = "hidden";
  const sectionLogined = document.querySelector("#logined");
  const sectionNonLogin = document.querySelector("#nonLogin");
  const loginedInfo = document.querySelector("#loginedInfo");

  if (isLogin) {
    sectionLogined.classList.remove(HIDDEN_CLASS);
    sectionNonLogin.classList.add(HIDDEN_CLASS);

    //visible Logout Area
    loginedInfo.querySelector("em").innerHTML = LOGINED_DATA.email;
    loginedInfo.classList.remove(HIDDEN_CLASS);

    try {
      loadTodoList();
    } catch (e) {}
  } else {
    sectionLogined.classList.add(HIDDEN_CLASS);
    sectionNonLogin.classList.remove(HIDDEN_CLASS);

    //unvisible Logout Area
    loginedInfo.querySelector("em").innerHTML = "";
    loginedInfo.classList.add(HIDDEN_CLASS);
  }
}

/* Login Check */
function isLogin() {
  return !isNull(LOGINED_DATA);
}

//Form Submit Event Handler
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginForm.classList.add("was-validated");

  /* set / get Login Info in Local Storage */
  const loginEmailValue = document.querySelector("#login_email").value;
  LOGINED_DATA = {
    email: loginEmailValue,
    loginDate: new Date(),
  };
  setStorage(LOGIN_KEY, LOGINED_DATA);
  loginCompleted(true); //Login Success
});

//logout Click Event Handler
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("was-validated");

  /* Initialize */
  document.querySelector("#login_email").value = "";
  document.querySelector("#todoListUl").innerHTML = "";
  LOGINED_DATA = null;

  localStorage.removeItem(LOGIN_KEY);
  loginCompleted(false); //Logout Success
});

// Page Onload Event!
window.addEventListener("load", () => {
  LOGINED_DATA = getStorage(LOGIN_KEY);
  loginCompleted(!isNull(LOGINED_DATA));
});
