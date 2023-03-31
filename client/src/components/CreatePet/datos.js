export const diseases = [
    {name: "Parvovirosis", severity: 5},
    {name: "Moquillo", severity: 5 },
    {name: "Hepatitis infecciosa", severity: 5 },
    {name: "Laringotraqueitis infecciosa", severity: 5},
    {name: "Gastroenteritis por coronavirus", severity: 5},
    {name: "Rabia", severity: 5},
    {name: "Otitis", severity: 2},
    {name: "Conjuntivitis", severity: 3},
    {name: "Leucemia felina", severity: 5},
    {name: "Panleucopenia felina", severity: 5},
    {name: "Inmunodeficiencia felina", severity: 4},
    {name: "Peritonitis", severity: 5},
    {name: "Problemas gastrointestinales", severity: 4},
    {name: "Cistitis", severity: 4},
    {name: "Alergia", severity: 3}
];
export const locations = [
    "Buenos Aires",
    "Ciudad Autónoma de Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego", 
    "Antártida e Islas del Atlántico Sur",
    "Tucumán"];
export const vaccines = [
    "Primera vacuna polivalente (séxtuple)",
    "Segunda dosis de polivalente (el adenovirus, el moquillo, la parainfluenza y el parvovirus)",
    "Refuerzo de la polivalente",
    "Refuerzo de la polivalente",
    "Refuerzo contra la rabia",
    "Hepatitis canina",
    "Bordetella bronchiseptica",
    "Borrelia burgdorferi",
    "Bacterias leptospira",
    "Triple felina ( contra la rinotraqueitis viral felina, el calicivirus felino y la panceleucopenia felina (moquillo))",
    "Desparasitado"
];





<Box sx={{ display: "flex", width: "100%" }}>
          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "50%",
              minHeight: "100px",
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