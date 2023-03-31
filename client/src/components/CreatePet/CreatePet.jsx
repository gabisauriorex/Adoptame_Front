import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  Typography,
  Box,
  Input,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postPet } from "../../Redux/Actions/actions_pets";
import { razas,tamanio,color } from "../../ArrayDatos/arrayPets";

import "./CreatePet.css";
import { uploadImage } from "../../firebase/config";

//react-hook-form

function CreatePet() {
  //const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onTouched" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //vacuna
  const [vacunas, setVacunas] = useState([]);
  //disease
  const [enfer, setEnfer] = useState([]);
  //location
  const [lugar, setLugar] = useState([]);
  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    breed: "",
    animal: "",
    height: "",
    color: "",
    identified: "",
    sex: "",
    weight: "",
    age: "",
    vaccine: "",
    disease: "",
    location: "",
  });

  //================handlerChange======================
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // FIREBASE

  const handleImage = async (e) => {
    const aux = await uploadImage(e)
    setInput({
      ...input,
      image: aux
    })
  }

  const handleSelectBreed = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelectSize = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      height: e.target.value,
    });
  };
  const handlerSelectColor = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      color: e.target.value,
    });
  };

  const handleSelectIdentified = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    const identified = value === "encontra";
    setInput({
      ...input,
      identified,
    });
  };
  const handleSelectGender = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      sex: e.target.value,
    });
  };
  const enviarDatos = (e) => {
    //console.log(input);
    e.preventDefault();
    dispatch(postPet(input));
    navigate("/");
  };

  //styledComponents----------------
  const ageOptions = [
    { value: "menor a 1 año", label: "Menos de 1 año" },
    { value: "mayor a 1 año", label: "Más de 1 año" },
    { value: "mayor a 5 años", label: "Más de 5 años" },
    { value: "mayor 10 años", label: "Más de 10 años" },
  ];
  // VACUNAS
  useEffect(() => {
    async function getVacunas() {
      const res = await axios.get("/vaccines");
      setVacunas(res.data);
    }
    getVacunas();
  }, []);
  // DISEASES
  useEffect(() => {
    async function getDisease() {
      const res = await axios.get("/diseases");
      setEnfer(res.data);
    }
    getDisease();
  }, []);
  // LOCATION
  useEffect(() => {
    async function getLocation() {
      const res = await axios.get("/locations");
      setLugar(res.data);
    }
    getLocation();
  }, []);

  return (
    <div className="containerGral">
      <form onSubmit={(e) => enviarDatos(e)} className="containerForm">
        <Typography variant="h6" component="h1">
          Registro de Mascota
        </Typography>

        {/* identified */}
        <Box>
          <FormControl
            margin="normal"
            sx={{ display: "inline-flex", justifyContent: "flex-start" }}
          >
            <FormLabel id="demo-radio-buttons-group-label">
              <span className="color_title">Mascota</span>
            </FormLabel>
            <RadioGroup
              id="demo-radio-buttons-group-label"
              value={input.identified}
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={handleSelectIdentified}
              row
            >
              <FormControlLabel
                value="encontra"
                control={<Radio />}
                label="Encontrado"
                checked={input.identified === true}
              />
              <FormControlLabel
                value="adopta"
                control={<Radio />}
                label="Para adoptar"
                checked={input.identified === false}
              />
            </RadioGroup>
          </FormControl>
        </Box>
        {/* NOMBRE */}
        <Box>
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "50%",
              minHeight: "100px",
              padding: "10px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Nombre de Mascota"
              variant="outlined"
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            <FormHelperText id="name-helper">
              Ingrese el nombre del animal
              {/*  {errors.name && <span>Este campo es requerido</span>} */}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box sx={{ display: "flex", width: "100%" }}>
          {/* peso */}
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              padding: "10px",
              flexWrap: "wrap",
              width: "50%",
              minHeight: "100px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Peso"
              variant="outlined"
              type="number"
              name="weight"
              value={input.weight}
              onChange={(e) => handleChange(e)}
            />
            <FormHelperText id="name-helper">
              Ingrese el peso
              {/*  {errors.name && <span>Este campo es requerido</span>} */}
            </FormHelperText>
          </FormControl>

          {/* imagen  */}
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "50%",
              minHeight: "100px",
              padding: "10px",
            }}
          > 
            <input
              id="image"
              aria-describedby="image-helper"
              type="file"
              name="image"
              //value={input.image}
              onChange={ e => handleImage(e.target.files[0])}
            />

            <FormHelperText id="image-helper">
              Ingrese una imagen
            </FormHelperText>
          </FormControl>
        </Box>

        {/* animal */}
        <Box sx={{ display: "flex", width: "100%" }}>
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "50%",
              marginRight: "10px",
            }}
          >
            <InputLabel>Tipo</InputLabel>
            <Select
              name="animal"
              value={input.animal}
              label="Animal"
              onChange={handleChange}
            >
              {["Perro", "Gato"].map((m) => {
                return <MenuItem value={m}>{m}</MenuItem>;
              })}
            </Select>
            <FormHelperText id="animal-helper">
              Seleccione el tipo de animal
            </FormHelperText>
          </FormControl>

          {/* Raza */}
          <FormControl
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "50%",
              marginRight: "10px",
            }}
            margin="normal"
          >
            <InputLabel>Raza</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="breed"
              value={input.breed}
              label="Raza"
              onChange={handleSelectBreed}
            >
              {razas.map((name) => {
                return <MenuItem value={name}>{name}</MenuItem>;
              })}
            </Select>
            <FormHelperText id="animal-helper">
              Seleccione la raza del animal
            </FormHelperText>
          </FormControl>

          {/* TAMAÑO */}
          <FormControl
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "50%",
              marginRight: "10px",
            }}
            margin="normal"
          >
            <InputLabel id="demo-simple-select-label">Tamaño</InputLabel>
            <Input
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="height"
              name="height"
              value={input.height}
              onChange={(e) => handleChange(e)}
            >
            </Input>
            <FormHelperText id="animal-helper">
              Seleccione el tamaño del animal
            </FormHelperText>
          </FormControl>

          {/* Color */}
          <FormControl
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "50%",
              marginRight: "10px",
            }}
            margin="normal"
          >
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="color"
              onChange={(e) => handlerSelectColor(e)}
            >
              {color.map((c) => {
                return <MenuItem value={c}>{c}</MenuItem>;
              })}
            </Select>
            <FormHelperText id="animal-helper">
              Seleccione el color del animal
            </FormHelperText>
          </FormControl>
        </Box>

        {/* VACUNAS*/}
        <Box sx={{ display: "flex", width: "100%" }}>
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "30%",
              height: "auto",
              marginRight: "10px",
            }}
          >
            <InputLabel>Vacunas</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              name="vaccine"
              value={input.vaccine}
              label="Vacunas"
              onChange={(e) => setInput({ ...input, vaccine: e.target.value })}
            >
              {vacunas.map((vacuna) => {
                return <MenuItem value={vacuna.id}>{vacuna.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
        {/* DISEASES*/}
        <Box sx={{ display: "flex", width: "100%" }}>
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "50%",
              marginRight: "10px",
            }}
          >
            <InputLabel>Enfermedades</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              name="disease"
              value={input.disease}
              label="Vacunas"
              onChange={(e) => setInput({ ...input, disease: e.target.value })}
            >
              {enfer.map((e) => {
                return <MenuItem value={e.id}>{e.name}</MenuItem>;
              })}
            </Select>
          </FormControl>

          {/* LOCATION*/}
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "50%",
              marginRight: "10px",
            }}
          >
            <InputLabel>Ciudad</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              name="location"
              value={input.location}
              label="Ciudad"
              onChange={(e) => setInput({ ...input, location: e.target.value })}
            >
              {lugar.map((e) => {
                return <MenuItem value={e.id}>{e.province}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>

        {/* EDAD */}
        <Box sx={{ display: "flex", width: "100%" }}>
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              padding: "10px",
              flexWrap: "wrap",
              width: "50%",
              minHeight: "100px",
            }}
          >
            <InputLabel id="age-select-label">Edad de la mascota</InputLabel>
            <Select
              labelId="age-select-label"
              id="age-select"
              value={input.age}
              onChange={handleChange}
              name="age"
            >
              {ageOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText id="age-helper">Ingrese la edad</FormHelperText>
          </FormControl>

          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <FormControl
              margin="normal"
              sx={{ display: "flex", width: "100%" }}
            >
              <FormLabel id="demo-radio-buttons-group-label">
                <span className="color_title">Genero</span>
              </FormLabel>
              <RadioGroup
                value={input.sex}
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={handleSelectGender}
                row
                margin="normal"
                sx={{
                  marginBottom: " 20px ",
                }}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Macho"
                  margin="normal"
                  sx={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                />
                <FormControlLabel
                  margin="normal"
                  value="Female"
                  control={<Radio />}
                  label="Hembra"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>

        <Box>
          {/* DESCRIPCION */}
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              minHeight: "auto",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Descripcion"
              variant="outlined"
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handleChange(e)}
            />
            <FormHelperText id="name-helper">
              Ingrese una breve descripcion
              {/*  {errors.name && <span>Este campo es requerido</span>} */}
            </FormHelperText>
          </FormControl>
        </Box>

        <FormControl className="containerBoton">
          <Button variant="contained" type="submit" margin="normal">
            Enviar
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default CreatePet;
