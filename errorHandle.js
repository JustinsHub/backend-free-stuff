class ExpressError extends Error {
    constructor(message, status) {
        super()
        this.message = message
        this.status= status
        console.error(this.stack)
    }
}

//401 ERROR NOT AUTHORIZED
class ErrorNotAuthorized extends ExpressError {
    constructor(message = "Not Authorized"){
        super(message, 401)
    }
}

//400 ERROR BAD REQUEST
class ErrorBadRequest extends ExpressError {
    constructor(message = "Bad Request"){
        super(message, 400)
    }
}

//404 ERROR PAGE NOT FOUND
class ErrorNotFound extends ExpressError {
    constructor(message = "Not Found"){
        super(message, 404)
    }
}

module.exports = {
    ExpressError,
    ErrorNotAuthorized,
    ErrorNotFound,
    ErrorBadRequest
}