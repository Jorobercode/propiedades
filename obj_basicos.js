let titulo = {
    titulo : "El hermitaño",
    autor : "Thomas Rydahl",
    añodepublicacion : "1999",
    mostrarinformacion : function () {
        console.log(this.titulo," ",this.autor," ",this.añodepublicacion)   
    }
}
libro.mostrarinformacion()
