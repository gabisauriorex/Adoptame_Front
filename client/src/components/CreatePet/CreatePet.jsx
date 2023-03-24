import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  FormLabel,
  RadioGroup,
  Radio
  
} from "@mui/material";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postPet } from "../../Redux/Actions/actions_pets";
import { razas } from "../../Redux/Actions/actions_filter";
import { tamanio } from "../../Redux/Actions/actions_filter";
import { color } from '../../Redux/Actions/actions_filter'
import "./CreatePet.css";

//react-hook-form
import { useForm } from "react-hook-form";

function CreatePet() {

 //const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onTouched" }); 

/*   const dispatch = useDispatch();
  const navigate = useNavigate();
 */

  const [error,setError]=useState({})
  const [input, setInput] = useState({
    name:'',
    image:'',
    description:'',
    timewait:'',
    breed: '',
    animal:'',
    height : '',
    color:'',
    identified:{si:true ,no:false},
    /* vacunas:"todas",
    edad:"4 años",
    sex:"hembra",
    especie:"perro" */
  });

  //================handlerChange======================
 const handleChange=(e)=>{
   console.log(e.target.value)
   setInput({
        ...input,
        [e.target.name] : e.target.value 
    })   
  }  
 
    const handleImage = (e) => {
      console.log(e.target.value)
      setInput([ ...input.image, e.target.value ]);
        };

      const handleSelectBreed=(event)=>
    {
        console.log(event.target.value)
         setInput({
            ...input,
            breed: [...input.breed, event.target.value],
        }) 
    }
      const handleSelectSize=(e)=>
     {
       console.log(e.target.value)
         setInput({
            ...input,
            height: [...input.height, e.target.value],
        }) 
     }
      const handlerSelectColor=(e)=>
     {
       console.log(e.target.value)
         setInput({
            ...input,
            color: [...input.color, e.target.value],
        }) 
     }

  const handleSelectIdentified = (e) => {
    console.log(e.target.value)
    setInput({
      ...input,
      identified: {
        ...input.identified,
        [e.target.name]: e.target.value
      }
    })
  }

  const enviarDatos=(e) => {
    e.preventDefault();


   /*  if (
      errors.name ||
      errors.animal ||
      errors.breed ||
      errors.height ||
      errors.weight ||
      errors.age ||
      errors.color
    ) {
      alert("Revise los datos");
    } else {
      dispatch(postPet(input));
      navigate("/");
     alert("Animal agregado correctamente"); 
    }
    */
  };

/*   const inputImgStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  } */

  return (
     <div className="containerGral">

       <form onSubmit={(e)=>enviarDatos(e)} className='containerForm'>
  <Typography variant="h6" component="h1">Registro de Mascota</Typography>

          <Box>
             {/* identified */}
      <FormControl sx={{marginTop:1}}>
      <FormLabel id="demo-radio-buttons-group-label"><span className="color_title">Mascota</span></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
       // defaultValue="todos" 
        name="radio-buttons-group"
        onChange={handleSelectIdentified}
      >
      <FormControlLabel value="encontra" control={<Radio />} label="Encontrado" />
        <FormControlLabel value="adopta" control={<Radio />} label="Adopta" />
       </RadioGroup>
     </FormControl>

      
          <FormControl margin="normal" >
           <TextField 
           id="outlined-basic" 
           label="Nombre de Mascota" 
           variant="outlined" 
           type='text'
           name='name'
           value={input.name} 
           onChange={(e)=>handleChange(e)}  
          />
          <FormHelperText id="name-helper">
            Ingrese el nombre del animal
             {/*  {errors.name && <span>Este campo es requerido</span>} */}
          </FormHelperText> 
        </FormControl>

          
        {/* imagen  */}
    
      <FormControl margin="normal">
    <FormHelperText id="height-helper" >
         Ingrese una imagen
        </FormHelperText>
          <TextField
            id="image"
            aria-describedby="image-helper"
            type="file"
            name="image"
            value={input.image}
         
            onChange={handleImage}

              /* disabled */
              disabled
          />
          <FormHelperText id="image-helper">
            Ingrese una imagen
          </FormHelperText>
        </FormControl> 


         </Box>
  
  

        {/* animal */}

        <Box >
          <FormControl margin="normal" sx={{width:200}} >
          <InputLabel>
            Tipo
          </InputLabel>
          <Select name="animal" value={input.animal} label="Animal" onChange={handleChange}>
          { ['Perro','Gato'].map(m=>{
                   return (
                   <MenuItem value={m}>{m}</MenuItem>
                  )
                })
              }
          </Select>
          <FormHelperText id="animal-helper">
            Seleccione el tipo de animal
          </FormHelperText>
        </FormControl>
        
        {/* Raza */}
         <FormControl  sx={{width:200 ,gap:1}}  margin='normal' >
        <InputLabel id="demo-simple-select-label">Raza</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label='raza'
          onChange={(e)=>{handleSelectBreed}}
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
           <FormHelperText id="animal-helper">
            Seleccione el tipo de animal
          </FormHelperText>
      </FormControl>

          {/* TAMAÑO */}
      <FormControl sx={{width:200}} margin='normal'>
        <InputLabel id="demo-simple-select-label">Tamaño</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
 
          label="tamaño"
          onChange={(e)=>handleSelectSize(e)}
        >
          {
            ['Grande','Mediano','Chico'].map(t=>{
              return(
                <MenuItem value={t}>{t}</MenuItem>
              )
            })
          }
          </Select>
      </FormControl>

          <FormControl sx={{width:200}} margin="normal">
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
     
          label="color"
          onChange={(e)=>handlerSelectColor(e)}
        >

          {
            color.map(c=>{
              return (
                <MenuItem value={c}>{c}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl> 

        
        </Box>



       <FormControl className="containerBoton">
          <Button
            variant="contained"
            type="submit"
            margin="normal"
          >
            Enviar
          </Button>
        </FormControl> 
      </form>

     </div>
  );
}


export default CreatePet;



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