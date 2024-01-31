const singleBrew = async(apiurl) => {
    const details = await fetch(apiurl)
    const data = await details.json();
    return data
}

document.addEventListener("DOMContentLoaded", function () {
    singleBrew("https://api.openbrewerydb.org/v1/breweries/b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0").then(
      (quote) => {
        console.log(quote);
        document
           .getElementById("by_single-1")
           .addEventListener("click", async function(){
            const codeValue = document.querySelector("#code-1");
            codeValue.innerHTML = generateBreweryHTML(quote)
           })
      });

      singleBrew("https://api.openbrewerydb.org/v1/breweries?per_page=3").then(
        (brew) =>{
            brew.forEach((brewery) => {
                console.log(brewery);
                document
                .getElementById("by_filter-1")
                .addEventListener("click", async function(){
                 const codeValue = document.querySelector("#code-2");
                 codeValue.innerHTML += generateBreweryHTML(brewery)
                })
            });
           
        }
      )
      singleBrew("https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3").then(
        (res) => {
        res.forEach((breweryCity) =>{
            document.getElementById("by_city-1")
            .addEventListener("click", async function(){
                const codeValue = document.querySelector("#code-3")
                codeValue.innerHTML += generateBreweryHTML(breweryCity);
            })
        })
      })
    });
    function generateBreweryHTML(brewery) {
        let html = '<ul>';
        for (const [key, value] of Object.entries(brewery)) {
            html += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        html += '</ul>';
        return html;
    }