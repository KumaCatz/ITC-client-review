const fs = require('fs');
const crypto = require('crypto');

class DB {
    constructor(name) {
        this.name = name;
        this.path = `database/${name}.json`;
    }

    getData = () => {
        const content = fs.readFileSync(this.path, 'utf-8');
        const json = JSON.parse(content);
        return json;
    }

    saveData = (data) => {
        fs.writeFileSync(this.path, JSON.stringify(data, null, 2));
    }

    add = (body) => {
        const arr = this.getData();
        const newId = crypto.randomUUID();
        arr.push({
            id: newId,
            ...body
        });
        this.saveData(arr);
        return newId;
    }

    getById = (id) => {
        const arr = this.getData();
        return arr.find(u => u.id === id);
    }

    getByEmail = (email) => {
        const arr = this.getData();
        return arr.find(u => u.email === email);
    }

    updateById = (id, body) => {
        const arr = this.getData();
        const itemIndex = arr.findIndex(u => u.id === id);
        arr[itemIndex] = {
            id,
            ...body
        };
        this.saveData(arr);
    }

    deleteById = (id) => {
        const arr = this.getData();
        const itemIndex = arr.findIndex(u => u.id === id);
        arr.splice(itemIndex, 1);
        this.saveData(arr);
    }
}

module.exports = DB;