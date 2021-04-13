import React from 'react';
import {BoxArea} from './styled'
import {Archive,Heart,Star} from '../../../Icons';

const BoxResultSearch = ({data}) => {
  let preco = parseFloat(data.price);
  const formatPrice = (valor) =>{
    return valor.toLocaleString('pt-BR',{
      style:'currency',
      currency: 'BRL'
    });
  };

  return (
    <BoxArea>
      <div className="boxImg">
        <img src={data.img} alt=""/>
      </div>
      <div className="boxBody">
        <div className="titleBody">{data.title}</div>
        <div className="authorBody">Por<span>{data.author}</span></div>
        <div className="descriptionBody">{data.description}</div>
      </div>

      <div className="boxButtons">
        <div className="reviews"> 3.4 <Star /></div>
        <div className="price">{formatPrice(preco)}</div>

        <div className="buttons">
          <button className="btn1"><Heart /> Amei</button>
          <button className="btn2"><Archive /> Comprar</button>
        </div>
      </div>
    </BoxArea>
  );
};

export default BoxResultSearch;
