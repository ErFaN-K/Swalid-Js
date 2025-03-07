## **🔠 Usage**

Swalid is a lightweight JavaScript library that makes validating user inputs easy and customizable. With just a few lines of code, you can integrate it into your project and start validating user inputs with clear and beautiful popups.

### **Simple Usage Example**

You can easily include Swalid in your project and start validating input fields right away.

```js
import Swalid from "swalid";

// Initialize Swalid on an input element with custom configurations
const validator = new Swalid("#inputID", {
    required: true,
    minLength: 5,
    maxLength: 15,
    emailValidation: true,
    checkPasswordSecurity: true,
    swalTextRequired: "This field is required!",
    swalTextEmailValidation: "Please enter a valid email!",
    swalTextMinLength: "The input must be at least 5 characters long!",
});


```

### **Usage with CDN**

If you prefer not to use npm, you can directly include Swalid via CDN in your HTML:

```html
<script src="https://unpkg.com/swalid"></script>
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
