require('dotenv').config()
const request = require('request')
const Axios = require('axios')
const { createMsjPayment } = require('../process/nodeMailler/nodeMailler.controllers')

const { ACCOUNT_ID_PAYPAL, CLIENT_ID_PAYPAL, PORT } = process.env

const PAYPAL_API = 'https://api-m.sandbox.paypal.com'

const auth = { user: ACCOUNT_ID_PAYPAL, pass: CLIENT_ID_PAYPAL }

const createPayment = (req, res) => {
  const { Amount } = req.body
  const body = {
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: Amount
      },
      item_list: {
        items: [{
          name: 'Tokens',
          description: 'Tokens para aportar en los crowfunding',
          price: `${Amount}`,
          quantity: `${Amount * 0.8}`,
          currency: 'USD'
        }]
      }
    }],
    application_context: {
      brand_name: 'Learnify',
      landing_page: 'NO_PREFERENCE',
      user_action: 'PAY_NOW',
      return_url: `http://localhost:${PORT}/execute-payment`,
      cancel_url: `http://localhost:${PORT}/cancel-payment`
    }
  }
  request.post(`${PAYPAL_API}/v2/checkout/orders`, {
    auth,
    body,
    json: true
  }, (err, response) => {
    if (err)console.log(err)
    // res.json({data:response.body});
    if (Amount !== 0) {
      const redirect = response.body.links.find(a => a.rel === 'approve').href
      res.send(redirect)
    }
  }
  )
}

// Un file extra para metodos de pago.js.

const executePayment = async (req, res) => {
  const email = await Axios.get(`http://localhost:${PORT}/getid`)
  const mail = email.data
  const totalTokens = mail.data.price * 100
  const userName = mail.data.name.split(' ')[0]

  const token = req.query.token
  request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
    auth,
    body: {},
    json: true
  }, async (err, response) => {
    if (err)console.log(err)
    res.render('template', { redirect: 'http://localhost:3030/endPayment' })// Esto de aqui puede usarse para agradecer el pago.
    if (response.body.status === 'COMPLETED') {
      const backLog = await Axios.put(`http://localhost:${PORT}/users/`, { mail: mail.data.user, tokens: totalTokens })// Una vez termine de enviar este post paso a regresarlo a la pagina de usuario donde estaba logeado.
      createMsjPayment(userName, mail.data.user, mail.data.price)
      console.log(backLog.data)
    }
  })
}

// CUANDO SE HAGA EL POST EN LA SECCION DE RESPONSE, DEBERIA MANDAR EL LINK DE CRISTIAN PARA CAMBIAR LOS TOKENS
module.exports = { createPayment, executePayment }
