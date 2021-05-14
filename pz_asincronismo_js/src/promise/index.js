const somethigWillHappen = () => {
    return new Promise((resolve, reject) => {
        true ? resolve('Hey!') : reject('Whooops')
    })
}

somethigWillHappen()
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))


const somethigWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => resolve('True'), 2000) 
        } else { 
            let error = new Error('Whooops')
            reject(error)
        }
    })
}

somethigWillHappen2()
    .then(resp => console.log(resp))
    .catch(err => console.error(err))


Promise.all([somethigWillHappen(), somethigWillHappen2()])
    .then(Response => {
        console.log(Response)
    })
    .catch(err => {
        console.error(err)
    })