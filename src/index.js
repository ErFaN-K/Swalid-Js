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