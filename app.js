const filterInput = document.getElementById("filterinput");

filterInput.addEventListener("keyup", function() {

  let filterValue = filterInput.value;

  filterValue = filterValue.replace(/[^a-zA-Z0-9\s]/g, "");

  const rows = document.querySelectorAll("#co2Table tbody tr");

  rows.forEach(function(row) {
    const text = row.textContent.toLowerCase();

    if (text.includes(filterValue.toLowerCase())) {
      row.style.display = "";
    }else {
        row.style.display = "none";
    }
    
  });
});

function sortable(columnIndex) {
  const table = document.getElementById("co2Table");
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  const isNumeric = columnIndex === 2;

  rows.sort(function(a, b) {
    let cellA = a.children[columnIndex].textContent;
    let cellB = b.children[columnIndex].textContent;

    if (isNumeric) {
      return Number(cellA) - Number(cellB);
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  tbody.innerHTML = "";
  rows.forEach(function(row) {
    tbody.appendChild(row);
  });
}