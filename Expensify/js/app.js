function calculate() {
    let totalAmount = parseFloat(document.getElementById('totalAmount').value);
    let numPeople = parseInt(document.getElementById('numPeople').value);
    let tipPercentage = parseFloat(document.getElementById('tipPercentage').value) / 100;

    if(isNaN(totalAmount) || isNaN(numPeople) || isNaN(tipPercentage)) {
        alert('Please provide valid input values.');
        return;
    }

    let tipAmount = totalAmount * tipPercentage;
    let splitAmount = (totalAmount + tipAmount) / numPeople;

    displayResults(tipAmount, splitAmount);
}

function displayResults(tip, split) {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Total Tip: $${tip.toFixed(2)}</p>
        <p>Amount per person (including tip): $${split.toFixed(2)}</p>
    `;
}
