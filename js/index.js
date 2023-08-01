document.addEventListener('DOMContentLoaded', function(){
    const inputContainer = document.getElementById("create-monster");
    const form = document.createElement('form')
    const inputElementName = document.createElement("input");
        inputElementName.type = "text";
        inputElementName.name = 'name'
        inputElementName.placeholder = "name...";
    const inputElementAge = document.createElement("input");
        inputElementAge.type = "text";
        inputElementAge.name = 'age'
        inputElementAge.placeholder = "Age...";
    const inputElementDesc = document.createElement("input");
        inputElementDesc.type = "text";
        inputElementDesc.name ="desc"
        inputElementDesc.placeholder = "Description...";
    const btn = document.createElement('button')
        btn.type = "submit";
        btn.textContent = "Create"

    form.appendChild(inputElementName)
    form.appendChild(inputElementAge)
    form.appendChild(inputElementDesc)
    form.appendChild(btn)

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const name = inputElementName.value;
        const age = inputElementAge.value;
        const desc = inputElementDesc.value;
        const monsterObj ={
            name,
            age,
            desc
        }
        fetch('http://localhost:3000/monsters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(monsterObj)})
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        form.reset();
    })
    inputContainer.appendChild(form)

    fetch('http://localhost:3000/monsters')
    .then(res=>res.json())
    .then(data=>{
        const limitedData50 = data.slice(0, 50);
        limitedData50.forEach(element => {
            const monster = document.createElement('div');
            monster.innerHTML=`
            <h2>${element.name}</h2>
            <h3>${element.age}</h3>
            <h5>${element.description}</h5>`
            inputContainer.appendChild(monster)
        });
    })
})


