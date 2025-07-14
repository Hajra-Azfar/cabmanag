document.getElementById("toggle-btn").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("open");
});
document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", function() {
        const row = this.closest("tr");
        if (confirm("You want to delete this record?")) {
            row.remove(); 
        }
    });
});

document.querySelectorAll(".check").forEach(button => {
    button.addEventListener("click", function() {
        const row = this.closest("tr");
        const name = row.cells[1].innerText; 
        alert(`Approve request for ${name}`); 
    });
});