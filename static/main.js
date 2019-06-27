class Profile {
    constructor ({username, name: {firstName, lastName}, password}) {
        this.username = username;
        this.name = name ;
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
            console.log(`Creating user ${username}`);
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

    getStocks (callback)
    if (err) {
        return console.log(`Getting stocks failed`);
    } else {
        console.log(`Getting stocks info`)
        const currentRate = data[99];
    }

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
            console.log(`${this.username} is not created.`);
        } else {
            console.log(`${this.username} is created!`);
            vovan.authorisation((err, data) => {
                if (err) {
                    console.log(`${this.username} is not authorised.`);
                } else {
                    console.log(`${this.username} is authorised!`);
                    vovan.addMoney({currency:`EUR`, amount: 500000}, (err, data) => {
                        if (err) {
                            console.log('Error during adding money to Ivan');
                        } else {
                            console.log(`Added ${amount} ${currency} to ${this.username}`);
                            vovan.currencyConvertion({fromCurrency: , targetCurrency: , targetAmount:}

                            )
                        }
                    })
                }
            })
        }
    })
                    
            

}

main()