let form = document.forms.namedItem("music");
let genres = form.elements.namedItem("genres");

let selectedOption = genres.options[genres.selectedIndex];
console.log(selectedOption.value + " - " + selectedOption.text);

setTimeout(() => {
    let option = new Option("Классика", "classic", true, true);
    genres.options.add(option);
}, 2000);

