import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="animeLeft">
      <h2>A unica página com implementação foi a Search</h2>
      <Link to="/search"> Clique aqui para acessar</Link>
    </div>
  )
}

export default Home
