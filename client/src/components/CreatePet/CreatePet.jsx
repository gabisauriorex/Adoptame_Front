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
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postPet } from "../../Redux/Actions/actions_pets";
import { razas } from "../../Redux/Actions/actions_filter";
import { color } from "../../Redux/Actions/actions_filter";
import "./CreatePet.css";

//react-hook-form

function CreatePet() {
  //const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onTouched" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    timewait: "",
    breed: "",
    animal: "",
    height: "",
    color: "",
    identified: "",
    sex: "",
    age: "",
    /* vacunas:"todas",
    edad:"4 años",
    especie:"perro" */
  });

  //================handlerChange======================
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleImage = (e) => {
    console.log(e.target.value);
    setInput([...input.image, e.target.value]);
  };

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
      height: [...input.height, e.target.value],
    });
  };
  const handlerSelectColor = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      color: [...input.color, e.target.value],
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
    console.log(input);
    e.preventDefault();
    dispatch(postPet(input));
    navigate("/");
  };
  /*   const inputImgStyle = {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        } */

  //styledComponents----------------
  const ageOptions = [
    { value: "menor a 1 año", label: "Menos de 1 año" },
    { value: "mayor a 1 año", label: "Más de 1 año" },
    { value: "mayor a 5 años", label: "Más de 5 años" },
    { value: "mayor 10 años", label: "Más de 10 años" },
  ];

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
              // defaultValue="todos"
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

        <Box sx={{ display: "flex", width: "100%" }}>
          {/* NOMBRE */}
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
            <TextField
              id="image"
              aria-describedby="image-helper"
              type="file"
              name="image"
              value={input.image}
              onChange={handleImage}
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="tamaño"
              onChange={(e) => handleSelectSize(e)}
            >
              {["Grande", "Mediano", "Chico"].map((t) => {
                return <MenuItem value={t}>{t}</MenuItem>;
              })}
            </Select>
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
