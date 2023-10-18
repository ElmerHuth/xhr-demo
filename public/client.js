// index.html har script src länkad till detta script
// Körs på klienten

document.getElementById('button').addEventListener('click', loadData);

async function loadData() {
    let response = await fetch('https://localhost:4242/data.json');
}

function PopulateData(data) {
    const datalist = getElementById('datalist');
    datalist.innerHTML = '';

    data.array.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.name}, ${book.year} - ${book.author}`;
        datalist.appendChild(listItem);
    });
}