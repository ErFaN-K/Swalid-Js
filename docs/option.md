## **⚙️ Options**

Swalid comes with several options that allow you to customize the validation process for each input field. Below is a list of configurable options.

| Option                           | Data Type     | Default Value                                    | Description                                |
| -------------------------------- | ------------- | ------------------------------------------------ | ------------------------------------------ |
| `formElement`                    | `HTMLElement` | `closest form`                                   | The form element to disabled submit        |
| `required`                       | `boolean`     | `false`                                          | If the input is required                   |
| `minLength`                      | `number`      | `null`                                           | Minimum length of input                    |
| `maxLength`                      | `number`      | `null`                                           | Maximum length of input                    |
| `emailValidation`                | `boolean`     | `false`                                          | If email validation is required            |
| `checkPasswordSecurity`          | `boolean`     | `false`                                          | If password security check is enabled      |
| `checkPasswordRegEx`             | `RegExp`      | /  /                                             | Regular expression for password validation |
| `eventName`                      | `string`      | `blur`                                           | Custom Event For Input (e.g., "blur")      |
| `customRegEx`                    | `RegExp`      | `//`                                             | Custom regular expression for validation   |
| `onValidationError`              | `function`    | `() => {}`                                       | Callback on validation error               |
| `onValidationSuccess`            | `function`    | `() => {}`                                       | Callback on validation success             |
| `swalPosition`                   | `string`      | `bottom-end`                                     | Position of SweetAlert popup               |
| `swalTimer`                      | `number`      | `2000`                                           | Timer for SweetAlert popup                 |
| `swalTheme`                      | `string`      | `""`                                             | Theme for SweetAlert popup                 |
| `swalTitleRequired`              | `string`      | `"Warning"`                                      | Title for required field validation        |
| `swalTextRequired`               | `string`      | `"This field is required"`                       | Text for required field validation         |
| `swalIconRequired`               | `string`      | `"warning"`                                      | Icon for required field validation         |
| `swalTitleMinLength`             | `string`      | `"Warning"`                                      | Title for minimum length validation        |
| `swalTextMinLength`              | `string`      | `"Field must be at least X characters long"`     | Text for minimum length validation         |
| `swalIconMinLength`              | `string`      | `"warning"`                                      | Icon for minimum length validation         |
| `swalTitleMaxLength`             | `string`      | `"Warning"`                                      | Title for maximum length validation        |
| `swalTextMaxLength`              | `string`      | `"Field must be no more than X characters long"` | Text for maximum length validation         |
| `swalIconMaxLength`              | `string`      | `"warning"`                                      | Icon for maximum length validation         |
| `swalTitleEmailValidation`       | `string`      | `"Warning"`                                      | Title for email validation                 |
| `swalTextEmailValidation`        | `string`      | `"Invalid email format"`                         | Text for email validation                  |
| `swalIconEmailValidation`        | `string`      | `"warning"`                                      | Icon for email validation                  |
| `swalTitleCustomValidation`      | `string`      | `"Warning"`                                      | Title for custom validation                |
| `swalTextCustomValidation`       | `string`      | `"Invalid input"`                                | Text for custom validation                 |
| `swalIconCustomValidation`       | `string`      | `"warning"`                                      | Icon for custom validation                 |
| `swalTitleCheckPasswordSecurity` | `string`      | `"Warning"`                                      | Title for password security check          |
| `swalTextCheckPasswordSecurity`  | `string`      | `"Your password is not secure"`                  | Text for password security check           |
| `swalIconCheckPasswordSecurity`  | `string`      | `"warning"`                                      | Icon for password security check           |