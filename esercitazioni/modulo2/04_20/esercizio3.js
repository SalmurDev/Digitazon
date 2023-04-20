// creare un oggetto chiamato "language" che rappresenta un linguaggio di programmazione, e che abbia le seguenti caratteristiche:
// - proprietà label, indica il nome del linguaggio
// - proprietà tags; un array di 3 stringhe che indica le caratteristiche dell'oggetto
// - un metodo printTags che itera sui tag dell'oggetto e li stampa con un WHILE
// chiamare il metodo printTags per mostrare i dati in console

let language = {
    label: 'italiano',
    tags: ['verbi', 'aggettivi', 'articoli'],
    printTags: function () {
        let i = this.tags.length - 1
        while (i >= 0) {
            console.log(this.tags[i])
            i--
        }
    }
}
language.printTags()