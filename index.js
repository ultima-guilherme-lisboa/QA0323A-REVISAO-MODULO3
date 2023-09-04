import express from 'express'
import Frete from './frete.js'
const app = express()
const port = 3000

app.use(express.json())

app.get('/frete', (req, res) => {
  let data = req.body
  let preco = data.preco
  let distancia = data.distancia

  Frete.calculaFrete(preco, distancia)
       .then(frete => {
        res.status(200).send({
            frete : frete
        })
       })
       .catch(err => {
        res.status(400).send(err)
       })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})