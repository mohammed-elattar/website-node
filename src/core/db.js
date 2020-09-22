import connector from "./connector";
import env from "./env";

const databaseName = env('DATABASE_NAME');

class database {
    constructor() {
        this.client = connector.db(databaseName)
    }

    get = this.findAll;

    findAll(collection, filter = {}, otherOptions = {}) {
        return new Promise((resolve, reject) => {
            this.client.collection(collection).find(filter, otherOptions).toArray((error, documents) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(documents);
                }
            });
        });
    }

    first(collection, filter = {}, otherOptions = {}) {
        return this.client.collection(collection).findOne(filter, otherOptions);
    }

    insert(collection, docs) {
        if (!Array.isArray(docs)) {
            docs = [docs];
        }

        return new Promise((resolve, reject) => {
            this.client.collection(collection).insertMany(docs, ((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.result.n);
                }
            }))
        });
    }

    update(collection, filter, data) {
        return new Promise((resolve, reject) => {
            this.client.collection(collection).updateMany(filter, {
                '$set': data
            } , ((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.result.nModified);
                }
            }))
        });
    }

    delete(collection, filter) {
        return new Promise((resolve, reject) => {
            this.client.collection(collection).deleteMany(filter, ((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.result);
                }
            }))
        });
    }


}

export default new database();
