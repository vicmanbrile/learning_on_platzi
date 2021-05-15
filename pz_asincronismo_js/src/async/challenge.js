const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        let results = {
            "Cantidad de personajes" : data.info.count,
            "Personaje" : character.name,
            "Dimencion" : origin.dimension
        }

        console.log(results)

    }catch(error){
        console.log(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')