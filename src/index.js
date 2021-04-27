import { ApiClient, fromCatalog } from '@opendatasoft/api-client';

// Initialize the Client by indicating the domain to request.
const client = new ApiClient({ domain: "documentation-resources" });

// Create the query to run.
const query = fromCatalog() // From the domain catalog
    .dataset("doc-geonames-cities-5000") // ... we'll use the dataset "doc-geonames-cities-5000"
    .aggregates() // ... in order to make an aggregation.
    .where("country_code:'FR'") // // Filter records where country_code === "FR".
    .groupBy("name as city, population") // Select the fields "name" and "population".
    .orderBy("-population") // Sort by population in descending order.
    .limit(10) // But we only want the first 10 most populated cities.
    .toString(); // Then finally, we convert our query into a string.

// Now, run the query.
client.get(query)
    .then(response => {
        var ul = document.createElement('ul');
        response.aggregations.forEach((aggreg) => {
            var li = document.createElement('li');
            li.innerText = aggreg.city + ' (' + aggreg.population + ' habitants)';
            ul.appendChild(li);
        });
        document.getElementById('results').innerHTML = ul.outerHTML;
        console.log(response);
    })
    .catch(error => console.error(error));