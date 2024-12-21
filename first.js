// Fetch = Function used for making HTTP request to fetch resource.
//         (JSON style data, Image, files)
//         Simplifies asynchronous data fetching in JavaScript and used for interacting with API's to retrieve and sent data asynchronously over the web.

// HTTP response status codes

// Informational response(100-199)
// Successful response (200 - 299)
// Redirection messages (300 - 399)
// Client error response(400 - 499)
//Server error response(500 - 599)

// fetch("https://pokeapi.co/api/v2/pokemon/ritesh")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch resouce");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//-------------------------------------------------------------

//With Async await
fetchData();
document.querySelector("img").style.display = "block";

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    // Set the image source and make it visible
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
    //alert(error.message); // Notify user of error
  }
}

// Ensure the fetchData function is only called when the user clicks the button
