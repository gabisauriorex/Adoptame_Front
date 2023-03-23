import  React,{useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import{ Drawer} from '@mui/material';
 import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import {GroupAdd,Lock,Favorite,Home,Pets,Diversity1} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import {ListItemButton,ListItemIcon,ListItemText,Divider,IconButton,Button} from '@mui/material';
import patita from '../../Images/patita.ico'
//=======================
import SearchBar from '../SearchBar/SearchBar';
import Account from '../Account/Account';
import {Link} from "react-router-dom";
import './NavBar.css'
 


const drawerWidth = 200;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NavBar() {
  const theme = useTheme(); 
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false)
    }, 4000);
   
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


const arrayNav=[
{
  name:  'Adopta',
   path: '/Adopta',
   icon: <Diversity1/>
}
  ,
{
  name:  'Dona',
   path: '/Dona',
   icon: <Favorite/>
}
  ,
{
  name:  'Registra Mascota',
   path: '/CreatePet',
   icon: <Pets/>
}
  ,
{
  name:  'Sobre Nosotros',
   path: '/About', 
   icon: <Home/>
}

]

const arrayNav2=[

{ name:'Registro',
  path:'/Register',
  icon:  <GroupAdd/>
}
,
{ name:'login',
  path:'/Login',
  icon:  <Lock/>
}
]



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    <AppBar position="fixed" sx={{backgroundColor:'#fafafa' ,color:"Black" }} open={open} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 1, ...(open && { display: 'none' }) }}
          >
          <MenuIcon sx={{color:'#01579b'}} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
          /*   component="div" */
            sx={{ display: { xs: 'none', sm: 'block' ,textDecoration:"none" , color:"black" } }}
            className={theme.typography}
            component={Link}
            to="/Home"
          >
            Adoptame  
         
          <img src={patita} width="30px" height="30px" className='margenIzquierdo' />

          </Typography>

          <Box sx={{flexGrow:1 }}>
           <SearchBar/>   
         </Box>
    
          <Account/>   
        
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#fafafa",
            color:"#01579b"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       <List> 

        {arrayNav.map((item, index) => (
            <ListItem key={item.name}   >
              <ListItemButton  component={Link} to={item.path}>  
                 <ListItemIcon  >
                  {/* {item.name==="Adopta"?<Pets/> : item.name==="Dona"?<Favorite />:<Home/>} */}
                   {item.icon}
                </ListItemIcon> 
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
         <Divider/>
          {arrayNav2.map((item2,index) => (
            <ListItem key={item2.name} disablePadding>
              <ListItemButton component={Link} to={item2.path}>
                <ListItemIcon>
               {item2.icon}
                </ListItemIcon>
                <ListItemText primary={item2.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer> 
    </Box>
  );
}
