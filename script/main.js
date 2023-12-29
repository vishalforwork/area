let b,h,a ;
console.log("working");

document.getElementById("btn").onclick = function(){
    b = document.getElementById('base').value;
    h = document.getElementById('height').value;
    a = (b*h)/2;
    console.log(a);
    document.getElementById('area').innerHTML="area of the triangle is : " + a;
}