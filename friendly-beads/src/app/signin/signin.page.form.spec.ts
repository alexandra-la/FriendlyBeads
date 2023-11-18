import { FormBuilder, FormGroup } from "@angular/forms";
import { SigninPageForm } from "./signin.page.form";

describe('SigninPageForm', () => {

   let signinPageForm: SigninPageForm;
   let form: FormGroup

    beforeEach(() => {
       signinPageForm = new SigninPageForm(new FormBuilder());
       form = signinPageForm.createForm();
    })

    it('should create login form empty', () => {

        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual("");
        expect(form.get('email').valid).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual("");
        expect(form.get('password').valid).toBeFalsy();
    })

    it('should have email invalid if email is not valid', () => {
        form.get('email').setValue('invalid email');

        expect(form.get('email').valid).toBeFalsy();
    })

    it('should have email valid if email is valid', () => {
        form.get('email')?.setValue('valid@email.com');

        expect(form.get('email').valid).toBeTruthy();
    })

    it('should have a valid form', () => {
      form.get('email')?.setValue('valid@example.com');
      form.get('password').setValue("anyPAssword");

      expect(form.valid).toBeTruthy();
    })
})
