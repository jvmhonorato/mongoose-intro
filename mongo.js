const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongo-orm',{ useNewUrlParser: true, useUnifiedTopology: true })
//model
.then(() =>{
    const PessoaSchema = mongoose.Schema({
        nome: String,
        cargo: String
    })
    //create user 
    const Pessoa = mongoose.model(  'Pessoa', PessoaSchema)
    // const victor = new Pessoa({nome: 'Victor Honorato',cargo: 'Developer'})
    // victor.save(()=> console.log('salvo'))

    //find users
    Pessoa.find({},(err,docs) => {
        console.log(docs)
    })
    Pessoa.remove({
        _id:'6319dd47298910edeba012aa'
    },(err, res) => console.log('ok'))
})