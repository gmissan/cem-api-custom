import fetch from "node-fetch";

export async function getClosingPrices({ from, to }) {
  const params = {
    type: "FUT",
    excludeEmptyVol: true,
    from,
    to,
    format: "CSV",
    market: "ROFX",
    version: 2,
  };

  const endpointURL = `https://apicem.matbarofex.com.ar/api/v2/downloads/closing-prices?${new URLSearchParams(params).toString()}`;

  try {
    const respuesta = await fetch(endpointURL);

    if (respuesta.ok) {
      const datos = await respuesta.text();
      // Haz algo con los datos, por ejemplo, imprímelos en la consola

      return datos;
    } else {
      console.error("Error al obtener los datos:", respuesta.status, respuesta.statusText);
      return "";
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}

export async function getSpotPrices({ from, to }) {
  const params = {
    from,
    to,
    format: "CSV",
    market: "ROFX",
    version: 2,
  };

  const endpointURL = `https://apicem.matbarofex.com.ar/api/v2/downloads/spot-prices?${new URLSearchParams(params).toString()}`;

  try {
    const respuesta = await fetch(endpointURL);

    if (respuesta.ok) {
      const datos = await respuesta.text();
      // Haz algo con los datos, por ejemplo, imprímelos en la consola

      return datos;
    } else {
      console.error("Error al obtener los datos:", respuesta.status, respuesta.statusText);
      return "";
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}
