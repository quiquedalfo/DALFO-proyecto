class Usuario {
    constructor(nombre, apellido, [libros], [mascotas]){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        console.log(nombre + "" + apellido)
    }
    addMascotas(nuevaMascota) {
        mascotas.push(nuevaMascota)
    }
    countMascotas(){
        console.log(mascotas.length())
    }
    addBook(nuevoBook){
        libros.push(nuevoBook)
    }
    getBookNames(){
        console.log(libros)
    }

}

const usuario1 =  new Usuario('Elon' , 'Musk', [{nombre: 'Lord of the flies', autor: 'William Golding'},{nombre: 'Fundacion', autor: 'Isaac Asimov'}], ['perro' ,'gato'])
