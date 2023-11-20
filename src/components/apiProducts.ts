const API_URL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Produtos não foram carregados");
    }
    return data.products;
  } catch (err) {
    console.log(err);
  }
};
