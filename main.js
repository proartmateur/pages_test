new Vue({
	el:'main',
	data:{
		texto: 'Hello vue 2',
		nombre: 'Deafult Name',
		peliculaNueva:"Hola",
		nota: 5,
		peliculas: ['batman','superman','la verdad duele','Coraline', 'spiderman 3', "Apocalipsis Now"],
		frutas:[
			{nombre: 'Manzana', temporada:'Invierno', precio:'Bajo'},
			{nombre: 'Naranja', temporada:'Otoño', precio:'Muy Bajo'},
			{nombre: 'Pera', temporada:'Primavera', precio:'Medio'},
			{nombre: 'Durazno', temporada:'Verano', precio:'Alto'}
		],
		superfruta: {nombre: 'Mandarina', temporada:'Verano', precio:'Medio'}
		
	},
	methods: {
		crearPelicula(){
			// alert(this.peliculaNueva)
			this.peliculas.unshift(this.peliculaNueva)
			this.peliculaNueva = null
		},
		borrarPelicula(indice){
			this.peliculas.splice(indice, 1)		}
	},
	computed:{
		nombreApellido(){
			return this.nombre + " " + this.texto
		},
		peliculasOrdenadas(){
			let pelis = this.peliculas.map(function(peli){ return peli });
			return pelis.sort()
		}

	}	
})