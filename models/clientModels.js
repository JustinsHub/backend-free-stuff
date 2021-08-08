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

module.exports = Clients