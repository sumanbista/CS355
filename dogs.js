const searchContainer = document.getElementsByClassName("search-container");
const breedSearch = document.getElementById("breed-search");
const imageButton = document.getElementById("show-image-btn");
const imageContainer = document.getElementById("image-container");
const image = document.getElementById("image")
const breeds = document.getElementById("breeds")

       


imageButton.addEventListener('click',()=>{
    fetch('https://dog.ceo/api/breed/'+ breedSearch.value +'/images')
    .then(r=>r.json())
    .then(data=>{
        if (data.status === "success") {
        //console.log(data.message)
        count = 0
        image.src = data.message[count];
        image.style.display = 'block'
        setInterval(()=>{
            count ++;
            image.src = data.message[count];
            image.style.display = 'block'
        }  ,5000);     
    }
    else{
                image.src="";
                image.style.display = 'block'
                image.alt="No BREED FOUND.....";}
      
    });

})

fetch(' https://dog.ceo/api/breeds/list/all')
    .then(r=>r.json())
    .then(data=>{

        for (let element in data.message) {

            option = document.createElement('option');
            option.value = element;
            breeds.appendChild(option)

        };
    })


