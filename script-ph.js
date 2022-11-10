var root = document.documentElement;
const lists = document.querySelectorAll('.hs');lists.forEach(el => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});

window.addEventListener('load', (event) => {
  LoopFeed();
});

function LoopFeed() {
  for (var i=0;i<5;i++) {  
   var v = document.createElement('li');
   var c = document.createElement('img')
   v.className="feeditem"; 
   c.className="feedImage";
   c.src="img/300x200-3.png";
   +i;
   document.getElementById('feedUl').appendChild(v).appendChild(c);
  }
};

document.querySelector("#actual-btn").addEventListener("change", (e) => { //CHANGE EVENT FOR UPLOADING PHOTOS
  if (window.File && window.FileReader && window.FileList && window.Blob) { //CHECK IF FILE API IS SUPPORTED
    const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
    var v = document.createElement('li');
    var c = document.createElement('img');
    c.className="feedImage";
    v.className="feeditem";
    v.id="feeditem";
    for (let i = 0; i < files.length; i++) { // LOOP THROUGH THE FILE LIST OBJECT
        if (!files[i].type.match("image")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
        const picReader = new FileReader(); // RETRIEVE DATA URI 
        picReader.addEventListener("load", function (event) { // LOAD EVENT FOR DISPLAYING PHOTOS
          const picFile = event.target;
          c.src= picFile.result;
          document.getElementById('feedUl').prepend(v)
          document.getElementById('feeditem').appendChild(c);
        });
        picReader.readAsDataURL(files[i]); //READ THE IMAGE
    }
  } else {
    alert("Your browser does not support File API");
  }
});