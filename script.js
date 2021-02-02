let btn = document.querySelector("#btn"),
    ul = document.querySelector("#ul"),
    input = document.querySelector("#input"),
    inpChange = document.querySelector("#termsChkbx"),
    root = document.querySelector(":root");

btn.onclick = () => {
  let val = input.value;
  val === '' ? null : ul.innerHTML += `<li>${val}</li>`
}

inpChange.onchange = () => {
  inpChange.checked 
  ? 
  root.style.setProperty('--bodyBg', '#252525') + root.style.setProperty('--wordColor', '#f7f7f7')
  : 
  root.style.setProperty('--bodyBg', '#ccc') + root.style.setProperty('--wordColor', '#000')
}