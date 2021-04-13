let BASE = '../api/FakeApi';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProducts: async(search) => {
    let fields = {};
    if(search !== ''){
      fields.search = search;
    }
    let queryString = new URLSearchParams(fields).toString();
    const res = await fetch(BASE + '/search?' + queryString);
    const json = await res.json();
    return json;
  }
}