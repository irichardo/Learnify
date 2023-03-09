const { pdfMaker } = require('../NodePdf/pdfkit')
const fs = require('fs')
const nodemailer = require('nodemailer')
const path = require('path')

const createMsjPayment = async (userName, email, precio) => {
    console.log(userName,email,precio,'aaaaaaaaaaaaaaaaaaaaaa');
  const fechaActual = new Date()
  const igv = precio * 0.2
  const date = fechaActual.toLocaleDateString().split('/').join('-')
  const name = `${userName}-BOLETA-DE-PAGO-${date}`
  const crearPdf = pdfMaker(name, precio, igv)
  if (crearPdf) {
    const filePath = path.join(process.cwd(), 'pdf', `${name}.pdf`)
    console.log(filePath)

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
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      const mailOptions = {
        from: 'learnifyPayment@gmail.com',
        to: `${email}`,
        subject: 'Boleta de pago',
        text: 'Por favor, pase a verificar que todos los datos estén en orden',
        attachments: [
          {
            path: filePath,
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
