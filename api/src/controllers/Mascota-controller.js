const { parse } = require("path");
const {Pet} = require("../db.js");

//CRUD API MASCOTAS

const createMascota = async (req, res) => {
  try {
    let { id, animal, breed, height, weight, age, color, description, image, isLost} = req.body;

    console.log(id, animal, breed, height, weight, age, color, description, image, isLost)
    if (!animal || !breed || !height || !weight || !age || !color || !isLost) {
      throw new Error("Faltan Datos");
    }

    if (image && !(image.match( /^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null )) {
      throw new Error("El link provisto no es una imagen");
    } 
    
    if (!image) image = " ";

    let newMascota = await Pet.create ({
      animal,
      breed,
      height: parseInt(height) || 0,
      weight: parseInt(weight) || 0, 
      age: parseInt(age) || 0, 
      color,
      description, 
      image,
      isLost
    });

    newMascota
      ? res.status(200).send("Pet created successfully 👌")
      : res.status(404).json("Pet not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getMascotas = async (req, res) => {
  try {
    const { name } = req.query; //opcion por name

    if (name) {
      //const petName = mascotas.filter( e => e.name.toLowerCase().inclides(name.toLowerCase()));
      const petName = Pet.find({ "name": name })
      res.json(petName);
    } else {
      var pets = Pet.find();
      }
      pets
        ? res.json(pets)
        : res.status(404).send({message:error.message})
    

    /*     if (!name) {
    } else { 
    //FILTRA Y OBLIGADAMENTE LOS DEBE PASAR A MINUSUCLAS PARA PODER COMPARAR HACIENDO QUE IGNORE SI ELLA MAYUSCULAS /MISUCULAS
    let searchGame = allGames.filter((game) =>
      game.name.toLowerCase().includes(name.toLowerCase())
    );

    searchGame.length
      ? res.status(200).json(searchGame)
      : res.status(404).json({
          message: "Videogame not Found 😕",
        });
     } */
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const mascotaById = async (req, res) => {
  try {
    const { id } = req.params;

    //============de la BD==============================
    const mascotaById = await Mascota.findById({ _id: id });

    mascotaById
      ? res.json(mascotaById)
      : res.status(400).json("There are no pets with that id in the db");

    //=============================================
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteMascota = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("Undefined id 😬");
    } else {
      const mascotaDB = await Pet.findByIdAndDelete({ _id: id });

      if (!mascotaDB) {
        return res.json({
          estado: false,
          mensaje: "could not delete",
        });
      } else {
        return res.json({
          estado: true,
          mensaje: "The pet has been removed",
        });
      }
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateMascota = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;

  try {
    if (!id) {
      throw new Error("Undefined id 😬");
    } else {
      const mascotaDB = await Pet.findByIdAndUpdate(id, body);
      //console.log(mascotaDB);
      res.json({
        estado: true,
        mensaje: "modified pet",
      });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createMascota,
  getMascotas,
  mascotaById,
  deleteMascota,
  updateMascota,
};
