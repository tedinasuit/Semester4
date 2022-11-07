const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#displayImage").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})

var root = document.documentElement;
const lists = document.querySelectorAll('.hs');lists.forEach(el => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});