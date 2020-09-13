import path from 'path';
import validator from "core/validator";

export function showHome(request, response) {
    return response.sendFile(path.resolve(__dirname + '/../views/form.html'));
}

export function submitPage(request, response) {
    let validator = validate();
    if (!validator.isValid) {
        return response.send({errors: validator.errors});
    }

    return response.send('Success');
    // if (!request().files || Object.keys(request().files).length === 0) {
    //     return response().status(400).send('No files were uploaded.');
    // }
    //
    // let sampleFile = request().files.image;
    //
    // sampleFile.mv(path.resolve(__dirname + '/../test.pdf'), function(err) {
    //     if (err)
    //         return response().status(500).send(err);
    //
    //     response().send('File uploaded!');
    // });
}

/**
 * @returns {Validator}
 */
function validate() {
    return validator.make({
        name: validator.input().required('Name Field is required'),
        email: validator.input().required().email(),
        password: validator.input().required().minLength(10),
        confirmPassword: validator.input().required().match('password'),
    })
}
