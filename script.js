window.onload = function() {
  // onLogin();
};

function onLogin() {
  document.querySelector('.login-button').style.display = "none";
  document.querySelector('.terminal').style.transform = 'rotateY(0deg)';

  setTimeout(() => {
    document.querySelector('.picture-container').style.transform = 'scale(1)';
    document.querySelector('.picture-container').style.right = '10px';
    document.querySelector('.picture-container').style.bottom = '0px';
    document.querySelector('.resume-container').style.transform = 'scale(1)';
  }, 500);
}

function onClose() {
  document.querySelector('.terminal').style.transform = 'rotateY(90deg)';
  document.querySelector('.login-button').style.display = "flex";
  setTimeout(() => {
    document.querySelector('.picture-container').style.transform = 'scale(1.2)';
    document.querySelector('.picture-container').style.right = '50px';
    document.querySelector('.picture-container').style.bottom = '45px';
    document.querySelector('.resume-container').style.transform = 'scale(1.5)';
  }, 500);
}




