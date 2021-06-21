/* Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const app = new Vue({
    el: "#app",
    data: {
        msg: "Search pics",
        searchPic: "",
        load: "hidden"
    },
    methods: {
        search() {
            const link = "https://source.unsplash.com/1600x900/?" + this.searchPic;
            document.getElementById("pic").src = link;
        }
    }
})