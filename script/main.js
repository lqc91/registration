var register = {
  username: getById('username'),
  password: getById('password'),
  confirmPassword: getById('confirm-password'),
  name: getById('name'),
  IDCard: getById('ID-card'),
  email: getById('email'),
  tel: getById('tel'),
  submit: getById('submit')
};
var regexp = {
  username: /^[a-z]\w{5,19}$/i,
  password: /^[\w|~|!|@|#|$|^|&|*|-|+|=|,|\.|?]{6,18}$/,
  name: /^[\u4e00-\u9fa5]{2,4}$/,
  IDCard: /^[1-9][0-9]{14}$|^[1-9][0-9]{16}[0-9xX]$/,
  email: /^[a-zA-Z0-9]\w*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/,
  tel: /^(13)[0-9]{9}$|^(147)[0-9]{8}$|^(15)[012356789]{1}[0-9]{8}$|^(18)[0256789]{1}[0-9]{8}$/
};
var tip;

register.username.onblur = function(){
  tip = querySpan(this);
  tip.style.color = 'red';
  if(!regexp.username.test(this.value)){
    tip.innerHTML = "6-20位字母、数字或“_”,字母开头";
  }else{
    tip.innerHTML = "OK";
  }
};
register.password.onblur = function(){
  tip = querySpan(this);
  tip.style.color = 'red';
  if(!regexp.password.test(this.value)){
    tip.innerHTML = "6-18位，包括数字字母或符号，中间不能有空格";
  }else{
    tip.innerHTML = "OK";
  }
};
register.confirmPassword.onblur = function(){
  tip = querySpan(this);
  tip.style.color = 'red';
  if(!this.value || this.value !== register.password.value){
    tip.innerHTML = "两次输入密码不一致";
  }else{
    tip.innerHTML = "OK";
  }
};
register.name.onblur = function(){
  tip = querySpan(this);
  tip.style.color = 'red';
  if(!regexp.name.test(this.value)){
    tip.innerHTML = "请输入真实姓名，两位到四位的中文汉字";
  }else{
    tip.innerHTML = "OK";
  }
};
register.IDCard.onblur = function(){
  tip = querySpan(this);
  tip.style.color = 'red';
  if(!regexp.IDCard.test(this.value)){
    tip.innerHTML = "15位或者18位的数字，18位时最后一位可以是x";
  }else{
    tip.innerHTML = "OK";
  }
};
register.email.onblur = function(){
  tip = querySpan(this);
  tip.style.color = 'red';
  if(!regexp.email.test(this.value)){
    tip.innerHTML = "请输入正确的邮箱";
  }else{
    tip.innerHTML = "OK";
  }
};
register.tel.onblur = function(){
  tip = querySpan(this);
  tip.style.color = 'red';
  if(!regexp.tel.test(this.value)){
    tip.innerHTML = "请输入正确的手机号码";
  }else{
    tip.innerHTML = "OK";
  }
};

register.submit.onclick = function(){
  var registerForm = document.getElementById('register-form'),
    inputArray = registerForm.getElementsByTagName('input'),
    spanArray = registerForm.getElementsByTagName('span'),
    len = inputArray.length,
    num = 0;
  for(var i = 0; i < spanArray.length; i++){
    if(spanArray[i].innerHTML === "OK"){
      num ++;
    }else{
      inputArray[i].onblur();
    }
  }
  if(num === len){
    alert("验证成功");
  }
};

function getById(id) {
  return document.getElementById(id);
}
function querySpan(node){
  return node.parentNode.querySelector('span');
}