const login = document.querySelector('.loginBtn');
const register = document.querySelector('.registerBtn');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const alert = document.querySelector('.alert');

register.addEventListener('click',(e)=>{
  let userValue = username.value;
  let passValue = password.value;
  const data = {};
  data.email = userValue;
  data.password = passValue;
  const xhr = new XMLHttpRequest();
  xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
  xhr.setRequestHeader('Content-type','application/json');
  xhr.send(JSON.stringify(data));
  xhr.onload = ()=> {
    let success = JSON.parse(xhr.responseText).message;
    alert.textContent = success;
  } 
});

login.addEventListener('click',(e)=>{
  let userValue = username.value;
  let passValue = password.value;
  const data = {};
  data.email = userValue;
  data.password = passValue;
  const xhr = new XMLHttpRequest();
  xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
  xhr.setRequestHeader('Content-type','application/json');
  xhr.send(JSON.stringify(data));
  xhr.onload = function(){
    let success = JSON.parse(xhr.responseText).message;
    alert.textContent = success;
    username.value = '';
    password.value = '';
  }
})