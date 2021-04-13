import React, { useState, useEffect } from 'react';
import { SearchArea, ContentSearch } from './styled';
import { Home, Config, Grid, List } from '../../Icons';
import MenuItem from '../../components/Menu/MenuItem';
import BoxResultSearch from '../../components/Search/BoxResultSearch';
import InputSearch from '../../components/Search/InputSearch';

const SearchPage = () => {
  const [products, setProducts] = useState('');
  const [valueSearch, setValueSearch] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

  useEffect(() => {
    if (products !== '') {
      fetch('../../api/FakeApi/produtos.json')
        .then((r) => r.json())
        .then((json) => {
          setProducts(json);
        });
    }
  }, [products]);

  useEffect(() => {
    setTimeout(() => {
      setActiveSearch(valueSearch);
    }, 1500);
  }, [valueSearch]);

  return (
    <SearchArea className="animeLeft">
      <div className="topoSearchArea">
        <div className="leftSide">
          <h2>Resultados</h2>
          <MenuItem link="/">
            <Home size={13} />
          </MenuItem>
          <p>Teste</p>
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
          <div className="filter-1">Preço</div>
          <div className="filter-2">Valor</div>
          <div className="filter-3">Categoria</div>
          <div className="filter-4">Avaliaçao</div>
        </div>

        <div className="contentResultSearch">
          <div className="inputSearch">
            <InputSearch search={valueSearch} onSearch={setValueSearch} />
          </div>
          {products.length > 0 &&(
            <>
              {products.map(item => (
                <BoxResultSearch data={item} key={item.id}/>
              ))}
            </>
          )}
          {/* {products.length > 0 && <BoxResultSearch data={products} />} */}
        </div>
      </ContentSearch>
    </SearchArea>
  );
};

export default SearchPage;
