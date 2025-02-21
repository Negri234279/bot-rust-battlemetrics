class ControlledError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = ControlledError
