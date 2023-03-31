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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postPet } from "../../Redux/Actions/actions_pets";
import { razas } from "../../Redux/Actions/actions_filter";
import { color } from "../../Redux/Actions/actions_filter";
import "./CreatePet.css";
import { diseases, locations, vaccines  } from "./datos.js"

//react-hook-form
const schema = yup.object().shape({
  name: yup.string().required("El nombre no puede estar vacio"),
  animal: yup.string().required("Es obligatorio seleccionar un tipo de animal"),
  breed: yup.string().required("Seleccione una raza de animal"),
  height: yup.string().required("Seleccione un tamaño aproximado"),
  weight: yup.string().required("El peso es obligatorio"),
  age: yup.string().required("Es obligatorio seleccionar la edad"),
  color: yup.string().required("Seleccione el color"),
  identified: yup.string().required("Seleccione la identificacion del animal")
})

function CreatePet() {
  
  const { register, formState: { errors } } = useForm({ mode: "onTouched", resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // //vacuna
  // const [vacunas, setVacunas] = useState([]);
  // //disease
  // const [enfer, setEnfer] = useState([]);
  // //location
  // const [lugar, setLugar] = useState([]);




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

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    const formdata = new FormData();
    formdata.append = ('image', e.target.files[0]) 
    formdata.append("upload_preset", "gamepalace");
    formdata.append("cloud_name", "ddjreipc4");
    fetch("https://res.cloudinary.com/ddjreipc4/image/upload/", {
      method: "post",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInput({
          ...input,
          imageurl: data.url,
        });
        setMiniImage(data.url);
      })
      .catch((error) => {
        console.log(error);
      });
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

  const handlerSelectDisease = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      disease: e.target.value,
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
  

  //styledComponents----------------
  const ageOptions = [
    { value: "menor a 1 año", label: "Menos de 1 año" },
    { value: "mayor a 1 año", label: "Más de 1 año" },
    { value: "mayor a 5 años", label: "Más de 5 años" },
    { value: "mayor 10 años", label: "Más de 10 años" },
  ];
  // // VACUNAS
  // useEffect(() => {
  //   async function getVacunas() {
  //     const res = await axios.get("/vaccines");
  //     setVacunas(res.data);
  //   }
  //   getVacunas();
  // }, []);
  // // DISEASES
  // useEffect(() => {
  //   async function getDisease() {
  //     const res = await axios.get("/diseases");
  //     setEnfer(res.data);
  //   }
  //   getDisease();
  // }, []);
  // // LOCATION
  // useEffect(() => {
  //   async function getLocation() {
  //     const res = await axios.get("/locations");
  //     setLugar(res.data);
  //   }
  //   getLocation();
  // }, []);

  return (
    <div className="containerGral">
      <form onSubmit={(e) => enviarDatos(e)} className="containerForm">
        <Typography variant="h6" component="h1">
          Registro de Mascota
        </Typography>

        <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }}
>
  {/* identified */}
  
  <Box sx={{ display: "inline-flex", width: "50%" }}>
      <FormControl
        margin="normal"
        sx={{ display: "flex", width: "100%" }}
      >
      <FormControl>
        <span>Mascota</span>
      </FormControl>
      <RadioGroup
        sx={{
          marginBottom: " 20px ",
        }}
        {...register("identified")}
        error={!!errors.identified}
        helperText={errors?.identified?.message}
        id="demo-radio-buttons-group-label"
        value={input.identified}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={handleSelectIdentified}
        row
      >
        <FormControlLabel
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "flex-end",
        }}
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
      {errors.identified && (
        <Typography variant="caption" color="error">
          {errors.identified.message}
        </Typography>
      )}
    </FormControl>
  </Box>

  {/* NOMBRE */}
  <Box sx={{ width: "50%" }}>
    <FormControl margin="normal" sx={{ display: "flex", width: "100%" }}>
      <TextField
        {...register("name")}
        error={!!errors.name}
        helperText={errors?.name?.message}
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
      </FormHelperText>
    </FormControl>
  </Box>
</Box>

          {/* peso */}
          <Box sx={{ display: "flex", width: "100%" }}>
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "49%",
              minHeight: "100px",
            }}
          >
            <TextField
              {...register("weight")}
              error={!!errors.weight} helperText={errors?.weight?.message}
              id="outlined-basic"
              label="Peso"
              variant="outlined"
              type="number"
              name="weight"
              value={input.weight}
              onChange={(e) => handleChange(e)}
            />
            {/* {errors.weight && <Typography variant="caption" color="error">{errors.weight.message}</Typography>} */}
            <FormHelperText id="weight-helper">
              Ingrese el peso
            </FormHelperText>
          </FormControl>

          {/* imagen  */}
          
          <FormControl
            margin="normal"
            sx={{
              display: "inline-flex",
              flexWrap: "wrap",
              width: "49%",
              minHeight: "100px",
              marginLeft: "10px"
            }}
          >
            <TextField
              id="image"
              aria-describedby="image-helper"
              type="file"
              name="image"
              //value={input.image}
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
              {...register("animal")}
              error={!!errors.animal} helperText={errors?.animal?.message}
              name="animal"
              aria-describedby="animal-helper"
              value={input.animal}
              label="Animal"
              onChange={handleChange}
            >
              {["Perro", "Gato"].map((m) => {
                return <MenuItem value={m}>{m}</MenuItem>;
              })}
            </Select>
            {errors.animal && <Typography variant="caption" color="error">{errors.animal.message}</Typography>}
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
              {...register("breed")}
              error={!!errors.breed} helperText={errors?.breed?.message}
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
            {errors.breed && <Typography variant="caption" color="error">{errors.breed.message}</Typography>}
            <FormHelperText id="breed-helper">
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
              {...register("height")}
              error={!!errors.height} helperText={errors?.height?.message}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Tamaño"
              name="height"
              value={input.height}
              onChange={(e) => handleChange(e)}
            >
              {["Grande", "Mediano", "Chico"].map((t) => {
                return <MenuItem value={t}>{t}</MenuItem>;
              })}
            </Select>
            {errors.height && <Typography variant="caption" color="error">{errors.height.message}</Typography>}
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
              {...register("color")}
              error={!!errors.color} helperText={errors?.color?.message}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="color"
              onChange={(e) => handlerSelectColor(e)}
            >
              {color.map((c) => {
                return <MenuItem value={c}>{c}</MenuItem>;
              })}
            </Select>
            {errors.color && <Typography variant="caption" color="error">{errors.color.message}</Typography>}
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
              width: "100%",
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
              {vaccines.map((vacuna) => {
                return <MenuItem value={vacuna}>{vacuna}</MenuItem>;
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
              label="Enfermedades"
              onChange={(e) => setInput({ ...input, disease: e.target.value })}
            >
              {diseases.map((e) => {
                return (
                <MenuItem value={e.name}>{e.name}</MenuItem> 
              )})}
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
              {locations.map((e) => {
                return <MenuItem value={e}>{e}</MenuItem>;
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
              flexWrap: "wrap",
              width: "50%",
              minHeight: "100px",
              marginRight: "15px"
            }}
          >
            <InputLabel>Edad</InputLabel>
            <Select
              {...register("age")}age
              error={!!errors.age} helperText={errors?.age?.message}
              label= "Edad"
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
            {errors.age && <Typography variant="caption" color="error">{errors.age.message}</Typography>}
            <FormHelperText>Ingrese la edad</FormHelperText>
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
                  marginLeft: "10px"
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
