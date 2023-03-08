function otworzStrone(){
    window.open(); // otwiera pusta stronę (nową kartę)
}
function komunikat(){
    window.setTimeout(() => {
        window.alert("Komunikat!"); // wyświetla komunikat u góry strony. 
    }, 2000);
}
window.setInterval(() => {
    document.getElementById("windowWidth").innerText = window.innerWidth.toString(); // szerokość okienka przeglądarki w pixelach
    document.getElementById("windowHeight").innerText = window.innerHeight.toString(); // wysokość okienka przeglądarki w pixelach
}, 1000);