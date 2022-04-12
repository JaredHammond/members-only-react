const TokenStore = require("../models/tokenStore")
const jwt = require('jsonwebtoken')

async function addTokenToStore(token) {
    const store = await TokenStore
                        .findOne({})
                        .exec()
                        .catch(err => console.log(err));
    store.tokens.push(token);
    await store.save()
    pruneExpiredTokens()
}

// Remove expired tokens from the active store
async function pruneExpiredTokens() {
    const store = await TokenStore
                        .findOne({})
                        .exec()
                        .catch(err => console.log(err))
    const goodTokens = store.tokens.reduce((goodTokens, currToken) => {
        jwt.verify(currToken, process.env.JWT_SECRET || 'secret', function(err, decoded) {
            console.log(goodTokens);
            if (err) {
                return goodTokens;
            }
            return goodTokens.push(currToken)
        }) 
        
    }, [])

    console.log(goodTokens, "goodtokens")

    console.log(store.tokens)

    // store.save()
}

module.exports = {
    addTokenToStore,
}