import { Component,NgModule, OnInit  } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators   } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from 'src/app/service/email.service';
import { Email } from 'src/app/models/emailModels';
import Swal from 'sweetalert2'




@Component({
  selector: 'app-inicio' ,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})



export class InicioComponent implements OnInit {
  myForm: FormGroup;
  email:Email = new Email();

  constructor(private emailService:EmailService, private fb: FormBuilder){
    this.myForm = this.fb.group({
      nombre: ['', Validators.required], // Campo 'nombre' requerido
      telefono: ['', Validators.pattern('^[0-9]*$')] // Campo 'telefono' con patrón numérico
    });
  }

  ngOnInit(){
    
  }
  fnIsNumber(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode >= 48 && charCode <= 57) {
      return true; // Permitir números
    }
    return false; // Bloquear caracteres especiales
  }

  fnAddEmail(email:Email):void{
    // alert("entro")
     this.emailService.sendEmail(email).subscribe(
       res=>{
       if(res){
         Swal.fire({
           title: "Enviado",
           text: "Información enviada y guardada correctamente!",
           icon: "success"
         });
         console.log(res);
         this.fnClear();
        
       }
       else{
        Swal.fire({
          title: "Error",
          text: "Revisar datos que sean el formato correcto",
          icon: "error"
        });
       }
     });
   }

   fnClear(){
    this.email.strNombreCompleto = '';
    this.email.strEmail = '';
    this.email.strTelefono = '';
    this.email.strComentario = '';
   }
  

}
