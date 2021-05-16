console.log("this is a cv screener");

// Data is an array of objects which contains the information of candidates.
let data = [
    {
        name: "Mohit",
        age: 25,
        city: "Delhi",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },

    {
        name: "Rahul Kumar",
        age: 35,
        city: "Mumbai",
        language: "JavaScript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
    },

    {
        name: "Anne",
        age: 27,
        city: "New York",
        language: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
    } ,
    
    {
        name: "Priyanka",
        age: 38,
        city: "Delhi",
        language: "JavaScript",
        framework: "Vue.js",
        image: "https://randomuser.me/api/portraits/women/38.jpg",
    },
    
    {
        name: "Amit",
        age: 34,
        city: "Delhi",
        language: "Go",
        framework: "Go framework",
        image: "https://randomuser.me/api/portraits/men/26.jpg",
    },
 
]

// CV Iterator
function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex<profiles.length ? 
            {value:profiles[nextIndex++], done:false} :
            {done:true}
        }
    }; 
}

// cv iterator
const candidates = cvIterator(data);

nextCv();

// Button listner for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCv)

function nextCv(){
    let currentCandidate = candidates.next().value 

  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
 if(currentCandidate != undefined){
  image.innerHTML = `<img src="${currentCandidate.image}" style="border-radius:50%">`

  profile.innerHTML = `<ul class="list-group">
  <li class="list-group-item"><b>Name: ${currentCandidate.name}</li>
  <li class="list-group-item">Age: ${currentCandidate.age} years old</li>
  <li class="list-group-item">Lives in ${currentCandidate.city}</li>
  <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
  <li class="list-group-item">with ${currentCandidate.framework} framework</li>
  </ul>`

 }
 else{
    alert("End of Applications");
    window.location.reload();
}
}
