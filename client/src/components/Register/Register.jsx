import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { locations } from "../../ArrayDatos/arrayPets";
import { useEffect } from "react";
import { createUser } from "../../Redux/Actions/actions_user"
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: "",
    address: "",
    email: "",
    phone: "",
    pet: "",
    location: "",
  });
  const [pet, setPet] = useState([]);
  const enviarDatos = (e) => {
    console.log(input);
    e.preventDefault();
    dispatch(createUser(input));
    navigate("/");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSelectLocation = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      location: e.target.value,
    });
  };

  const handlerSelectPet = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      pet: e.target.value,
    });
  };
  useEffect(() => {
    axios
      .get("/pets")
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <form onSubmit={(e) => enviarDatos(e)}>
      <TextField
        id="outlined-basic"
        name="fullname"
        label="Nombre"
        type="text"
        variant="outlined"
        value={input.fullname}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="email-input"
        name="email"
        label="Email"
        variant="outlined"
        type="email"
        value={input.email}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="age-input"
        name="phone"
        label="Numero de telefono"
        variant="outlined"
        type="number"
        value={input.phone}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="description-input"
        name="address"
        label="Direccion"
        variant="outlined"
        value={input.address}
        onChange={(e) => handleChange(e)}
      />
      <FormControl sx={{ width: "450px" }}>
        <InputLabel id="location-select-label">Lugares</InputLabel>
        <Select
              labelId="location-select-label"
              id="location-select"
              type="text"
              name="location"
              value={input.location}
              label="Ciudad"
              onChange={(e) => handleChange(e)}
            >
              {locations.map((e) => {
                return <MenuItem value={e}>{e}</MenuItem>;
              })}
            </Select>
      </FormControl>

      <FormControl sx={{ width: "450px" }}>
        <InputLabel id="pet-select-label">Mascotas</InputLabel>
        <Select
          labelId="pet-select-label"
          type="text"
          id="pet-select"
          value={input.pet}
          onChange={(e) => handlerSelectPet(e)}
        >
          {pet.map((p) => (
            <MenuItem key={p.id} value={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        Crear Usuario
      </Button>
    </form>
  );
}

export default Register;
