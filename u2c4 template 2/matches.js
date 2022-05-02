// write js code here corresponding to matches.html
var b = JSON.parse(localStorage.getItem("favourites")) || []
var a = JSON.parse(localStorage.getItem("schedule"))
display(a)


function f1(){
    var c = document.querySelector("#filterVenue").value
    console.log(c)
     var z = a.filter(function(el){
        return el.venue==c
    })
    display(z)
}
function display(data){
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(el){
       var tr = document.createElement("tr") 

       var td1 = document.createElement("td")
       td1.innerText = el.matchNo

       var td2 = document.createElement("td")
       td2.innerText = el.teamA
       
       var td3 = document.createElement("td")
       td3.innerText = el.teamB
       
       var td4 = document.createElement("td")
       td4.innerText = el.date
       
       var td5 = document.createElement("td")
       td5.innerText = el.venue
       
       var td6 = document.createElement("td")
       td6.innerText = "Add as Favourites"
       td6.style.color = "green"
       td6.style.cursor = "pointer"
       td6.addEventListener("click",function(){
           f(el)
       })
       tr.append(td1,td2,td3,td4,td5,td6)
       document.querySelector("tbody").append(tr)
       
    });
    function f(ele){
        b.push(ele)
        localStorage.setItem("favourites",JSON.stringify(b))
    }
}