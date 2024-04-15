function validation({
	name,
	description,
	image,
	rating,
	release_date,
	genres,
	platforms,
}){
    const errors = {};

    if (!name) {
		errors.name = "Este campo no puede estar vacío";
	}else if (name.length < 3) {
		errors.name = "El nombre , no puede tener menos de 3 caracteres";
	}else if(name.length > 30) {
		errors.name = "El nombre del juego no puede tener mas de 30 caracteres";
	}

	if (name && !/^[A-Za-z0-9\s]+$/g.test(name)) {
		errors.name = "El nombre del juego, no debe contener caracteres especiales";
	}
    

    if (!image) {
		errors.image = "Por favor, Ingresa una imagen";
	}

    if (!description || description.length < 20) {
		errors.description = "La descripción no puede tener menos de 20 caracteres";
	}

    if (rating < 1) {
		errors.rating = "El rating mínimo es 1";
	} else if (rating > 10.0) {
		errors.rating = "El rating máximo es 10";
	}
    
    if(genres.length === 0){
		errors.genres = "";
    }if(genres.length > 6) {
		errors.genres = "Debes elegir al menos un género";
	}


	if (platforms.length === 0) {
		errors.platforms = "";
	}if(platforms.length > 6){
		errors.platforms = "Debes elegir al menos una plataforma";
    }

    return errors;
}

export default validation;