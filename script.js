// Generar una matriz de 5x10 con números aleatorios
function generarMatriz() {
    const matrizDiv = document.getElementById('matriz');
    matrizDiv.innerHTML = '';
    matrizDiv.style.gridTemplateColumns = `repeat(10, 1fr)`;
    
    // Crear una matriz vacía
    let matriz = [];

    // Generar números aleatorios para la matriz (valores entre 1 y 10)
    for (let i = 0; i < 5; i++) {
        let fila = [];
        for (let j = 0; j < 10; j++) {
            const valorAleatorio = Math.floor(Math.random() * 10) + 1; // Generar un número entre 1 y 10
            fila.push(valorAleatorio);
        }
        matriz.push(fila);
    }

    // Crear la matriz visual en el HTML
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.value = matriz[i][j];
            input.disabled = true;
            matrizDiv.appendChild(input);
        }
    }

    // Calcular sumas y promedios
    calcularSumasPromedios(matriz);
}

// Calcular las sumas y promedios por fila y columna
function calcularSumasPromedios(matriz) {
    let sumaFilas = [];
    let promedioFilas = [];
    let sumaColumnas = new Array(10).fill(0);
    let promedioColumnas = [];

    // Recorrer filas y columnas para calcular sumas y promedios
    for (let i = 0; i < 5; i++) {
        let sumaFila = 0;
        for (let j = 0; j < 10; j++) {
            sumaFila += matriz[i][j];
            sumaColumnas[j] += matriz[i][j];
        }
        sumaFilas.push(sumaFila);
        promedioFilas.push((sumaFila / 10).toFixed(2));
    }

    // Calcular promedios de columnas
    for (let j = 0; j < 10; j++) {
        promedioColumnas.push((sumaColumnas[j] / 5).toFixed(2));
    }

    // Mostrar resultados en los cuadros correspondientes
    mostrarResultados(sumaFilas, promedioFilas, sumaColumnas, promedioColumnas);
}

// Mostrar los resultados en los divs correspondientes
function mostrarResultados(sumaFilas, promedioFilas, sumaColumnas, promedioColumnas) {
    const sumaFilasDiv = document.getElementById('suma-filas');
    const promedioFilasDiv = document.getElementById('promedio-filas');
    const sumaColumnasDiv = document.getElementById('suma-columnas');
    const promedioColumnasDiv = document.getElementById('promedio-columnas');

    sumaFilasDiv.innerHTML = '';
    promedioFilasDiv.innerHTML = '';
    sumaColumnasDiv.innerHTML = '';
    promedioColumnasDiv.innerHTML = '';

    // Insertar resultados para las filas
    sumaFilas.forEach(suma => {
        const span = document.createElement('span');
        span.textContent = suma;
        sumaFilasDiv.appendChild(span);
    });

    promedioFilas.forEach(promedio => {
        const span = document.createElement('span');
        span.textContent = promedio;
        promedioFilasDiv.appendChild(span);
    });

    // Insertar resultados para las columnas
    sumaColumnas.forEach(suma => {
        const span = document.createElement('span');
        span.textContent = suma;
        sumaColumnasDiv.appendChild(span);
    });

    promedioColumnas.forEach(promedio => {
        const span = document.createElement('span');
        span.textContent = promedio;
        promedioColumnasDiv.appendChild(span);
    });
}
