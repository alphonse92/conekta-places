import fetch from 'node-fetch';

export const getPostalCodeInfo = async (postalCode) => {
  if (!postalCode) return null;

  try {
    const url = `https://apisgratis.com/api/codigospostales/v2/colonias/cp/?valor=${postalCode}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const text = await response.text();
    const result = JSON.parse(text.trim());
    const list = Array.isArray(result)
      ? result
      : [result];

    const [firstResult] = list;

    if (!firstResult) return null;

    const {
      Municipio: municipio,
      Ciudad: ciudad,
      Entidad: estado,
    } = firstResult;

    return { municipio, ciudad, estado };
  } catch (e) {
    console.error(e);
    return null;
  }
};
