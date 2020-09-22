import db from './db';

export default class Model {
    db = db;

    get = this.findAll;

    findAll(filter = {}, otherOptions = {}) {
        return this.db.findAll(this.collection, filter, otherOptions);
    }

    first(filter = {}, otherOptions = {}) {
        return this.db.first(this.collection, filter, otherOptions);
    }

    insert(docs) {
        return this.db.insert(this.collection, docs);
    }

    update(filter = {}, data = {}) {
        return this.db.update(this.collection, filter, data);
    }


    delete(filter = {}) {
        return this.db.delete(this.collection, filter);
    }
}