fetch('data/index.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tituloPagina = document.getElementById('titulo_pagina');
        tituloPagina.innerHTML = data.titulo_pagina;

        const datos_tienda = document.getElementById('datos');
        datos_tienda.innerHTML = `<p id="nombre_tienda">Nombre: ${data.datos_tienda.nombre}</p>
                    <p id="correo_pagina">Correo: ${data.datos_tienda.correo}</p>
                    <p id="telefono_pagina">Telefono: ${data.datos_tienda.telefono}</p>
                    <p id="direccion_pagina">Dirección: ${data.datos_tienda.direccion}</p>`;


        const horario_tienda = document.getElementById('horario');
        horario_tienda.innerHTML = `<p id="horario_tienda">Horario de atencion: </p>
                    <p id="horario_semana">En semana: ${data.datos_tienda.horario_atencion.lunes_a_viernes}</p>
                    <p id="horario_sabado">Sabado: ${data.datos_tienda.horario_atencion.sabados}</p>
                    <p id="horario_domingo">Domingo: ${data.datos_tienda.horario_atencion.domingos}</p>`;

                    

const products = data.productos;
        console.log(products);

        
        let productsHTML = '';
        for(i = 0; i < products.length; i++) {
            let reseñas = '';
            for(j = 0; j < products[i].reseñas.length; j++) {
            
               reseñas += `<tr>
                <td>${products[i].reseñas[j].usuario}</td>
                <td>${products[i].reseñas[j].comentario}</td>
                <td>${products[i].reseñas[j].calificacion}</td>
                <td>${products[i].reseñas[j].fecha}</td>
            </tr>`;

            }
            productsHTML += `<tr>
                <td>${products[i].nombre}</td>
                <td>${products[i].categoria}</td>
                <td>${products[i].descripcion}</td>
                <td>${products[i].precio}</td>
                 <img src="${products[i].imagenes[0]}" width="40" height="40"alt="img">
                 <img src="${products[i].imagenes[1]}" width="40" height="40"alt="img">
                 <img src="${products[i].imagenes[2]}" width="40" height="40"alt="img">
                <td>${reseñas}</td>
            </tr>`;
            
        }

        const tablaproducts = document.getElementById('tabla_products');
        tablaproducts.innerHTML = productsHTML;

    });