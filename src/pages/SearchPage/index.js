import React, { useState, useEffect } from 'react';
import { SearchArea, ContentSearch } from './styled';
import { Home, Config, Grid, List } from '../../Icons';
import api from '../../api/Api';
import MenuItem from '../../components/Menu/MenuItem';
import BoxResultSearch from '../../components/Search/BoxResultSearch';
import InputSearch from '../../components/Search/InputSearch';

let searchTimer = null;

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const [radio, setRadio] = useState('todos');
  // const [totalPage, setTotalPage] = useState(0);
  // const [activePage, setActivePage] = useState(0);

  const getProducts = async () => {
    const prods = await api.getProducts();
    if (prods !== '') {
      setProducts(prods);
    }
  };
  const radioHandleClick = (e) => {
    setRadio(e.target.value);
  };

  useEffect(() => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setActiveSearch(valueSearch);
    }, 1500);
  }, [valueSearch]);

  useEffect(() => {
    setProducts([]);
    getProducts();
  }, [activeSearch]);

  return (
    <SearchArea className="animeLeft">
      <div className="topoSearchArea">
        <div className="leftSide">
          <h2>Resultados</h2>
          <MenuItem link="/">
            <Home size={13} />
          </MenuItem>
          <p>Categoria</p>
        </div>

        <div className="rightSide">
          <MenuItem link="/config">
            <Config className="config" />
          </MenuItem>
        </div>
      </div>

      <div className="topoSearchArea-2">
        <div className="leftSide">
          <p>Filtros</p>
        </div>
        <div className="rightSide">
          <p>200 resultados encontrados</p>
          <div className="buttonsLayout">
            <div className="select">
              <select name="" id="">
                <option value="list">Listagem</option>
              </select>
            </div>
            <div className="boxIcon">
              <Grid />
            </div>
            <div className="boxIcon">
              <List />
            </div>
          </div>
        </div>
      </div>

      <ContentSearch>
        <div className="filters">
          <form>
            <div className="filter-1">
              <p>Preço</p>
              <label>
                <input
                  type="radio"
                  value="10"
                  checked={radio === '10'}
                  onChange={radioHandleClick}
                /> R$ 10,00
              </label>
              <label>
                <input
                  type="radio"
                  value="100"
                  checked={radio === '100'}
                  onChange={radioHandleClick}
                /> R$ 10,00-$100,00
              </label>
              <label>
                <input
                  type="radio"
                  value="500"
                  checked={radio === '500'}
                  onChange={radioHandleClick}
                /> R$ 100,00-500,00
              </label>
              <label>
                <input
                  type="radio"
                  value="500+"
                  checked={radio === '500+'}
                  onChange={radioHandleClick}
                /> R$ 500,00
              </label>
              <label>
                <input
                  type="radio"
                  value="todos"
                  checked={radio === 'todos'}
                  onChange={radioHandleClick}
                />{' '}
                Todos
              </label>
            </div>
            <div className="filter-2">Valor</div>
            <div className="filter-3">Categoria</div>
            <div className="filter-4">Avaliaçao</div>
          </form>
        </div>

        <div className="contentResultSearch">
          <InputSearch
            search={valueSearch}
            onSearch={setValueSearch}
            type="text"
          />
          {products.length > 0 && (
            <>
              {products.map((item) => (
                <BoxResultSearch data={item} key={item.id} />
              ))}
            </>
          )}

          {/*           Total: {totalPage}
          {totalPage > 0 && (
            <div className="paginationArea">
              {Array(totalPage)
                .fill(0)
                .map((item, index) => (
                  <div className="paginationItem" key={index}>
                    {index + 1}
                  </div>
                ))}
            </div>
          )} */}
        </div>
      </ContentSearch>
    </SearchArea>
  );
};

export default SearchPage;
