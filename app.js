const filterInput = document.getElementById("filterinput");

filterInput.addEventListener("keyup", function() {
  // Umlaute erlaubern. nur gefährliche Zeichen für HTML entfernen wir nicht hier,
  // sondern indem wir niemals innerHTML mit der Eingabe benutzen.
  // Das hier ist sicher, weil wir nur display ändern, keinen HTML-Code einfügen.

  const filterValue = filterInput.value.toLowerCase();

  const rows = document.querySelectorAll("#co2Table tbody tr");

  rows.forEach(function(row) {
    const text = row.textContent.toLowerCase();

    if (text.includes(filterValue)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// Merkt sich, ob gerade aufsteigend oder absteigend sortiert wird
let sortDirection = {};

function sortable(columnIndex) {
  const table = document.getElementById("co2Table");
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  // Beim ersten Klick aufsteigend, beim zweiten absteigend, usw.
  sortDirection[columnIndex] = sortDirection[columnIndex] === "asc" ? "desc" : "asc";
  const direction = sortDirection[columnIndex] === "asc" ? 1 : -1;

  // Spalte 2 = CO2, Spalte 3 = Jahr -> beides Zahlen!
  const isNumeric = columnIndex === 2 || columnIndex === 3;

  rows.sort(function(a, b) {
    let cellA = a.children[columnIndex].textContent.trim();
    let cellB = b.children[columnIndex].textContent.trim();

    if (isNumeric) {
      return (Number(cellA) - Number(cellB)) * direction;
    } else {
      return cellA.localeCompare(cellB, "de") * direction;
    }
  });

  // Ohne innerHTML = "", damit keine Event-Listener verloren gehen
  // und kein Code injiziert werden kann
  rows.forEach(function(row) {
    tbody.appendChild(row);
  });
}