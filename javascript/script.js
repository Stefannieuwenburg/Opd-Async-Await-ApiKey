 //voorbeeld awaiting
 
 async function test() {
try {
const responce = await makeRequest("facebook")
console.log("responce received")
const processedResponse = await processRequest(responce)
console.log(processedResponse)
} catch (error) {
 console.log(error.message)   
}
}
 test();


 // doe fetch request: voorbeeld

fetch("https://swapi.dev/api/people/1/") 
.then(response => response.json())
.then(data => console.log(data)) 
.catch(err => {
    console.log(err)
});