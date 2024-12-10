function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = peso / (altura * altura);
    let resultado = `Seu IMC é ${imc.toFixed(2)}.`;

    if (imc < 18.5) {
        resultado += " Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado += " Seu peso está normal.";
    } else if (imc >= 25 && imc < 29.9) {
        resultado += " Você está com sobrepeso.";
    } else {
        resultado += " Você está obeso.";
    }

    document.getElementById('resultado-imc').textContent = resultado;
}

function calcularCalorias() {
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso-calorias').value);
    const altura = parseFloat(document.getElementById('altura-calorias').value);
    const nivelAtividade = parseFloat(document.getElementById('nivel-atividade').value);

    if (isNaN(idade) || isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0 || idade <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const alturaM = altura / 100;  // converter altura para metros
    let tmb;

    // Cálculo da Taxa Metabólica Basal 
    if (sexo === 'masculino') {
        tmb = 66 + (13.75 * peso) + (5 * altura) - (6.75 * idade);
    } else {
        tmb = 655 + (9.56 * peso) + (1.85 * altura) - (4.68 * idade);
    }

    const caloriasNecessarias = tmb * nivelAtividade;
    let objetivo = `Para manter o peso, você precisa de aproximadamente ${caloriasNecessarias.toFixed(0)} calorias por dia.`;

    document.getElementById('resultado-calorias').textContent = objetivo;
}
 // mostrar os alimentos

function mostrarAlimentos() {
    const alimentosSelecionados = [];
    const checkboxes = document.querySelectorAll('.dieta-options input:checked');
    
    checkboxes.forEach((checkbox) => {
        alimentosSelecionados.push(checkbox.value);
    });

    if (alimentosSelecionados.length > 0) {
        document.getElementById('alimentos-selecionados').textContent = `Alimentos selecionados: ${alimentosSelecionados.join(', ')}`;
    } else {
        document.getElementById('alimentos-selecionados').textContent = "Nenhum alimento selecionado.";
    }
}

let totalCalories = 0;

function addFood() {
    const foodSelect = document.getElementById('food');
    const quantityInput = document.getElementById('quantity');
    const foodList = document.getElementById('food-list');
    const totalCaloriesDiv = document.getElementById('total-calories');

    const [foodName, foodCalories] = foodSelect.value.split(',');
    const quantity = Number(quantityInput.value);
    const calories = (Number(foodCalories) * quantity) / 100;

    // Adicionar à tabela
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${foodName}</td>
        <td>${quantity} g</td>
        <td>${calories.toFixed(2)} kcal</td>
    `;
    foodList.appendChild(row);

    // Atualizar calorias totais
    totalCalories += calories;
    totalCaloriesDiv.textContent = `Calorias totais: ${totalCalories.toFixed(2)} kcal`;
}

function clearDiet() {
    const foodList = document.getElementById('food-list');
    const totalCaloriesDiv = document.getElementById('total-calories');

    // Remover todas as linhas da tabela
    foodList.innerHTML = '';

    // Redefinir calorias totais
    totalCalories = 0;
    totalCaloriesDiv.textContent = `Calorias totais: 0 kcal`;
 
    // Atualizar calorias totais
    totalCalories += calories;
    totalCaloriesDiv.textContent = `Calorias totais: ${totalCalories.toFixed(2)} kcal`;
    
}
