export function combinaCSV (closingPrices, spotPrices) {
    const campos = [
        'PRODUCTO',
        'TIPO CONTRATO',
        'TIPO OPCION',
        'EJERCICIO',
        'FECHA',
        'ANTERIOR',
        'PRIMERO',
        'MINIMO',
        'MAXIMO',
        'ULTIMO',
        'VOLUMEN',
        'AJUSTE / PRIMA REF.',
        'T. IMPLICITA',
        'VAR %',
        'IA',
        'VAR. IA',
        'TRADES'
    ];

    const RELACIONES = {"TIPO CONTRATO": "SPOT", "FECHA" : "FECHA", "AJUSTE / PRIMA REF.": "COTIZACION" }
    const arraySpots = spotPrices.split("\n").slice(1).map(linea => {
        const [SPOT, FECHA, COTIZACION] = linea.split(";");
        const items = {SPOT, FECHA, COTIZACION};
        let arr = []
        campos.forEach(item => {
               arr.push( items[RELACIONES[item]] || ""  )
        })
       return arr.join(";")
    })
   
    return closingPrices + arraySpots.join("\n")

  

}