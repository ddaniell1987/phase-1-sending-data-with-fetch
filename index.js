const body = document.getElementsByTagName("body")[0];
function submitData (firstName, email) {
    const configurationObject={
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        "name": firstName,
        "email": email

    })
}

    fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(body =>addContact(body.id))
    .catch(function(error){
        alert("Unauthorized Access")
    })
}
function addContact(newId){
    document.getElementsByTagName("body")[0].innerHTML = newId;
} 
submitData("name", "name@name.com")


