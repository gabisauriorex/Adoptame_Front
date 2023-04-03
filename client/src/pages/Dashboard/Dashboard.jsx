import React from "react";
import "./Dashboard.css"
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Table(pet) {

  return (
    <div>
      <Box component="span" sx={{ p: 1.5, border: '1px solid black', display:"flex" }}>              
        <table>
          <thead>
            <tr>
            <Box component="span" sx={{ p: "1px", borderBottom: '1px solid black', display:"flex" }}>              
              <Stack className="categoria"  p={1} direction="row">            
                <th className="recuadros">
                  Id:
                </th>
                <th className="recuadros">
                  Nombre:
                </th>
                <th className="recuadros">
                  Estado:
                </th>  
                <th className="recuadros">
                  Desactivar/Activar
                </th>          
              </Stack>
            </Box>
            </tr>
          </thead>
          <tbody>
            <tr>
            <Box component="span" sx={{ p: "10px", borderBottom: '1px dashed black', display:"flex",width: 700,
         }}>
              <Stack className="data" spacing={"auto"} direction="row">            
                <th className="recuadros">
                  1000
                </th>
                <th className="recuadros">
                  pedro perez
                </th>
                <th className="recuadros">
                  desactivado
                </th>                   
                <th className="recuadros">
                  <Switch {...label} />
                </th>       
              </Stack>
             </Box>
            </tr>
          {/*   {pet?.account?.transaction
              .map(
                ({
                  id,
                  name,
                  status
                }) => {
                  return (
                    <Stack spacing={8} direction="row"> 
                      <tr key={id}>
                        <td>
                          {id}
                        </td>
                        <td>
                          ${name}
                        </td>                   
                        <td>
                          {status}
                        </td>                                    
                      </tr>
                    </Stack>
                  );
                }
                )
                .reverse()} */}
          </tbody>
        </table>
      </Box>
    </div>
  );
};

export default Table