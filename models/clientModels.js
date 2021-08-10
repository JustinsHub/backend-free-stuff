const database = require('../database')
const {ErrorNotAuthorized, ErrorNotFound, ErrorBadRequest} = require('../errorHandle')

class Clients {
    static async getAllClients(){
        const allClients = await database.query(`SELECT id, full_name, phone_number, email, comments
                                                FROM potential_clients`)
        const ourClients = allClients.rows
        if(ourClients){
            return ourClients
        }
        throw new ErrorNotAuthorized()
    }

    static async getClientId(id){
        const clientById = await database.query(`SELECT id, full_name, phone_number, email, comments 
                                                FROM potential_clients WHERE id =$1`, [id]) 
        const singleClient = clientById.rows[0]
        if(singleClient){
            return singleClient
        }
        throw new ErrorNotFound('Client not found.')
    }

    static async createNewClient(full_name, phone_number, email, comments){
        const createClient = await database.query(`INSERT INTO potential_clients 
                                                    (full_name, phone_number, email, comments) VALUES ($1,$2,$3,$4) 
                                                    RETURNING full_name, phone_number, email, comments`, [full_name, phone_number, email, comments])
        const newClient = createClient.rows[0]
        if(newClient){
            return newClient
        }
        throw new ErrorBadRequest()
    }
}

class Email {
    static async getAllEmailAddresses(){
        const allEmail = await database.query(`SELECT id, email FROM email_address`)
        const allClientEmails = allEmail.rows
        if(allClientEmails){
            return allClientEmails
        }
        throw new ErrorNotAuthorized()
    }

    static async getEmailById(id){
        const singleEmail = await database.query(`SELECT id, email FROM email_address WHERE id=$1`, [id])
        const clientEmail = singleEmail.rows[0]
        if(clientEmail){
            return clientEmail
        }
        throw new ErrorNotFound('Email was not found')
    }

    static async clientEmailInput(email){ //Error handling should be on a schema if user does not input correct type
        const emailInput = await database.query(`INSERT INTO email_address (email) 
                                                VALUES ($1) RETURNING id, email`, [email])
        return emailInput.rows[0]
    }
}

module.exports = {
    Clients,
    Email
}