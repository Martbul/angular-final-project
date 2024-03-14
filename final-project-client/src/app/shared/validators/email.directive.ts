import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  EmailValidator,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidator,
      multi: true,
    },
  ],
})
export class EmailDirective implements Validator {
  @Input() appEmail: string[] = [];
  constructor() {}

  //   validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log('validate', control.value);

    //  return this.validator(control);
    const validatorFn = this.emailValidator(this.appEmail);
    const result = validatorFn(control);
    console.log({ result });

    return result;
  }

  //   ngOnChanges(changes: SimpleChanges): void {
  //     console.log(changes['appEmail']);

  //     const { currentValue } = changes['appEmail'];

  //     if (currentValue?.length) {
  //       this.validator = this.emailValidator(currentValue);
  //     }
  //   }
  emailValidator(domains: string[]): ValidatorFn {
    //    [A-Za-z0-9]+@gmail\.(com|bg)
    const domainString = domains.join('|');
    const regExp = new RegExp(`[A-Za-z0-9]+@gmail\.(${domainString})`);
    return (control) => {
      const isEmailInValid = control.value === '' || regExp.test(control.value);

      return isEmailInValid ? null : { emailValidator: true };
    };
  }
}
