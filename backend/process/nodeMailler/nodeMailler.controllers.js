const { pdfMaker } = require('../NodePdf/pdfkit')
const fs = require('fs')
const nodemailer = require('nodemailer')
const path = require('path')

const createMsjPayment = async (userName, message, precio, igv) => {
  const fechaActual = new Date()
  const date = fechaActual.toLocaleDateString().split('/').join('-')
  const name = `${userName}-BOLETA DE PAGO-${date}`
  const crearPdf = pdfMaker(name, message, precio, igv)
  if (crearPdf) {
    const filePath = path.join(__dirname, 'pdf', `${name}.pdf`)
    await crearPdf
    if (fs.existsSync(filePath)) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'learnifypayment@gmail.com',
          pass: 'rnqtvhicukqoowgn'
        }
      })
      const mailOptions = {
        from: 'learnifyPayment@gmail.com',
        to: 'zerorichardx@gmail.com',
        subject: 'Boleta de pago',
        text: 'Por favor, pase a verificar que todos los datos estén en orden',
        attachments: [
          {
            path: `./pdf/${name}.pdf`,
            content: 'application/pdf'
          }
        ]
      }
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      })
    } else {
      console.log(`File ${name}.pdf not found in folder pdf`)
    }
  }
}

module.exports = {
  createMsjPayment
}
