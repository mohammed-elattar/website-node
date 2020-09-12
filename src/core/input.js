import Is from "@flk/supportive-is";

export default class Input {

    name = null;
    value = null;
    errorMessage = null;
    rules = {};

    constructor() {
    }

    setName(name) {
        this.name = name;

        return this;
    }

    setValue(value) {
        this.value = value;

        return this;
    }

    required(errorMessage = 'This field is required') {
        this.rules.required = {
            errorMessage: errorMessage,
            execute: function (value) {
                return ! Is.empty(value);
            }
        }
        return this;
    }

    email(errorMessage = 'email is not correct') {
        this.rules.email = {
            errorMessage: errorMessage,
            execute: function (value) {
                return Is.email(value);
            }
        }

        return this;
    }

    length(length, errorMessage) {
        return this;
    }

    minLength(length, errorMessage) {
        return this;
    }

    maxLength(length, errorMessage) {
        return this;
    }

    min(number, errorMessage) {
        return this;
    }

    max(number, errorMessage) {
        return this;
    }

    equal(value, errorMessage) {
        return this;
    }

    match(input, errorMessage) {
        return this;
    }

    validate()
    {
        for(let rule in this.rules) {
            let ruleData = this.rules[rule];
            let {errorMessage, execute} = ruleData;
            if(execute(this.value) === false) {
                this.errorMessage = errorMessage;
                break;
            }
        }
    }
}
