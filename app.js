const table = document.querySelector('tbody');


let tabData = [{
    Id: '1',
    Name: 'Pavan',
    Surname: 'Srivastava'
},
{
    Id: '2',
    Name: 'Piyush',
    Surname: 'Sharma'
},
{
    Id: '3',
    Name: 'Sourabh',
    Surname: 'Joshi'
},
{
    Id: '4',
    Name: 'Nadeem',
    Surname: 'Sharma'
}]

tableHeader = [{
    col: 'ID'
}, {
    col: 'Name'
}, {
    col: 'Surname'
}]

let keysObj = Object.values(tabData);
let tableData = Object.keys(keysObj[0]);

tableHeader.forEach(data => {
    tableHead = document.createElement('th');
    tableHead.classList.add('tab');
    tableHead.innerText = data.col;
    table.appendChild(tableHead);
})

tabData.forEach(data => {
    let tabRow = document.createElement('tr');
    tableData.forEach(key=>{
        let tdata = document.createElement('td')
        tdata.innerText = data[key];
        tabRow.appendChild(tdata);
    })
    table.appendChild(tabRow);
})
