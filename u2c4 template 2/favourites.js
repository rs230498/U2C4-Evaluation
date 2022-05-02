// write js code here corresponding to favourites.html
var a = JSON.parse(localStorage.getItem("favourites"))
display(a)




function display(data){
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(el,i){
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
       td6.innerText = "Robin"
       td6.style.color = "red"
       td6.style.cursor = "pointer"
       td6.addEventListener("click",function(){
           f(el,i)
       })
       tr.append(td1,td2,td3,td4,td5,td6)
       document.querySelector("tbody").append(tr)
       
    });
    function f(ele,index){
        a.splice(index,1)
        display(a)
    }
}