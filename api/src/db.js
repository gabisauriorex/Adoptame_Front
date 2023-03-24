require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,URL } = process.env;

const mPet = require("./models/Pet");
const mDiseases = require("./models/Diseases");
const mLocation = require("./models/Location");
const mVaccines = require("./models/Vaccines");
const mUsuario = require("./models/Usuario");
const mUser = require("./models/User");

const sequelize = new Sequelize(
 URL,
 //`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

// Aca vendrian las relaciones
mPet(sequelize);
mLocation(sequelize);
mDiseases(sequelize);
mVaccines(sequelize);
mUsuario(sequelize);
mUser(sequelize);

const { Pet, Location, Diseases, Vaccines, Usuario, User } = sequelize.models;

Pet.belongsToMany(Diseases, { through: "pet_diseases" });
Diseases.belongsToMany(Pet, { through: "pet_diseases" });
Pet.belongsToMany(Vaccines, { through: "pet_vaccines" });
Vaccines.belongsToMany(Pet, { through: "pet_vaccines" });
Pet.belongsToMany(Location, { through: "pet_locations" });
Location.belongsToMany(Pet, { through: "pet_locations" });

Usuario.belongsToMany(Pet, {through: "usuario-pet"});
Pet.belongsToMany(Usuario, {through: "usuario-pet"});

Usuario.hasOne(User);
User.hasOne(Usuario);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
