// write js code here corresponding to index.html
// You should add submit event on the form
var a = JSON.parse(localStorage.getItem("schedule")) || []
var b = document.querySelector("form")
document.querySelector("form").addEventListener("submit",f)

function f(){
    var obj = {
        matchNo:b.matchNum.value,
        teamA:b.teamA.value,
        teamB:b.teamB.value,
        date:b.date.value,
        venue:b.venue.value
    }
    a.push(obj)
    localStorage.setItem("schedule",JSON.stringify(a))
}
