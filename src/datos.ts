let contador: number = 3;
for (let i = 0; contador > 0; contador--) {
  let contraseña: string = prompt("Ingrese su contraseña"; "contraseña")
 if (contraseña==="contraseña"){
   alert("eureka")
   contador=-3;
}
else
{
  alert("contraseña incorrecta quedan: " + (contador -1) + " intentos")
}
if(contador==0)
{
  alert("acceso denegado")
}
}
