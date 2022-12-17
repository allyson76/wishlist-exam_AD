class Auth {
  // Login with email and password
  get login_signupBtn() { return ('#signInOrRegister') }
  get inputEmail() { return ('[type="email"]') }
  get inputPassword() { return ('[type="password"]') }
  get loginBtn() { return ("[name=submit]") }

  get errmessage() { return ('span[class="animated fadeInUp"] span') }

  loginUser(email, password) {
    cy.get(this.login_signupBtn).click()
    cy.get(this.inputEmail).type(email)
    cy.get(this.inputPassword).type(password)
    cy.get(this.loginBtn).click()
  }

  // google sign in
  get googleBtn() { return ('[class="auth0-lock-social-button-text"]') }
  get googleEmail() { return ('input[name="email"]') }
  get googleNxtBtn1() { return ('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"] div[class="VfPpkd-RLmnJb"]') }
  get googlePassword() { return ('input[name="password"]') }
  get googleNxtBtn2() { return ('div[id="passwordNext"] span') }

  googleLogin(email, password) {
    cy.get(this.login_signupBtn).click()
    cy.get(this.googleBtn).click()
    cy.get(this.googleEmail).type(email)
    cy.get(this.googleNxtBtn1).click()
    cy.get(this.googlePassword).type(password)
    cy.get(this.googleNxtBtn2).click()
  }

  //Sign up with google
  get signupBtn() { return ('li:nth-child(2)') }

  // Sign up with email and password
  get signupTab() { return ('li:nth-child(2)') }
  get emailA() { return ('[type="email"]') }
  get passWord() { return ('[type="password"]') }
  get SignupBtn() { return ("[name=submit]") }

  signupUser(email, password) {
    cy.get(this.login_signupBtn).click()
    cy.get(this.signupTab).click()
    cy.get(this.emailA).type(email)
    cy.get(this.passWord).type(password)
    cy.get(this.signupBtn).click()
  }

}
export default new Auth()
