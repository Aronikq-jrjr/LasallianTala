// Any <input data-live-filter> hides the table rows (inside .js-live-table) that don't contain the typed text.
document.querySelectorAll("input[data-live-filter]").forEach(function (input) {
    var emptyMessage = document.getElementById("live-no-matches");

    input.addEventListener("input", function () {
        var q = input.value.trim().toLowerCase();
        var shown = 0;

        document.querySelectorAll(".js-live-table tbody tr").forEach(function (row) {
            var match = row.textContent.toLowerCase().includes(q);
            row.hidden = !match;
            if (match) shown++;
        });

        if (emptyMessage) emptyMessage.hidden = shown !== 0;
    });
});