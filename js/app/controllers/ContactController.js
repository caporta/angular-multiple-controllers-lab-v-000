function ContactController() {
  this.name = 'Bill'
  this.email = 'bill@msft.com'
  this.phone = '(555)444-3333'

  this.changeName = function () {
    this.name = 'Steve'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
