
const textForSentence = (doc, text, height) => {
  doc.y = height
  doc.x = 30
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1
  })
  return doc
}

const textInTittle = (doc, text, height) => {
  doc.y = height
  doc.x = 220
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
    fontSize: 10
  })
  return doc
}

const textInRowFirst = (doc, text, heigth) => {
  doc.y = heigth
  doc.x = 30
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1
  })
  return doc
}

const textInRowSecond = (doc, text, height) => {
  doc.y = height
  doc.x = 370
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1
  })
  return doc
}

const row = (doc, height) => {
  doc.lineJoin('miter')
    .rect(30, height, 500, 20)
    .stroke()
  return doc
}

module.exports = {
  textForSentence,
  textInTittle,
  textInRowFirst,
  textInRowSecond,
  row
}
