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
<<<<<<< Updated upstream
    identified: true,
    sex: "Male",
=======
    identified: "",
    sex: "",
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  const handleSelectBreed = (event) => {
    console.log(event.target.value);
    setInput({
      ...input,
      breed: [...input.breed, event.target.value],
=======
  const handleSelectBreed = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  const handleSelectIdentified = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      identified: e.target.value
    })
=======
  const handleSelectIdentified = (event) => {
    console.log(event.target.value)
    const value = event.target.value;
    const identified = value === "encontra";
    setInput({
      ...input,
      identified,
    });
>>>>>>> Stashed changes
  };
  const handleSelectGender = (e) => {
            console.log(e.target.value)
            setInput({
              ...input,
              sex: e.target.value
            })
          }
  const enviarDatos = (e) => {
    console.log(input)
    e.preventDefault();
    dispatch(postPet(input))
    navigate("/")
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
    { value: "mayor 10 años", label: "Más de 10 años" }
  ];

  return (
    <div className="containerGral">
      <form onSubmit={(e) => enviarDatos(e)} className="containerForm">
        <Typography variant="h6" component="h1">
          Registro de Mascota
        </Typography>

          {/* identified */}
          <Box>
            <FormControl margin="normal" sx={{display: "inline-flex", justifyContent: "flex-start" }}>
              <FormLabel id="demo-radio-buttons-group-label">
                <span className="color_title">Mascota</span>
              </FormLabel>
              <RadioGroup 
<<<<<<< Updated upstream
=======
                id="demo-radio-buttons-group-label"
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
                  checked={input.identified === true}
>>>>>>> Stashed changes
                />
                <FormControlLabel
                  value="adopta"
                  control={<Radio />}
                  label="Para adoptar"
<<<<<<< Updated upstream
=======
                  checked={input.identified === false}
>>>>>>> Stashed changes
                />
              </RadioGroup>
            </FormControl>
          </Box>
          

          <Box 
          sx={{ display: "flex", width:"100%" }}
          >
              {/* NOMBRE */}
              <FormControl margin="normal" sx={{ display: "flex", padding: "10px" , flexWrap: "wrap", width:"50%", minHeight: "100px", }}>
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
                sx={{ display: "flex", flexWrap: "wrap", width:"50%", minHeight: "100px", padding: "10px" }}
              >
                <TextField
                  id="image"
                  aria-describedby="image-helper"
                  type="file"
                  name="image"
                  value={input.image}
                  onChange={handleImage}
<<<<<<< Updated upstream
                  /* disabled */
                  disabled
=======
>>>>>>> Stashed changes
                />
                <FormHelperText id="image-helper">
                  Ingrese una imagen
                </FormHelperText>
              </FormControl>
          </Box>

        {/* animal */}
        <Box sx={{ display: "flex", width:"100%" }}>
          <FormControl margin="normal" sx={{ display: "flex", flexWrap: "wrap", width:"50%", marginRight:"10px"  }}>
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
          <FormControl sx={{ display: "flex", flexWrap: "wrap", width:"50%", marginRight:"10px"  }} margin="normal">
            <InputLabel>Raza</InputLabel>
            <Select
<<<<<<< Updated upstream
=======
            labelId="demo-simple-select-label"
            id="demo-simple-select"
>>>>>>> Stashed changes
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
          <FormControl sx={{ display: "flex", flexWrap: "wrap", width:"50%", marginRight:"10px"  }}  margin="normal">
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
          <FormControl sx={{ display: "flex", flexWrap: "wrap", width:"50%", marginRight:"10px" }}margin="normal">
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
        <FormControl margin="normal" sx={{ display: "flex", padding: "10px" , flexWrap: "wrap", width:"50%", minHeight: "100px", }}>
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
        
<<<<<<< Updated upstream
=======
<Box>
{/* DESCRIPCION */}
<FormControl margin="normal" sx={{ display: "flex", flexWrap: "wrap", width:"100%", minHeight: "auto", }}>
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
        
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
/* 
 <FormControl margin="normal">
          <InputLabel>
            Tipo
          </InputLabel>
          <Select name="animal" value={input.animal} label="Animal" onChange={handleChange}
            {...register("animal", {
              required: true,
              pattern: /^[a-zA-Z]+$/, 
              minLength: 3, 
              maxLength: 20,})}>
              <MenuItem value="perro" >Perro</MenuItem>
              <MenuItem value="gato" >Gato</MenuItem>
          </Select>
          <FormHelperText id="animal-helper">
            Seleccione el tipo de animal
          </FormHelperText>
        </FormControl>

        <FormControl margin="normal">
          <TextField
            id="breed"
            label="Raza"
            aria-describedby="breed-helper"
            type="text"
            value={input.breed}
            {...register("breed", {
              required: true,
              pattern: /^[a-zA-Z]+$/, // solo letras
              minLength: 3, // minimo de caracteres
              maxLength: 20, // maximo de caracteres
            })}
            onChange={handleChange}
          />
          <FormHelperText id="breed-helper">
            Ingrese el nombre de la raza
          </FormHelperText>
        </FormControl>
        <FormControl margin="normal">
          <TextField
            id="height"
            label="Altura"
            aria-describedby="height-helper"
            type="text"
            value={input.height}
            {...register("height", {
              required: true,
              pattern: /^[0-9]+(,[0-9]+)?$/, // solo numeros y una coma decimal
            })}
            onChange={handleChange}
          />
          <FormHelperText id="height-helper">
            Ingrese la altura (Acepta decimal)
          </FormHelperText>
          <FormControl className="error-message">
            {errors.height?.type === "required" && (
              <span>Este campo es requerido</span>
            )}
          </FormControl>
          <FormControl className="error-message"></FormControl>
        </FormControl>
        
        <>
            <FormControl>
              <FormHelperText id="height-helper" style={{ fontSize: "15px" }}>
                  Seleccione el sexo
              </FormHelperText>
                  <FormControlLabel
                    control={
                      <Checkbox 
                        checked={input.sex.male}
                        onChange={handleGenderChange}
                        name="male"
                        color="primary"
                      />
                    }
                    label="Macho"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                      checked={input.sex.female}
                      onChange={handleGenderChange}
                      name="female"
                      color="primary"
                      />
                    }
                    label="Hembra"
                  />
            </FormControl>
        </>

        <FormControl margin="normal">
          <TextField
            id="weight"
            label="Peso"
            aria-describedby="weight-helper"
            type="number"
            value={input.weight}
            {...register("weight", { required: true, min: 0 })}
            onChange={handleChange}
          />
          <FormHelperText id="weight-helper">Ingrese el peso</FormHelperText>
          <FormControl className="error-message"></FormControl>
        </FormControl>

        <FormControl margin="normal">

          <TextField
            id="age"
            label="Edad"
            aria-describedby="age-helper"
            type="text"
            value={input.age}
            {...register("age", { required: true, min: 0 })}
            onChange={handleChange}
          />
          <FormHelperText id="age-helper">
            Ingrese la edad (Aclare meses o años)
          </FormHelperText>
          <FormControl className="error-message">
            {errors.age && (
              <span>Este campo es requerido y debe ser un número positivo</span>
            )}
          </FormControl>
        </FormControl>

        <FormControl margin="normal">
          <TextField
            id="color"
            label="Color"
            aria-describedby="color-helper"
            type="text"
            value={input.color}
            {...register("color", {
              required: true,
              pattern: /^[a-zA-Z]+$/, // solo letras
              minLength: 3, // minimo de caracteres
              maxLength: 20, // maximo de caracteres
            })}
            onChange={handleChange}
          />
          <FormHelperText id="color-helper">Ingrese el Color </FormHelperText>
          <FormControl className="error-message"></FormControl>
          {errors.color?.type === "required" && (
            <span>Este campo es requerido</span>
          )}
          <FormControl className="error-message">
            {errors.color?.type === "pattern" && (
              <span>Debe ser solo letras</span>
            )}
          </FormControl>
          <FormControl className="error-message">
            {errors.color?.type === "minLength" && (
              <span>Debe tener al menos 3 caracteres</span>
            )}
          </FormControl>
          <FormControl className="error-message">
            {errors.color?.type === "maxLength" && (
              <span>No debe tener más de 20 caracteres</span>
            )}
          </FormControl>
        </FormControl>

        <FormControl>
          <TextField
            id="description"
            label="Descripcion"
            aria-describedby="description-helper"
            type="text"
            value={input.description}
            {...register("description")}
            onChange={handleChange}
          />
          <FormHelperText id="description-helper">
            Ingrese una breve descripcion
          </FormHelperText>
        </FormControl>
      
        <FormHelperText id="height-helper" style={{ fontSize: "15px", marginTop: "15px" }}>
                  Ingrese una imagen
        </FormHelperText>
        <FormControl margin="normal">
          <TextField
            id="image"
            aria-describedby="image-helper"
            type="file"
            value={input.image}
            {...register("image")}
            onChange={handleImage}
            InputProps={{ style: inputImgStyle }}
          />
          <FormHelperText id="image-helper">
            Ingrese una imagen
          </FormHelperText>
        </FormControl>
  

*/

/* 

 <FormControl sx={{width:130}}>
        <InputLabel id="demo-simple-select-label">Raza</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label='raza'
          onChange={handlerFilterBreed}
          defaultValue='todos' 
        >

          {
            razas.map(name=>{
              return(
             <MenuItem value={name}>{name}</MenuItem>
              )
            })
          }
        
         </Select>
      </FormControl>






      const Title = styled.h1`
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;





*/
=======
>>>>>>> Stashed changes
