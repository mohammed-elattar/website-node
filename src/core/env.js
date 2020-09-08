import { fs } from '@flk/fs';
import Is from "@flk/supportive-is";

let rootDirectory = process.cwd();
let fileContent = fs.get(rootDirectory + '/.env');
let lines = fileContent.split(/\r\n|\r|\n/g);

let data = {};
for(let line of lines) {
    if(!line) {
        continue;
    }
    let [key, value] = line.split('=');

    value = value.replace('/^\s|\s$/g', '');
    key = key.replace('/^\s|\s$/g', '');
    key = key.toUpperCase();
    if(Is.numeric(value)) {
        value = Number (value);
    }

    process.env[key] = value;

    data[key] = value;
}

export default function env(key, defaultValue = null) {
    key = key.toUpperCase();
    return typeof data[key] === "undefined" ? defaultValue : data[key];
}
