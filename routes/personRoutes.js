//with express Api
module.exports = (app) => {
    const personResource = require("../controllers/personController");

    app.route("/persons")
        .get(personResource.readALLPersons)
        .post(personResource.createPerson);

    app.route("/person/:id")
        .get(personResource.readOnePerson)
        .put(personResource.updatePerson)
        .delete(personResource.deletePerson)
}











