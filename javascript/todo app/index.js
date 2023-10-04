document.querySelector("form").addEventListener("submit",myTodo);

function myTodo(){
event.preventDefault();

var task=document.getElementById("task").value ;

var priority=document.querySelector("#priority").value;

console.log(task,priority);

//table row=> tr
//td=> task,priority 

var tr = document.createElement("tr");

var td1 =document.createElement("td");

td1.textContent=task;

var td2=document.createElement("td");

td2.textContent=priority;

if(priority === 'High'){
    td2.style.backgroundColor ='red'

}
else{
    td2.style.backgroundColor ='green'
}

var td3=document.createElement("td");

td3.textContent="delete";
// {/* <i class="fa-solid fa-trash-can"></i> */}

td3.addEventListener("click",deleteTodo)


tr.append(td1,td2,td3);

document.querySelector("tbody").append(tr);

}


function deleteTodo(){

    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}


//innerhtml =>tags as well 
// `` " "