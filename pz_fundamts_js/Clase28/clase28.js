const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const likeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain : true };

$.get(likeUrl,opts, function (loke) {
 console.log(`Yo soy${loke.name}`)
})