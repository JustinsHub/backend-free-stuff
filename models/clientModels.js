const database = require('../database')

class Clients {
    static async getAllClients(){
        const allClients = await database.query('SELECT * FROM potential_clients')
        return allClients
    }

    static async getClientId(id){
        const clientById = await database.query('SELECT id, full_name, phone_number, email, comments FROM potential_clients WHERE id =$1', [id])
        return clientById.rows[0]
    }
}

class Email {
    static async getAllEmailAddresses(){
        const allEmail = await database.query('SELECT * FROM email_address')
        return allEmail
    }
}

module.exports = {
    Clients,
    Email
}