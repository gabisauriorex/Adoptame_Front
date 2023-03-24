










/* 

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postPet } from '../../Redux/Actions/actions_pets';
import { FormControl, InputLabel, Input, FormHelperText, Container, Button, Grid, Typography } from "@mui/material"
import "./CreatePet.css"

function CreatePet(){
    const { register, handleSubmit, formState: { errors }, reset} = useForm({ mode: "onTouched" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error } = useSelector((state) => state.pets_reducer.formData);
    const [ input, setInput ] = useState({
        name: '',
        animal: '',
        sex:'',
        height: '',
        breed: '',
        weight: '',
        age: '',
        color: '',
        description: '',
        image: '',
    })


    const onSubmit = evento =>{
        console.log(evento);
    }

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit2 = (e) => {
        e.preventDefault();
        if (errors.name || errors.animal || errors.breed || errors.height || errors.weight || errors.age || errors.color ) {
            alert("Revise los datos")
        }else{
            dispatch(postPet(input))
            navigate('/')
            alert("Animal agregado correctamente")
        }
    }


     return (
        <div className='containerPrincipal'>
       <form  className='containerForm'>
        {error && <div>Error: {error}</div>}
      

            <Typography variant='h6' sx={{backgroundColor:"#f06292" ,borderRadius:5 ,padding:1} }> Registrar Mascota</Typography>
                    <FormControl margin='normal'>
                        <InputLabel htmlFor="name">Nombre:</InputLabel>
                        <Input id="name"  type="text" aria-describedby='name-helper' value={input.name} {...register("name", { required: true })} onChange={handleChange}/>
                        <FormHelperText id="name-helper">Ingrese el nombre del animal</FormHelperText>
                        <FormControl className="error-message">{errors.name && <span>Este campo es requerido</span>}</FormControl>
                    </FormControl>
            
                    <FormControl margin='normal'>
                        <InputLabel htmlFor="animal">Animal:</InputLabel>
                        <Input id="animal" aria-describedby='animal-helper'
                            type="text"
                            value={input.animal}
                            {...register("animal", {
                            required: true,
                            pattern: /^[a-zA-Z]+$/, // solo letras
                            minLength: 3, // minimo de caracteres
                            maxLength: 20 // maximo de caracteres
                            })}
                            onChange={handleChange}
                        />
                        <FormHelperText id="animal-helper">Ingrese el tipo de animal</FormHelperText>
                        <FormControl className="error-message">{errors.animal?.type === "required" && <span>Este campo es requerido</span>}</FormControl>
                        <FormControl className="error-message">{errors.animal?.type === "pattern" && <span>Debe ser solo letras</span>}</FormControl>
                        <FormControl className="error-message">{errors.animal?.type === "minLength" && <span>Debe tener al menos 3 caracteres</span>}</FormControl>
                        <FormControl className="error-message">{errors.animal?.type === "maxLength" && <span>No debe tener más de 20 caracteres</span>}</FormControl>
                    </FormControl>
                  
                    <FormControl margin='normal'>
                        <InputLabel>Raza:</InputLabel>
                        <Input id="breed" aria-describedby='breed-helper'
                            type="text"
                            value={input.breed}
                            {...register("breed", {
                            required: true,
                            pattern: /^[a-zA-Z]+$/, // solo letras
                            minLength: 3, // minimo de caracteres
                            maxLength: 20 // maximo de caracteres
                            })}
                            onChange={handleChange}
                        />
                        <FormHelperText id="breed-helper">Ingrese el nombre de la raza</FormHelperText>
                        <FormControl className="error-message">
                            {errors.breed?.type === "required" && <span>Este campo es requerido</span>}
                        </FormControl>
                        <FormControl className="error-message">
                            {errors.breed?.type === "pattern" && <span>Debe ser solo letras</span>}
                        </FormControl>
                        <FormControl className="error-message">
                            {errors.breed?.type === "minLength" && <span>Debe tener al menos 3 caracteres</span>}
                        </FormControl>
                        <FormControl className="error-message">
                            {errors.breed?.type === "maxLength" && <span>No debe tener más de 20 caracteres</span>}
                        </FormControl>
                    </FormControl>
           
                    <FormControl margin='normal'>
                        <InputLabel>Altura:</InputLabel>
                        <Input id="height" aria-describedby='height-helper'
                            type="text"
                            value={input.height}
                            {...register("height", {
                            required: true,
                            pattern: /^[0-9]+(,[0-9]+)?$/, // solo numeros y una coma decimal
                            })}
                            onChange={handleChange}
                        />
                        <FormHelperText id="height-helper">Ingrese la altura (Acepta decimal)</FormHelperText>
                        <FormControl className="error-message">
                            {errors.height?.type === "required" && <span>Este campo es requerido</span>}
                        </FormControl>
                        <FormControl className="error-message">
                        {errors.height?.type === "pattern" && <span>Debe ser un número válido (con una coma decimal si corresponde)</span>}
                        </FormControl>
                    </FormControl>
               
                    <FormControl margin='normal'>
                        <InputLabel>Sexo:</InputLabel>
                        <Input id="sex" aria-describedby='sex-helper'
                            type="text"
                            value={input.sex}
                            {...register("sex", {
                            required: true,

                            })}
                            onChange={handleChange}
                        />
                        <FormHelperText id="height-helper">Ingrese la altura (Acepta decimal)</FormHelperText>
                        <FormControl className="error-message">
                            {errors.height?.type === "required" && <span>Este campo es requerido</span>}
                        </FormControl>
                        <FormControl className="error-message">
                        {errors.height?.type === "pattern" && <span>Debe ser un número válido (con una coma decimal si corresponde)</span>}
                        </FormControl>
                    </FormControl>
                   
                    <FormControl margin='normal'>
                        <InputLabel>Peso:</InputLabel>
                        <Input id="weight" aria-describedby='weight-helper' type="number" value={input.weight} {...register("weight", { required: true, min: 0 })} onChange={handleChange}/>
                        <FormHelperText id="weight-helper">Ingrese el peso</FormHelperText>
                        <FormControl className="error-message">
                            {errors.weight && <span>Este campo es requerido y debe ser un número positivo</span>}
                        </FormControl>
                    </FormControl>
                
                    <FormControl margin='normal'>
                        <InputLabel>Edad:</InputLabel>
                        <Input id="age" aria-describedby='age-helper' type="text"value={input.age} {...register("age", { required: true, min: 0 })} onChange={handleChange}/>
                        <FormHelperText id="age-helper">Ingrese la edad (Aclare meses o años)</FormHelperText>
                        <FormControl className="error-message">
                            {errors.age && <span>Este campo es requerido y debe ser un número positivo</span>}
                        </FormControl>
                    </FormControl>
                 
                    <FormControl margin='normal'>
                        <InputLabel>Color:</InputLabel>
                        <Input id="color" aria-describedby='color-helper'
                            type="text"
                            value={input.color}
                            {...register("color", {
                            required: true,
                            pattern: /^[a-zA-Z]+$/, // solo letras
                            minLength: 3, // minimo de caracteres
                            maxLength: 20 // maximo de caracteres
                            })}
                            onChange={handleChange}
                        />
                        <FormHelperText id="color-helper">Ingrese el Color </FormHelperText>
                        <FormControl className="error-message">
                        </FormControl>
                            {errors.color?.type === "required" && <span>Este campo es requerido</span>}
                        <FormControl className="error-message">
                            {errors.color?.type === "pattern" && <span>Debe ser solo letras</span>}
                        </FormControl>
                        <FormControl className="error-message">
                            {errors.color?.type === "minLength" && <span>Debe tener al menos 3 caracteres</span>}
                        </FormControl>
                        <FormControl className="error-message">
                            {errors.color?.type === "maxLength" && <span>No debe tener más de 20 caracteres</span>}
                        </FormControl>
                    </FormControl>
           
                    <FormControl>
                        <InputLabel margin='normal'>Description:</InputLabel>
                        <Input id="description" aria-describedby='description-helper'
                            type="text"
                            value={input.description}
                            {...register("description")}
                            onChange={handleChange}
                        />
                        <FormHelperText id="description-helper">Ingrese una breve descripcion</FormHelperText>
                    </FormControl>
             
                    <FormControl margin='normal'>
                        <InputLabel>Imagen:</InputLabel>
                        <Input id="image" aria-describedby='image-helper'
                            type="text"
                            value={input.image}
                            {...register("image")}
                            onChange={handleChange}
                        />
                        <FormHelperText id="image-helper">Ingrese el link de una imagen</FormHelperText>
                    </FormControl>
                    

            <FormControl className='containerBoton'> 
                <Button variant="contained" type="submit" margin='normal' onClick={handleSubmit2}>
                    Enviar
                </Button>
            </FormControl>
               
    
    </form>
        </div>

    
  )
}

export default CreatePet;










*/