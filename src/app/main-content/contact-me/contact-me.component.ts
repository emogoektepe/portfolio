import { Component, ViewEncapsulation, inject } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  post = {
    endPoint: 'https://emre-goektepe.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    option: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(this.emailPattern),
  ]);
  nameFormControl = new FormControl('', [Validators.required]);
  messageFormControl = new FormControl('', [Validators.required]);
  checkBoxFormControl = new FormControl('', [Validators.required]);

  http = inject(HttpClient);

  constructor(private _snackBar: MatSnackBar) {}

  sendMessage() {
    const contactData = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      message: this.messageFormControl.value,
    };

    this.http.post(this.post.endPoint, this.post.body(contactData)).subscribe({
      next: (response) => {
        this._snackBar.open('Message send successfully!', '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: ['snackbarCenter'],
          duration: 2000,
        });
        this.nameFormControl.reset();
        this.emailFormControl.reset();
        this.messageFormControl.reset();
      },
    });
  }
}
