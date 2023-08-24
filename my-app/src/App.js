
import React, { useState } from 'react';
import CartIcon from './CartIcon.js';

import './App.css';

const logos2 = {
  logo1: require('./assets/logo/navy-blue.png'),
  logo2: require('./assets/logo/navy-white.png'),
  logo3: require('./assets/logo/navy-school.png'),
  logo4: require('./assets/logo/white-red.png'),
  logo5: require('./assets/logo/purple.png'),
  logo6: require('./assets/logo/pink.png'),
  logo7: require('./assets/logo/orange.png'),
  logo8: require('./assets/logo/navy-white.png'),
  logo9: require('./assets/logo/navy-red.png'),
  logo10: require('./assets/logo/navy-orange.png'),
  logo11: require('./assets/logo/navy-green.png'),
  logo12: require('./assets/logo/green.png'),
  logo13: require('./assets/logo/gray-white.png'),
  logo14: require('./assets/logo/beige.png'),
};
const imgs = {
  img1: require('./assets/variations/navy-lighblue.png'),
  img2: require('./assets/variations/navy-white.png'),
  img3: require('./assets/variations/navy-lighblue.png'),
  img4: require('./assets/variations/white-red.png'),
  img5: require('./assets/variations/purple.png'),
  img6: require('./assets/variations/pink.png'),
  img7: require('./assets/variations/orange.png'),
  img8: require('./assets/variations/navy-white.png'),
  img9: require('./assets/variations/navy-red.png'),
  img10: require('./assets/variations/navy-orange.png'),
  img11: require('./assets/variations/navy-green.png'),
  img12: require('./assets/variations/green.png'),
  img13: require('./assets/variations/gray-white.png'),
  img14: require('./assets/variations/beige.png'),
};

const logos = {
  logo1: 'img1',
  logo2: 'img2',
  logo3: 'img3',
  logo4: 'img4',
  logo5: 'img5',
  logo6: 'img6',
  logo7: 'img7',
  logo8: 'img8',
  logo9: 'img9',
  logo10: 'img10',
  logo11: 'img11',
  logo12: 'img12',
  logo13: 'img13',
  logo14: 'img14',
};
const sizes = ["Small","Medium","Large","Extra Large","XXL"];

function App() {
  const [resim, setResim] = useState('img1');
  const [selectedSize, setSelectedSize] = useState('Small');
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState("71.56");

  const handleColorChange = (logoKey) => {
    setResim(logos[logoKey]);
  
    const priceMultipliers = {
      img1: 1,
      img2: 1.1,
      img3: 1.1 * 1.1,
      img4: 1.1 * 1.1 * 1.1,
      img5: 1.1 * 1.1 * 1.1 * 1.1,
      img6: 1.1 * 1.1 * 1.1 * 1.1 * 1.1,
      img7: 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1,
      img8: 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1,
      img9: 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1,
      img10: 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1,
      img11: 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1,
      img12: 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1,
      img13: 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1,
      img14: 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1 * 1.1,
    };
  
    setPrice((71.56 * priceMultipliers[logos[logoKey]]).toFixed(2));
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    
  };
  const increment = () => {
    setCount(count + 1); 
  };
  const decrement = () => {
    setCount(Math.max(count - 1, 1)); 
  };
  
  return (
    <div className="container">
      <div className="image-container">
        <img src={imgs[resim]} alt="Selected Image" className="image"/>
      </div>
      <div className="panel-container">
      <h2 className="h2-fiyat">${price}</h2>
        <p className="-span">Choose a Color</p>
        <div className="color-variants">
          {Object.keys(logos).map((variant) => (
            <button
              onClick={() => handleColorChange(variant)}
              key={variant}
              className={`color ${logos[variant] === resim ? 'active' : ''}`}
              style={{ backgroundImage: `url(${logos2[variant]})` }} // Burada logos2 nesnesinden arka plan resmi alıyoruz
            >
            </button>
            
          ))}

        </div>
        <div className="size">
            <p className="sizeLabel">Choose a Size</p>
            <div className="sizelar">
            <div className="sizes">
            {sizes.map((size) => (
              <label key={size} className="size1">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={handleSizeChange}
                />
                {size}
              </label>
            ))}
            </div>
            </div>
          </div>
          <div className="order-total">
      <div className="buttonC">
      <button onClick={decrement} className="button-">-</button>
      <span className="countS">{count}</span>
      <button onClick={increment} className="buttonarti">+</button>
      </div>
        <button  className="order-button">
        <p className="orderson"><CartIcon /> Add To Cart</p></button>
      </div>
      </div>
    </div>
  );
}

export default App;