const body = document.getElementsByTagName("body")[0];
function submitData(firstName, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    }
   return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(body =>addNewContact(body.id))
    .catch(response => 'Unauthorized Access')
}
function addNewContact(newId){
    document.getElementsByTagName("body")[0].innerHTML = newId;
    document.body.append('Unauthorized Access');

}
submitData("name", "name@name.com");