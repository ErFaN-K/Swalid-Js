<p align="center">
    <img src="./examples/image/Iran🦁.png" align="center" width="100">
</p>

## **🚀 Installation**

### **1. Install via npm (Recommended)**

The easiest way to get started with Swalid is by installing it via npm. This allows you to manage it like any other package in your JavaScript project.

1. **Open your terminal** and navigate to your project directory.
2. Run the following command to install Swalid:

   ```bash
   npm install swalid
   ```

3. After installation, you can import Swalid into your JavaScript code:

   ```js
   import Swalid from "swalidjs";
   ```

---

### **2. Install via CDN (No npm required)**

If you prefer not to use npm or package managers, you can easily include Swalid directly via a CDN in your HTML file. This is a great option for smaller projects or quick testing.

1. Add the following script tag inside your HTML file, right before the closing `</body>` tag:

   ```html
   <script src="https://cdn.jsdelivr.net/npm/swalidjs@latest/dist/bundle.js"></script>
   ```

2. Once added, you can start using Swalid in your JavaScript code like so:

   ```html
   <script>
       const validator = new Swalid("#inputID", {
           required: true,
           minLength: 5,
           maxLength: 10,
           emailValidation: true,
           checkPasswordSecurity: true,
       });
   </script>
   ```

---

### **3. Install from GitHub (Advanced Users)**

For developers who need the latest version of Swalid directly from the GitHub repository or want to contribute to the code, you can clone the repo and build it manually.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ErFaN-K/Sawlid-Js.git
   cd swalid
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Build the project** (if you plan to make changes or bundle it):

   ```bash
   npm run build
   ```

4. **Use Swalid in your project**:

   After building, you can either import it into your JavaScript or use the generated file in your `dist/` folder for production.

---

### **Troubleshooting Installation**

If you encounter any issues during installation or have questions, feel free to check the [Issues](https://github.com/ErFaN-K/Swalid-Js/issues) section on GitHub, or open a new issue.

---

### **Want to Use the Latest Version?**

Make sure you're using the latest version of Swalid by periodically checking for updates. You can update it via npm using the following command:

```bash
npm update swalid
```