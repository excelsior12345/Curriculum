
function validar1() {

   const primero:any=document.getElementById("primero");
   const segundo:any=document.getElementById("segundo");
   const lcv:any=document.getElementById("lcv");

     let nusuario:any=document.getElementById("usuario");
     let pass:any=document.getElementById("pass");
     let comprobacion:any=document.getElementById("comprobacion");
     let cusuario:any=document.getElementById("cusuario");
     let cpass:any=document.getElementById("cpass");
    

     if (nusuario.value != "josue") {

        cusuario.innerHTML = "El nombre de usuario es incorrecto";  
        cusuario.style.color='red'; 
     }

     if (nusuario.value == "") {

        cusuario.innerHTML= "Introduce usuario";  
        cusuario.style.color='red'; 
     }

     if (pass.value != "1234") {
        cpass.innerHTML= "La contraseña es incorrecta"; 
        cpass.style.color='red'; 
     }

     if (pass.value == "") {

        cpass.innerHTML= "Introduce contraseña";   
        cpass.style.color='red'; 
     }

     if (nusuario.value== "josue" && pass.value== "1234") {
        primero.style.visibility='hidden';
        primero.style.display='none';
        segundo.style.visibility='visible';
        segundo.style.display='block';

     }

   }
     function crear(){

      const segundo:any=document.getElementById("segundo");
      const tercero:any=document.getElementById("tercero");
      const lcv:any=document.getElementById("lcv");
     

      let nombre:any=document.getElementById("nombre");
      let img1:any=document.getElementById("img1");
      let apellido:any=document.getElementById("apellido");
      let edad:any=document.getElementById("edad");
      let tel:any=document.getElementById("tel");
      let experiencia:any=document.getElementById("experiencia");
      let sobre:any=document.getElementById("sobre");
      let img:any=document.getElementById("img");
      let rnombre:any=document.getElementById("rnombre");
      let inc:any=document.getElementById("inc");
      let redad:any=document.getElementById("redad");
      let rtelefono:any=document.getElementById("rtelefono");
      let rexperiencia:any=document.getElementById("rexperiencia");
      let rsobremi:any=document.getElementById("rsobremi");
      let rellena:any=document.getElementById("rellena");
      
      if (nombre.value == "" ){

         rellena.innerHTML ="Rellena todos los campos correctamente";
         rellena.style.color='red';
      }
      if (edad.value == "" ){

         rellena.innerHTML ="Rellena todos los campos correctamente";
         rellena.style.color='red';
      }
      if (apellido.value == "" ){

         rellena.innerHTML ="Rellena todos los campos correctamente";
         rellena.style.color='red';
      }
      if (sobre.value == "" ){

         rellena.innerHTML ="Rellena todos los campos correctamente";
         rellena.style.color='red';
      }
      if (experiencia.value == "" ){

         rellena.innerHTML ="Rellena todos los campos correctamente";
         rellena.style.color='red';
      }

     else if (nombre.value != "" && apellido.value != "" && edad.value != "" && tel != "" && sobre != "" && experiencia.value != "" ) {

         segundo.style.visibility='hidden';
         segundo.style.display='none';
         lcv.style.visibility='hidden';  
         tercero.style.visibility='visible';
         tercero.style.display='block';
         inc.style.display='none';
         img1.src=img.value;
         rnombre.innerHTML=`${nombre.value} ${apellido.value}`;
         redad.innerHTML= "Edad "+edad.value ;
         rtelefono.innerHTML="Telefono "+ tel.value;
         rexperiencia.innerHTML=experiencia.value;
         rsobremi.innerHTML=sobre.value;
         
       
      
   }

   

  


}
