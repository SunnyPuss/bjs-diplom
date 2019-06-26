class Profile {
    constructor ({username, name: {firstName, lastName}, password}) {
        this.username = username;
        this.name = name ;
        this.password = password;
    }

    addNewUser({username, name: { firstName, lastName }, password}, callback) {
        return ApiConnector.createUser({ username, name: { firstName, lastName }, password }, (err, data) => {
            console.log(`Creating user ${username}`);
            callback (err, data);
        });
    }

    authorisation({username, password}, callback) {
        return ApiConnector.performLogin({username, password}, (err, data) => {
            console.log(`Authorising user ${username}`)
            callback (err, data);
        });
    }

    addMoney({ currency, amount }, callback) {
        return ApiConnector.addMoney({ currency, amount }, (err, data) => {
            console.log(`Adding ${amount} of ${currency} to ${this.username}`);
            callback(err, data);
        });
    }

    currencyConvertion({ fromCurrency, targetCurrency, targetAmount }, callback) {
        return ApiConnector.convertMoney({ fromCurrency, targetCurrency, targetAmount }, (err,data) => {
            console.log(`Convderting ${fromCurrency} to ${targetAmount} ${targetCurrency}`);
            callback(err, data);
        });
    }

    tokensTransaction({ to, amount }, callback) {
        return ApiConnector.ransferMoney({ to, amount }, (err, data) => {
            console.log(`Transfering ${amount} of Netkoins to ${to}`);
            callback(err, data);
        });
    }
}

const getCurrencyRate = (callback) => {
    return ApiConnector.getStocks((err,data) => {
        callback(err, data)
    })
}

let currentRate = getCurrencyRate;

function main () {
    const vovan = new Profile ({
        username: 'vovan',
        name: { firstName: 'Voldemar', lastName: 'Crush' },
        password: 'purrpurrpurr',
    });
    
    const vasyan = new Profile ({
        username: 'vasyan',
        name: { firstName: 'Basileos', lastName: 'Thunderer' },
        password: 'badumts',
    });

    vovan.addNewUser(

    );

}