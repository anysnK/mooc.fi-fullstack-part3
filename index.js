const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())

//setting up logging via morgan
morgan.token('body', (req, res) => {return JSON.stringify(req.body)})
app.use(morgan(':method :url :status :response-time ms :body'))

//setting up data
let phonebook = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
    {
        "name": "asdf",
        "number": "56789",
        "id": 5
    },
    {
        "name": "jklö",
        "number": "1234",
        "id": 6
    },
    {
        "name": "jost",
        "number": "56789",
        "id": 7
    },
    {
        "name": "hjkafl",
        "number": "1234",
        "id": 8
    }
]


app.get('/api/phonebook', (req, res) => {
    res.json(phonebook)
})

app.get('/api/phonebook/:id', (req, res) => {
    const id = Number(req.params.id)
    const entry = phonebook.find(entry => entry.id === id)
    console.log(entry)
    if (entry) {
        res.json(entry)
    } else {
        res.status(404).end()
    }

})

app.get('/info', (req, res) => {
    const date = new Date()
    const info = `<p>Phonebook has info for ${phonebook.length} people </p>
                     <p>${date.toString()}</p>`
    res.send(info)
})

app.delete('/api/phonebook/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    const entry = phonebook.find(entry => entry.id === id)
    console.log(entry)
    if (entry) {
        phonebook = phonebook.filter(note => note.id !== id)
        res.status(204).end()
    } else {
        res.status(404).end()
    }
})

app.post('/api/phonebook/', (req, res) => {
    const body = req.body

    if (!isValid(body)) {
        return res.status(400).json({
            error: 'invalid data format'
        })
    }

    if (isDupe(body.name)) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }



    const newEntry = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    console.log(newEntry)
    phonebook = phonebook.concat(newEntry)
    res.json(newEntry)
})

app.patch('/api/phonebook/:id', (req, res) => {

})

//helper functions-------------------------------------

//generate an unused id for new Entries
const generateId = () => {
    const maxId = phonebook.length > 0 ?
        Math.max(...phonebook.map(n => n.id))
        : 0
    return maxId + 1
}

//check for preventing duplicate entries in phonebook
const isDupe = (name) => {
    if (phonebook.filter(entry => name === entry.name).length > 0) {
        console.log('name identical')
        return true
    }

    /* if(phonebook.filter(entry => {
        return(entry.name === name && entry.number === number)
    }).length > 0) {
        return true
    } */
    return false
}

//check that the data passed to post is of the right format
const isValid = (body) => {
    if (Object.keys(body).length > 2) {
        return false
    }

    if (!Object.keys(body).includes('name')) {
        return false
    }

    if (!Object.keys(body).includes('number')) {
        return false
    }

    return true
}


const PORT = 3001


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})