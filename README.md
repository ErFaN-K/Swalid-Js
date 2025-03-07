<p align="center">
    <img src="./examples/image/Iran🦁.png" align="center" width="100">
</p>

# **Swalid - A Lightweight JavaScript Validation Library**

## **🔠 What is Swalid?**

**Swalid** is a simple, lightweight, and customizable JavaScript library for validating user inputs with ease. Whether you need to validate length, check if an input contains only numbers, letters, or even validate complex conditions like passwords, Swalid has got you covered. It leverages SweetAlert2 to show nice validation popups that make the user experience much better.

---

## **🚀 Installation**

To install Swalid in your project, you can use either **npm** or a **CDN**.

### **Using npm:**

```bash
npm install swalidjs
```

### **Using CDN:**

If you don't want to use npm, you can directly include Swalid in your HTML using the CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/swalidjs@latest/dist/bundle.js"></script>
```

---

## **🛠️ Usage**

You can easily integrate Swalid into your project by following these simple steps.

### **Option 1: Using Swalid in JavaScript Projects**

```js
// Import Swalid
import Swalid from "swalidjs";

// Initialize Swalid on an input element with custom configurations
const validator = new Swalid("#inputID", {
    required: true,
    minLength: 5,
    maxLength: 15,
    emailValidation: true,
    checkPasswordSecurity: true,
    swalTextRequired: "This field is required!",
    swalTextEmailValidation: "Please enter a valid email!",
    // other configurations...
});

```

### **Option 2: Using Swalid with CDN in the Browser**

```html
<!-- Using Swalid from CDN -->
<script src="https://cdn.jsdelivr.net/npm/swalidjs@latest/dist/bundle.js"></script>
<script>
   const validator = new Swalid("#inputID", {
       required: true,
       minLength: 5,
       maxLength: 10,
       emailValidation: true,
       // other configurations...
   });

</script>
```

---

### ⚙️ **Settings and Features**

Here’s a list of configurations you can pass to the `Swalid` class:

| Option                           | Data Type     | Default Value                                    | Description                                     |
| -------------------------------- | ------------- | ------------------------------------------------ | ----------------------------------------------- |
| `formElement`                    | `HTMLElement` | `closest form`                                   | The form element to disabled submit  (REQUIRED) |
| `required`                       | `boolean`     | `false`                                          | If the input is required                        |
| `minLength`                      | `number`      | `null`                                           | Minimum length of input                         |
| `maxLength`                      | `number`      | `null`                                           | Maximum length of input                         |
| `emailValidation`                | `boolean`     | `false`                                          | If email validation is required                 |
| `checkPasswordSecurity`          | `boolean`     | `false`                                          | If password security check is enabled           |
| `checkPasswordRegEx`             | `RegExp`      | /  /                                             | Regular expression for password validation      |
| `eventName`                      | `string`      | `blur`                                           | Custom Event For Input (e.g., "blur")           |
| `customRegEx`                    | `RegExp`      | `//`                                             | Custom regular expression for validation        |
| `onValidationError`              | `function`    | `() => {}`                                       | Callback on validation error                    |
| `onValidationSuccess`            | `function`    | `() => {}`                                       | Callback on validation success                  |
| `swalPosition`                   | `string`      | `bottom-end`                                     | Position of SweetAlert popup                    |
| `swalTimer`                      | `number`      | `2000`                                           | Timer for SweetAlert popup                      |
| `swalTheme`                      | `string`      | `""`                                             | Theme for SweetAlert popup                      |
| `swalTitleRequired`              | `string`      | `"Warning"`                                      | Title for required field validation             |
| `swalTextRequired`               | `string`      | `"This field is required"`                       | Text for required field validation              |
| `swalIconRequired`               | `string`      | `"warning"`                                      | Icon for required field validation              |
| `swalTitleMinLength`             | `string`      | `"Warning"`                                      | Title for minimum length validation             |
| `swalTextMinLength`              | `string`      | `"Field must be at least X characters long"`     | Text for minimum length validation              |
| `swalIconMinLength`              | `string`      | `"warning"`                                      | Icon for minimum length validation              |
| `swalTitleMaxLength`             | `string`      | `"Warning"`                                      | Title for maximum length validation             |
| `swalTextMaxLength`              | `string`      | `"Field must be no more than X characters long"` | Text for maximum length validation              |
| `swalIconMaxLength`              | `string`      | `"warning"`                                      | Icon for maximum length validation              |
| `swalTitleEmailValidation`       | `string`      | `"Warning"`                                      | Title for email validation                      |
| `swalTextEmailValidation`        | `string`      | `"Invalid email format"`                         | Text for email validation                       |
| `swalIconEmailValidation`        | `string`      | `"warning"`                                      | Icon for email validation                       |
| `swalTitleCustomValidation`      | `string`      | `"Warning"`                                      | Title for custom validation                     |
| `swalTextCustomValidation`       | `string`      | `"Invalid input"`                                | Text for custom validation                      |
| `swalIconCustomValidation`       | `string`      | `"warning"`                                      | Icon for custom validation                      |
| `swalTitleCheckPasswordSecurity` | `string`      | `"Warning"`                                      | Title for password security check               |
| `swalTextCheckPasswordSecurity`  | `string`      | `"Your password is not secure"`                  | Text for password security check                |
| `swalIconCheckPasswordSecurity`  | `string`      | `"warning"`                                      | Icon for password security check                |

---
#### 📝 **Examples**

**Example 1:** Checking input length

```js
import Swalid from "swalidjs";

const validator = new Swalid("#inputID", {
    minLength: 5,
    maxLength: 10,
});

```

**Example 2:** Check Password Security

```js
import Swalid from "swalidjs";

const validator = new Swalid("#inputID", {
    checkPasswordSecurity: true
});

```

**Example 3:** Use Many Inputs

```js
import Swalid from "swalidjs";

const validator = new Swalid([
    {
        inputID: "#",
        config: {
            ...
        }
    },
    {
        inputID: "#",
        config: {
            ...
        }
    }
    ...
]);

```

---

## **📄 More Documentation**

For detailed documentation, including advanced usage, visit the `docs/` folder in this repository.

---

## **💡 Features**

- **Minimal and Easy to Use**: Simple API with clear and effective configuration options.
- **SweetAlert2 Integration**: Beautiful popups to inform the user about validation results.
- **Flexible and Customizable**: Works well with custom patterns, password security checks, and other validation rules.
- **Lightweight**: Designed to be small and fast, perfect for both small and large projects.

---

## **🎉 Contribute**

We welcome contributions! If you have any ideas, suggestions, or fixes, feel free to fork the repo and submit a pull request.

---

## **📞 Contact**

If you have any questions or feedback, feel free to reach out:

- **Email**: erfangamer138787@gmail.com
- **GitHub**: [github.com/ErFaN-K](https://github.com/ErFaN-K)

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

**Enjoy using Swalid! Happy coding!** 😎🚀

---