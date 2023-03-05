const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        //cadena de conexión a la BD
        const url = 'mongodb://jpena:admin@ac-p3xcp6g-shard-00-00.ylzrxbt.mongodb.net:27017,ac-p3xcp6g-shard-00-01.ylzrxbt.mongodb.net:27017,ac-p3xcp6g-shard-00-02.ylzrxbt.mongodb.net:27017/Project0?ssl=true&replicaSet=atlas-l05utm-shard-0&authSource=admin&retryWrites=true&w=majority'
        await mongoose.connect(url); 

        console.log('conexión exitosa a la BD');

    } catch (error) {
        console.log(error);   
}
}
module.exports = {
    getConnection,
}