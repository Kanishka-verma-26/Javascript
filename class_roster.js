var student=[]
var choice = prompt("Would you like to start the roster web app ? (y/n)")
var actionS = "empty";
if (choice ==="y"){
    while (actionS!=="quit"){
            actionS = prompt("Please select an action add, remove, display, or quit")
            if (actionS==="add"){
                addNew();
            }else if (actionS==="remove"){
                remove();
            }else if (actionS==="display"){
                display();
            }else if (actionS==="quit") {
                actionS = "quit"

            }else {
                alert("Enter a valid text ")
            }
    }
}
alert("Thanks for using the web app!. Please refresh to start over")
function addNew(){
    var name=prompt("Enter the student name you want to add : ")
    student.push(name)

}

function remove(){
    var name=prompt("Enter the student name you want to remove : ")
    var ind = student.indexOf(name)
    student.splice(ind,1)
}

function display(){
    console.log(student)
}