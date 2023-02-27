
const nameObj = person.result;
console.log(nameObj)
nameObj.forEach(name =>{
    const info = document.getElementById('person-info');
    const personDiv = document.createElement('div');
    personDiv.innerHTML = `
    <h1>Name : ${name.name.common}</h1>
    <h2>age : ${name.age}</h2>
    <p> <span>Street: ${name.address.street}
    ,</span> <span>House: ${name.address.house}</span></p>

    
    `
    info.appendChild(personDiv);
})