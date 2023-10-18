// index.html har script src länkad till detta script
// Körs på klienten

document.getElementById('button').addEventListener('click', loadData);

async function loadData() {
    let response = await fetch('https://localhost:4242/data.json');
}