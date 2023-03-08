const { textForSentence, textInRowFirst, textInRowSecond, textInTittle, row } = require('../../controllers/pdfkit.controllers')
const PDFDocument = require('pdfkit')
const fs = require('fs')

const pdfMaker = (name, message, precio, igv) => {
  const doc = new PDFDocument()
  const main = 160
  const rows = [
    one = main,
    two = one + 20,
    three = two + 20, 
  ]

  const texts = [
    one = main + 10,
    two = one + 20,
    three = two + 20,
    four = three + 20,
    five = four + 20
  ]
  const path = './pdf'
  const fileName = `${name}.pdf`
  const filePath = `${path}/${fileName}`

  const writeStream = fs.createWriteStream(filePath)
  doc.pipe(writeStream)
  doc.lineCap('butt')
    .moveTo(270, rows[0])
    .lineTo(270, rows.length * 20 + main)
    .stroke()

  row(doc, rows[0])
  row(doc, rows[1])
  row(doc, rows[2])

  doc.fontSize(20)
  textInTittle(doc, 'BOLETA DE PAGO', 50)
  doc.fontSize(12)
  textForSentence(doc, `${message}`, 100)
  textInRowFirst(doc, 'PRECIO TOTAL DE LOS TOKENS', texts[0])
  textInRowSecond(doc, `${precio.toFixed(2)}$`, texts[0])
  textInRowFirst(doc, 'IGV', texts[1])
  textInRowSecond(doc, `${igv.toFixed(2)}$`, texts[1])
  textInRowFirst(doc, 'PRECIO TOTAL', texts[2])
  textInRowSecond(doc, `${(precio + igv).toFixed(2)}$`, texts[2])
  // doc.page.size = [595.28, 200];
  doc.end()
  return true
}

module.exports = {
  pdfMaker
}
