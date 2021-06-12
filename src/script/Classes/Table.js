class Table {
    static createTable(dot, table, clas) {
        const tr = document.createElement('tr');
        const tdX = document.createElement('td');
        const tdY = document.createElement('td');
        tdX.classList.add(clas);
        tdY.classList.add(clas);
        tdX.textContent = dot.x;
        tdY.textContent = dot.y;
        tr.appendChild(tdX);
        tr.appendChild(tdY);
        table.appendChild(tr);
    }
}

export { Table };