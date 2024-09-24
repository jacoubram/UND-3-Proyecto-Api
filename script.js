function getCharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character")
    results
         .then(respuesta => respuesta.json())
         .then(data => {done(data)});
}

getCharacters(data => {
    data.results.forEach(Personaje =>{
        const article = document.createRange().createContextualFragment(`
            <article>
                 <div class="card">
                    <div class="imgcard">
                 <img src="${Personaje.image}" alt="Personaje">
                    </div> 
                    <div class="contcard">
                        <h2>${Personaje.name}</h2>
                        <p>Especie: ${Personaje.species}</p>
                        <p>Género: ${Personaje.gender}</p>
                        <p>Estado: ${Personaje.status}</p>
                        <p>Origen: ${Personaje.origin.name}</p>
                        <p>Ubicación: ${Personaje.location.name}</p>
                    </div>
                 </div>
                </div>
            </article>
            `);
            const main = document.querySelector("main");
            main.append(article);
    })
})