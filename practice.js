function p(data) {
  console.log(data);
}
p("hi");
p("hello");
function form_detail() {
  let Name = document.getElementById("Name");
  p(Name.value);
  Name.value=''
  let email = document.getElementById("email");
  p(email.value);
  email.value=''
  let phone = document.getElementById("phone");
  p(phone.value);
  phone.value = ''
  let text = document.getElementById("text");
  p(text.value);
  text.value = ''
  alert( "submitted");
}
