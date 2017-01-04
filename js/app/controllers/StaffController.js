function StaffController() {
  this.name = 'steve'
  this.email = 'steve@mac.com'
  this.phone = '(333)444-5555'
}

angular
  .module('app')
  .controller('StaffController', StaffController)
