let keys = [1]
keys[0] = "f3738e9" //sofi
keys[1] = "e87e74d3" //matheo

fetch(`http://www.omdbapi.com/?apikey=${keys[0]}&`)
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("valores");
        res.forEach(pelicula => {
                dolar = document.createElement("li")
                dolar.innerHTML = `Nombre: ${actual.nombre} - compra: ${actual.compra} - venta: ${actual.venta}`
                valores.appendChild(dolar)    
        })
    })
    .catch(err => console.error("error", err))