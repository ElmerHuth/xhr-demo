// index.html har script src länkad till detta script
// Körs på klienten

document.getElementById('button').addEventListener('click', loadData);

async function loadData() {
    let response = await fetch('http://localhost:4242/data.json');
    let jsonresponse = await response.json();
    PopulateData(jsonresponse);
}

function PopulateData(data) {
    const datalist = document.getElementById('datalist');
    datalist.innerHTML = '';

    data.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.name}, ${book.year} - ${book.author}`;
        datalist.appendChild(listItem);
    });
}