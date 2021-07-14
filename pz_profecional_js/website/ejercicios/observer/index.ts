interface Observer{
  update: (data: any) => void
}

interface Subject{
  subscribe: (observer: Observer) => void
  unsubcribe: (observer: Observer) => void
}

class BitCoinPrice implements Subject {

  constructor(){
    const el : HTMLInputElement = document.querySelector('#value')
    el.addEventListener('input', () => {
      this.notify(el.value)
    })
  }

  observers : Observer[] = []
  subscribe (observer: Observer) {
    this.observers.push(observer)
  }

  unsubcribe (observer: Observer) {
    const index = this.observers.findIndex(obs => {
      return obs === observer
    })

    this.observers.splice(index, 1)
  }

  notify (data: any){
    this.observers.forEach(observer => observer.update(data))
  }
}

class PriceDesplay implements Observer{
  private el : HTMLElement

  constructor(){
    this.el = document.querySelector('#price')
  }

  update(data: any) {
    this.el.innerText = data
  }
}

const value = new BitCoinPrice()
const display = new PriceDesplay()

value.subscribe(display)

setTimeout(() => value.unsubcribe(display), 5000)