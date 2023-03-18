import React from 'react'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/joy/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {Link} from 'react-router-dom'

function CardPet({id,imagen,name,descripcion,color,edad,especie,sexo}) {
 
  return (
    <div>
        <Box
            component="ul"
            sx={{ display: "Grid", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
          >
            <Card
              variant="outlined"
              sx={{
                minHeight: "280px",
                width: 320,
                backgroundColor: "#fff",
                borderColor: "#000",
              }}
            >
              <ImageList
                sx={{ width: 500, height: 200, ml: 1 }}
                rowHeight={164}
              >
                <ImageListItem key={imagen}>
                  <img
                    src={`${imagen}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${imagen}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt="mascota"
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <CardContent
                sx={{
                  alignItems: "self-end",
                  justifyContent: "flex-end",
                  background: "pink",
                  border: "1px solid",
                  borderColor: "black",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {color}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edad}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {especie}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {sexo}
                </Typography>
              </CardContent>

            {/*   <CardActions> */}
                <Button fullWidth="true" variant='outline' sx={{backgroundColor:"#f06292" , color:"black"}}   
                component={Link}
                to={`/Pet/:${id}`}
                > Detalle </Button>
             {/*  </CardActions> */}
            </Card>
          </Box>
    </div>
  )
}

export default CardPet
