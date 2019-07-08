class Profile {
    constructor ({username, name: {firstName, lastName}, password}) {
        this.username = username;
        this.name = {
            firstName,
            lastName
        };
        this.password = password;
    }

    addNewUser(callback) {
        return ApiConnector.createUser(
            {
            username: this.username, 
            name: this.name,
            password: this.password 
            },
            (err, data) => {
            console.log(`Creating user ${this.username}`);
            callback (err, data);
        });
    }

    authorisation(callback) {
        return ApiConnector.performLogin(
            {
            username: this.username, 
            password: this.password
            },
            (err, data) => {
            console.log(`Authorising user ${this.username}`)
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
        return ApiConnector.transferMoney({ to, amount }, (err, data) => {
            console.log(`Transfering ${amount} of Netkoins to ${to}`);
            callback(err, data);
        });
    }
}

function getStocks(callback) {
	return ApiConnector.getStocks((err, data) => {
			console.log(`Getting stocks info`);
			callback(err, data[99]);
	});
}

function main () {

let currentRate;

    getStocks ((err, data) => {
        if (err) {
            console.error(`Error during getting stocks`);
            throw err;
        }
        currentRate = data;
    });


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

    vovan.addNewUser((err, data) => {
        if (err) {
            console.log(`${vovan.username} is not created.`);
        } else {
            console.log(`${vovan.username} is created!`);
            vovan.authorisation((err, data) => {
                if (err) {
                    console.log(`${vovan.username} is not authorised.`);
                } else {
                    console.log(`${vovan.username} is authorised!`);
                    vovan.addMoney({currency: 'EUR', amount: 500000}, (err, data) => {
                        if (err) {
                            console.log('Error during adding money to vovan');
                        } else {
                            console.log(`Added 500000 EUR to ${vovan.username}`);

                            const targetAmount = currentRate['EUR_NETCOIN'] * 50000;

                            vovan.currencyConvertion({fromCurrency: "EUR", targetCurrency: "NETCOIN", targetAmount: targetAmount}, (err, data) => {
                                if (err) {
                                    console.log(`Error during money convertation`);
                                } else {
                                    console.log(`Condertet to coins ⏵ {name: {${vovan.name}}, wallet: {${targetAmount}}, username: {${this.username}}}`);
                                    vasyan.addNewUser((err, data) => {
                                        if (err) {
                                            console.log(`${vasyan.username} is not created.`);
                                        } else {
                                            console.log(`${vasyan.username} is created!`);
                                            vovan.tokensTransaction({ to: vasyan.username, amount: targetAmount}, (err, data) => {
                                                if (err) {
                                                    console.log(`Error during transfering money. Where is the money Lebowsky?!`);
                                                } else {
                                                    console.log(`${vasyan.name.firstName} has got ${targetAmount} NETCOINS`);
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

main();
