
import Swal  from 'sweetalert2'

/* 
Esta función se llama Notify y acepta cuatro parámetros:


tipo: info, warning, error, o success.
mensaje: el mensaje que deseas mostrar al usuario.
tiempo: el tiempo que deseas que el mensaje se muestre antes de desaparecer, en milisegundos.
posicion:  top, top-start, top-end, center, center-start, center-end, bottom, bottom-start, o bottom-end.

*/
 export function Notify(type,message,position,time) {
    Swal.fire({
      toast: true, 
        position: position, 
        icon: type,
        title: message,
        showConfirmButton: false,
        timer: time,
        timerProgressBar: true,
    
        background:'#fafafa',  //color de fondo se puede poner otro
      color:'#01579b',     //color del texto
       didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
}






