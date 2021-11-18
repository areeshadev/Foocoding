
// const animals= ['Cat', 'Dog','Fox','Squirrel','Bunny','Parrot','Dove','Wolf','Tiger','Dear']



// 		let ul = document.createElement('ul');
// 		const myVariable=document.getElementById('myList').appendChild(ul);
//         myVariable.appendChild(ul)
 
// 		animals.forEach(function(name){
// 			let li = document.createElement('li');
// 			li.innerHTML += name;});

//             ul.appendChild(li);



const animals = ['Cat', 'Dog', 'Fox', 'Squirrel', 'Bunny', 'Parrot', 'Dove', 'Wolf', 'Tiger', 'Dear']



const myVariable = document.getElementById('myList');
let ul = document.createElement('ul');
myVariable.appendChild(ul)

animals.forEach(function (name) {
   let li = document.createElement('li');
   li.innerHTML += name;
   ul.appendChild(li);
});