var util = require("util");
var fs = require("fs");

var uuidv1 = require("uuid/v1");
var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);

class Store {

    readFile() {
        return readFileAsync("db/db.json", "utf8");
    }

    writeFile(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }

    readNotes() {
        return this.readNote().then((notes) => {
            var parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes

        });
    }

    addNote(note) {
        var { title, text } = note;

        if (!title || !text) {
            throw new Error("please put a title and text")
        }

        var newNote = { title, text, id: uuidv1() };

        return this.readNotes()
            .then((notes) => [...notes, newNotw])
            .then((filteredNotes) => this.write(filteredNotes));
    }
    removeNote(id) {
        return this.readNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));

    }
}
module.exports = new Store();

