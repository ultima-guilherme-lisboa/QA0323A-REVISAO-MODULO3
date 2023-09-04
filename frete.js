export default class Frete {

   static calculaFrete(preco, distancia) {
        return new Promise((resolve, reject) => {

            console.log("Chegou na promessa de calcula frete ", "preco " , preco , " distancia " ,distancia);
            if ( typeof preco != 'number' ) {
                reject({
                    message: "Preco deve ser um numero",
                })
            }

            if (typeof preco != 'number') {
                reject({
                    message: "Distancia deve ser um numero"
                })
            }


            if (distancia <= 100) {
                resolve(0);
            }else if (distancia <= 200) {
                resolve(preco * 0.05)
            }
            else {
                resolve(preco * 0.1)
            }
        })
    }

}