function createTable() {
    //Write your code here
	  const table = document.getElementById("myTable");
  let TR = prompt("input number of rows");
  let TD = prompt("input number of columns");
  for (let i = 0; i < TR; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < TD; j++) {
        let td = document.createElement("td");
       td.innerText="Row-"+`${i}`+" Column-"+`${j}`;
       tr.appendChild(td);  
      }
      table.appendChild(tr);
  }
  
}
