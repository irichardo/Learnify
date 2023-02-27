require('dotenv').config()
const request = require('request')
const Axios = require('axios')

const { ACCOUNT_ID_PAYPAL, CLIENT_ID_PAYPAL, PORT } = process.env
console.log(ACCOUNT_ID_PAYPAL, CLIENT_ID_PAYPAL, PORT)

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

const executePayment = async(req, res) => {
  console.log(req.body)
  const email = await Axios.get(`http://localhost:${PORT}/getid`)
  const mail = email.data

  const token = req.query.token
  request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
    auth,
    body: {},
    json: true
  }, async (err, response) => {
    if (err)console.log(err)

    res.render('template', { redirect: 'http://localhost:3030/endPayment' })// Esto de aqui puede usarse para agradecer el pago.
    if (response.body.status === 'COMPLETED') {
      let backLog = await Axios.put(`http://localhost:${PORT}/users/`, { mail: mail, tokens: 100 })// Una vez termine de enviar este post paso a regresarlo a la pagina de usuario donde estaba logeado.
      console.log(backLog.data)
    }
  })
}

// CUANDO SE HAGA EL POST EN LA SECCION DE RESPONSE, DEBERIA MANDAR EL LINK DE CRISTIAN PARA CAMBIAR LOS TOKENS
module.exports = { createPayment, executePayment }
