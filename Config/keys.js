module.exports ={
    mongoURI:'mongodb+srv://admin:admin@cluster0-gmpwv.mongodb.net/test?retryWrites=true&w=majority',
    jwt: 'dev-jwt'
}
/*if(process.env.NODE_ENV === 'production'){
    module.exports = require('./keys.prod')
} else {
    module.exports = require('./keys.dev')
}*/
// module.exports ={
//     mongoURI:'mongodb+srv://ReWhite:senefera@fullstack-qfzip.mongodb.net/test?retryWrites=true&w=majority',
//     jwt: 'dev-jwt'
// }