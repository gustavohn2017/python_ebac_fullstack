document.querySelector('form').onsubmit = function() {
    const inputA = document.getElementById("campoA");
    const inputB = document.getElementById("campoB");

    // Verifica se os campos estão vazios ou não contêm um número válido
    if (!inputA.value || isNaN(inputA.value) || !inputB.value || isNaN(inputB.value)) {
        alert('Por favor, insira números válidos nos campos A e B.');
        return false;
    }

    if (Number(inputA.value) >= Number(inputB.value)) {
        alert("ERRO! O valor A (" + inputA.value + ") não pode ser maior ou igual ao valor B (" + inputB.value + ").");
        return false; // Impede o envio do formulário
    }
    else {
        alert("Input A é igual a: "+ inputA.value+ "o input B foi igual a: "+ inputB.value);

    }
}
