function getNameObj(firstName, lastName) {
    // faccio ritornare un oggetto per poi destrutturarlo dopo
    return nameObj = {
        firstName,
        lastName
    }
}

// default export
module.exports = getNameObj;