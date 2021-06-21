/* Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const app = new Vue({
    el: "#app",
    data: {
        msg: "Browse",
        defaultImg: "https://source.unsplash.com/random",
        searchPic: ""
    },
    methods: {
        search() {
            if(this.searchPic) document.getElementById("pic").src = "https://source.unsplash.com/1600x900/?" + this.searchPic + " " + Math.floor(Math.random() * 1000);
        },
        randomImg() {
            window.location.reload();
        }
    }
})