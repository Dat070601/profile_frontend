// Star(5)
var i = 0;
var speed = 40; 
var arr = ["Hi, My Name is Dat. I'm 21 years old.  I am currently studying at Danang University of  Sinece and Technology. About my Strengths, I'm a self-motivated person, I'm eager to learn different things, and I can adapt quickly to any environment. About my weakness,I haven't had any experience at working inprofessional environment. I'm a .Net Developer. In addition, I'm looking forward to working in a professional and dynamic environment. I create this website for practice HTML, CSS, and JavaScript. In next 2 years I want to become a junior Web Backend Developer engineer, and become a senior in next 4 years."]
function typeWriter() {
    let j =0;
    if (i < arr[j].length) {
    document.getElementById("info").innerHTML += arr[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}

window.onload = typeWriter;