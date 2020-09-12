import path from 'path';
import {response, request} from "core/application";

export default class HomeController {
    homePage()
    {
        return response().sendFile(path.resolve(__dirname + '/../views/form.html'));
    }

    submitPage()
    {
        if (!request().files || Object.keys(request().files).length === 0) {
            return response().status(400).send('No files were uploaded.');
        }

        let sampleFile = request().files.image;

        sampleFile.mv(path.resolve(__dirname + '/../test.pdf'), function(err) {
            if (err)
                return response().status(500).send(err);

            response().send('File uploaded!');
        });
    }
}
