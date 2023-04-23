import mongoose from 'mongoose'

async function startConection (){

   const user = process.env.MONGO_USER
   const passaword = process.env.MONGO_PASSAWORD
   await mongoose.connect(`mongodb+srv://${user}:${passaword}@cluster0.bixeo6j.mongodb.net/?retryWrites=true&w=majority`)
   console.log('Mongo Connected')
}

async function  stopConection() {
    await mongoose.disconnect()
    console.log('Mongo disconneted')

}
export { startConection, stopConection }
