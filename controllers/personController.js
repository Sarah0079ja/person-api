const persons = require("../controllers/profile");

persons.forEach((obj, i) => {
    let Person = object.values(obj);


    module.exports.readAllPersons = (req, res) => {
        res.status(200).send(persons);
    }

    module.exports.createPerson = (req, res) => {
        const person = req.body;
        if (person.name && person.password && person.profession) {
            let createDate = Date.now().toString();
            persons.push({
                ...person,
                name: user.name,
                password: person.password,
                profession: person.profession,
                id: `${persons.length}`,
                createdAt: createDate,
                updatedAt: createDate
            })
            res.status(200).json({ message: "person details created successfully" })
        } else {
            res.status(401).json({ message: "person not availabe" })
        }

    }

    module.exports.readOnePerson = (req, res) => {
        let person = persons.find((eachPerson) => eachPerson.id == req.params.id)
        if (person) {
            return res.status(200).send(person)
        } else res.staus(404).json({ message: "person not availabe" })

        module.exports.updatePerson = (req, res) => {
            let person = persons.find((eachPerson) => eachPerson.id == req.params.id)
            if (person) {
                person.id = req.body.id;
                return res.status(200).send({ message: "person details created successfully", data: Person })
            }
            res.status(404).json({ message: "person update not successful" })
        }

        module.exports.deletePerson = (req, res) => {
            let person = persons.find((eachPerson) => eachPerson.id == req.params.id)
            if (person) {
                persons.splice(persons.indexOf(person), 1)
                return res.status(200).send({ message: "Person deleted successfully" })
            }
            res.status(404).json({ message: "Person delete not successful" })
        }



    }

})



