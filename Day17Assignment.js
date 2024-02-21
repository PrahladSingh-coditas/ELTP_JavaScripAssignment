const countriesAPIURL = 'https://restcountries.com/v2/all';

//Q1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
// fetch(countriesAPIURL)
// .then((response) => response.json())
// .then((readableData)=> {
//     readableData.forEach(user => {
//         console.log(`Country Name: ${user.name}`);
//         console.log(`Country capital: ${user.capital}`)
//         console.log('Country languages:');
//         user.languages.forEach(language => {
//             console.log(`- ${language.name}`); // Assuming language object has a 'name' property
           
//         });
//         console.log(`Country population: ${user.population}`)
//         console.log(`Country area: ${user.area}`)
//         console.log();  //Just to give space

//     })
    
// })
// .catch(error => console.log(error));



//2. Print out all the cat names in to catNames variable.

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// fetch(catsAPI)
// .then((response)=> response.json())
// .then((catsData)=> {
//     catsData.forEach(catsName => {
//         console.log(catsName.names);
//     })
// })
// .catch((error) => console.log(error));

//4. Read the countries api and find out the 10 largest countries


// fetch(countriesAPIURL)
// .then((response)=> response.json())
// .then((data)=> {
//     data.sort((a, b) => b.population - a.population); // Sort in descending order

//     // Slice the first 5 elements to get the largest data
//     const largestData = data.slice(0, 10);

//     // Do something with the largestData (e.g., display it)
//     console.log(largestData);
// })

let countryPopulationNumber =0;

//Q5. Read the countries api and count total number of languages in the world used as officials.


fetch(countriesAPIURL)
.then((response) => response.json())
.then((readableData)=> {
    readableData.forEach(user => {
        
        console.log('Country languages:');
        user.languages.forEach(language => {
            console.log(`- ${language.name}`); // Assuming language object has a 'name' property
            countryPopulationNumber++;
        });

        console.log();  //Just to give space

    })
    console.log("Total number of countries: ", countryPopulationNumber);
})
.catch(error => console.log(error));



