import Swal from "sweetalert2";

/**
 * @class Swalid
 * @description A class to handle input validation with SweetAlert2 notifications.
 */
class Swalid {
    /**
     * @constructor
     * @param {string|Array} inputName - The selector for the input element(s) to validate.
     * @param {Object} [config={}] - Configuration options for validation behavior.
     * @description Initializes the Swalid class, either for a single input element or multiple elements.
     */
    constructor(inputName, config = {}) {
        if (!inputName) {
            console.error("Input name is not defined");
            return;
        }

        this.isArray = Array.isArray(inputName);

        // If multiple inputs are passed as an array, initialize each
        if (this.isArray) {
            this.inputs = inputName;
            this.inputs.forEach(({ input, config }) => {
                const mergedConfig = { ...this.defaultConfig(), ...config };
                this.initialElement(input, mergedConfig);
            });
        }
        // If a single input selector is passed
        else if (typeof inputName === "string") {
            this.config = { ...this.defaultConfig(), ...config };
            this.initialElement(inputName, this.config);
        } else {
            console.error("Invalid input type");
        }
    }
    /**
   * @private
   * @description Initializes the input element and form for validation.
   * @param {string} inputName - The input selector to validate.
   * @param {Object} config - Configuration object for validation settings.
   * @returns {void}
   * @throws Will log errors if the input or form element is invalid.
   */
    initialElement(inputName, config) {
        const inputElement = document.querySelector(inputName);
        if (!inputElement || inputElement.tagName !== "INPUT") {
            console.error("Invalid input element");
            return;
        }

        const formElement = document.querySelector(config.formElement) || inputElement.closest("form");
        if (!formElement || formElement.tagName !== "FORM") {
            console.warn("Form element not found or invalid");
            return;
        }

        formElement.addEventListener("submit", (e) => e.preventDefault()); // Prevent form submission

        // Add event listener to validate on user input
        inputElement.addEventListener(config.eventName, () => this.validate(inputElement, config));
    }
    /**
         * @description Validates the input field based on the configuration.
         * @param {HTMLElement} inputElement - The input element to validate.
         * @param {Object} config - The validation configuration.
         * @returns {void}
         * @throws Will execute success or error callback based on validation result.
         */
    validate(inputElement, config) {
        let isValid = true;

        // Run validation checks based on the config
        if (config.required && !this.checkRequired(inputElement, config)) isValid = false;
        if (config.minLength && !this.checkMinLength(inputElement, config)) isValid = false;
        if (config.maxLength && !this.checkMaxLength(inputElement, config)) isValid = false;
        if (config.emailValidation && !this.checkEmail(inputElement, config)) isValid = false;
        if (config.checkPasswordSecurity && !this.checkPasswordSecurity(inputElement, config)) isValid = false;
        if (config.customRegEx && !this.checkCustomValidator(inputElement, config)) isValid = false;

        // Call respective callback function depending on validation result
        if (isValid) {
            config.onValidationSuccess(inputElement, configinputElement, config);
        } else {
            config.onValidationError(inputElement, configinputElement, config);
        }
    }
    /**
         * @private
         * @description Shows a SweetAlert2 notification with the given parameters.
         * @param {string} title - The title of the alert.
         * @param {string} text - The text of the alert.
         * @param {string} icon - The icon for the alert (e.g., "error").
         * @param {Object} config - The configuration object for Swal.
         * @returns {void}
         */
    showSwal(title, text, icon, config) {
        Swal.fire({
            title,
            text,
            icon,
            position: config.swalPosition,
            toast: true,
            showConfirmButton: false,
            timer: config.swalTimer,
            theme: config.swalTheme
        });
    }
