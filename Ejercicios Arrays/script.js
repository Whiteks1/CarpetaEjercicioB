
  // 1.Array principal de contactos
  let contactos = [];

  //2. Añadir contacto con push()
  function recogeContacto() {
    const input = document.querySelector('#elemento');
    const nuevoContacto = input.value.trim();

    if (nuevoContacto === '') {
      alert('Introduce un nombre válido');
      return;
    }
    
    contactos.push(nuevoContacto);
    input.value = '';
    input.focus();

    generaUl();
    generaSelect();
  }

  //3. Generar lista en pantalla
  function generaUl() {
    const lista = document.querySelector('#contactos');
    lista.innerHTML = '';

    contactos.forEach(contacto => {
      const li = document.createElement('li');
      li.textContent = contacto;
      lista.appendChild(li);
    });
  }

  // 4.Generar el select 
  function generaSelect() {
    const select = document.querySelector('#selectContactos');
    select.innerHTML = '';

    contactos.forEach((contacto, index) => {
      const option = document.createElement('option');
      option.textContent = contacto;
      option.value = index;
      select.appendChild(option);
    });
  }

  //5. Editar contacto
  function editarContacto() {
    const select = document.querySelector('#selectContactos');
    const indice = parseInt(select.value);

    if (isNaN(indice)) {
      alert('Selecciona un contacto para editar.');
      return;
    }

    const nuevoNombre = prompt('Introduce el nuevo nombre del contacto:');
    if (nuevoNombre && nuevoNombre.trim() !== '') {
      contactos.splice(indice, 1, nuevoNombre.trim()); 
      generaUl();
      generaSelect();
    }
  }

  // 6. Eliminar contacto
  function eliminarContacto() {
    const select = document.querySelector('#selectContactos');
    const indice = parseInt(select.value);

    if (isNaN(indice)) {
      alert('Selecciona un contacto para eliminar.');
      return;
    }

    contactos.splice(indice, 1); 
    generaUl();
    generaSelect();
  }

  //7. Mostrar/ocultar el panel de gestión
  function ocultar() {
    const div = document.querySelector('#eliminar');
    const visible = div.style.display !== 'none';
    div.style.display = visible ? 'none' : 'block';
  }
  // Inicialización de botones
  document.querySelector('#add_contacto').onclick = recogeContacto;
  document.querySelector('#crea_select').onclick = generaSelect;

  // Ocultar el div de gestión al cargar
  document.querySelector('#eliminar').style.display = 'none';

  // Mostrar ejemplos de arrays en consola
  ejemplosArray();
