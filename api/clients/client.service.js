class ClientService {
    static clients = [
        {
            email: 'guest@app.com',
            password: 'guest',
            role: 'guest'
        },
        {
            email: 'admin@app.com',
            password: 'admin',
            role: 'admin'
        }
    ];

    static findOne(login) {
        return ClientService.clients.find(({ email }) => email == login);
    }
}

module.exports = ClientService;