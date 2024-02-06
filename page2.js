const $ = document.querySelector.bind(document);
$('#darkBtn').addEventListener('click', toggleDark)

const params = new URLSearchParams(location.search);

results = "";
results += "First Name is " + params.get('fname') + "<br>";
results += "Last Name is " + params.get('lname') + "<br>";
results += "Student Email is " + params.get('email') + "<br>";
results += "Enrolled Course is " + params.get('course');
document.getElementById("results").innerHTML = results;

function toggleDark() {

    if ($(':root').hasAttribute('dark-mode')) {
        localStorage.setItem('mode','light');
        $(':root').removeAttribute('dark-mode');

    }
    else {
        localStorage.setItem('mode', 'dark');
        $(':root').setAttribute('dark-mode', true);
    }
}

function main(){
    if(localStorage.getItem('mode') === 'dark'){
        $(':root').setAttribute('dark-mode', true);
    }
}
main();