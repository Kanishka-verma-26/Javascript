// alert("welcome again")
alert("welcome again")

var a= prompt("Is is a weekday ?")
var b= prompt("Are you on your vacation ?")
function sleepIn(weekday, vacation){
    return (!weekday || vacation)
}

if (sleepIn(a,b)){
    document.write("we have to Sleep In")
}else {
        document.write("no need of Sleep In")

}
