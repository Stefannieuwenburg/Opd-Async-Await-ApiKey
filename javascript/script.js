 /* geen idee.

 Je bent nu klaar! Je kunt de data nu gaan gebruiken in je script.js file.


Hoe dan?

Verplaats het aanroepen van de functie getData() naar script.js. 
Je wilt de functie getData() afwachten. Hoe krijg je toegang tot het keyword await? Door deze in een async functie te zetten.
Dus maak een asyncronous functie waarin je getData() afwacht.
 
 
 */
//*************************************************************** */ 
 
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

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") 
.then(response => response.json())
.then(data => console.log(data)) 
.catch(err => {
    console.log(err)
});