const moovies = fetch('/data/moovies.json')

moovies
     .then(function (reponse) {
          console.log(reponse);
          return reponse.json();
     })

     .then(function (mooviesList) {
          console.log(mooviesList);


          /*insérer les films dans le html*/


          document.getElementById("mov").innerHTML = /*html*/ ` 
          
        <h1 class="mov-title"> Projet Mini Allo-Ciné ! </h1> <br>
           ${mooviesList.map(function (movi) {
               return `
                 <div class="container p-5">
                  <div class="border p-5"> 
                  <div class="row film">                
                   <div class="col">
                     <img class="movi-photo" src="${movi.Poster}">
                   </div>
                   <div class="col">
                     <h4> Title : ${movi.Title} /
                          Runtime : ${movi.Runtime} </h4>
                     <p>  Year : ${movi.Year} /
                          Released : ${movi.Released} </p>
                     <p>  Genre : ${movi.Genre} </p>
                     <p>  Director : ${movi.Director} /
                          Writer : ${movi.Writer} </p>
                     <p>  Actors : ${movi.Actors} </p>
                     <p>  Plot : ${movi.Plot} </p>
                     <p>  Language : ${movi.Language} /
                          Country :  ${movi.Country} </p>
                     <p>  Awards : ${movi.Awards} /
                          Metascore : ${movi.Metascore} /
                          Rating : ${movi.imdbRating} </p>
                     <p>  Type : ${movi.Type} </p>
                       <img class="img" src="${movi.Images[0]}"> 
                       <img class="img" src="${movi.Images[1]}"> 
                       <img class="img" src="${movi.Images[2]}"> 
                                 
                   </div>
                   </div>
                  </div>
                 </div>
                   `

          }).join('')}

     `;

     })

