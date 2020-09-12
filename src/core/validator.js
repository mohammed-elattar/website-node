import { request as requestHandler} from "./application";
import Input from "./input";
import Is from "@flk/supportive-is";
class Validator {

    rulesList = {};
    errors = {};
    isValid = true;
    /**
     * @returns {Input}
     */
    input(name)
    {
        return new Input(name);
    }

    rules(rules)
    {
        this.rulesList = rules;

        return this;
    }

    validate()
    {
        let request = requestHandler();
        for(let name in this.rulesList){
            let input = this.rulesList[name];
            input.setName(name).setValue(request.body[name]);

            input.validate();

            if(input.errorMessage) {
                this.errors[name] = input.errorMessage;
            }

            if(!Is.empty(this.errors)) {
                this.isValid = false;
            }
        }
        return this;
    }

    make(rules)
    {
        return this.rules(rules).validate();
    }
}

let validator = new Validator();
export default validator;
