let BASE = 'http://localhost:3000';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProducts: async() => {
     const res = await fetch(BASE + '/produtos.json');
    const json = await res.json();
    return json;
  }
}