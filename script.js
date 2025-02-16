//your JS code here. If required.

let button=document.querySelector("#submit");
let form=document.querySelector("form");
let table=document.querySelector(".table")
let tbody=document.querySelector("#book-list")

button.addEventListener("click",function(){
	 event.preventDefault();
	
	let title=document.querySelector("#title").value;
    let author=document.querySelector("#author").value;
    let isbn=document.querySelector("#isbn").value;


	
	let newRow=table.insertRow();
	
	let col1=newRow.insertCell(0);
	let col2=newRow.insertCell(1);
	let col3=newRow.insertCell(2);
	let col4=newRow.insertCell(3);
	tbody.append(newRow);

	col1.textContent=title;

	col2.textContent=author;

	col3.textContent=isbn;
	let a=document.createElement("button")
	a.innerHTML="X";
	a.style.background="red";
	a.classList.add("delete");
	col4.append(a);

	a.addEventListener("click",function(){
		newRow.delete();
	});

	form.reset();
	
});
