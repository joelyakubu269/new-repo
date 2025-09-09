const PI = 3.14159
let radius;
let circumference;
radius = Number(radius);
function solution() {
    document.getElementById("myH2").value = radius;
    circumference = 2 *Math.PI * radius;
    document.getElementById("myH1").textContent = circumference;
    
}
