// Setzt die E-Mail-Adresse erst beim Klick zusammen,
// damit sie nicht im Klartext auf der Seite steht (Schutz vor Spam-Robotern).
document.querySelectorAll(".mail-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var umdrehen = function (text) { return text.split("").reverse().join(""); };
    window.location.href = "mailto:" + umdrehen(link.dataset.name) + "@" + umdrehen(link.dataset.ort);
  });
});
