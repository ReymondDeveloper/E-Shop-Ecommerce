import React, { useEffect, useState } from 'react'
import '../pagesStyle/ClientHome.css';
import ProductComponent from './ProductComponent';
import Navbar from '../components/Navbar';
import axios from 'axios';

const ClientHome = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [filteredItems,setFilteredItems] = useState([]);
  const categories = ['All', 'Bag', 'Shoes', 'Jacket', 'Pants', 'Polo', 'Watch'];

  const handleFilterButtonClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterItems();
  }, [selectedCategory, products]);

  const loadProducts = async () => {
    try {
      const result = await axios.get('http://localhost:8080/image');
      setProducts(result.data);
      setFilteredItems(result.data);

    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const filterItems = () => {
    // console.log(`Selected category: ${selectedCategory}`);

    if (selectedCategory === 'All') {
      setFilteredItems(products);

    } else {
      const tempItems = products.filter((product) => {
        return product.category.toLowerCase() === selectedCategory.toLowerCase();
      });
      setFilteredItems(tempItems);
    }
  };
  return (
    
    <div className='clientHomeContainer container-fluid vh-100'>
      <Navbar/>
      <div className='headerHomeImg d-flex'><img className='headerImg'  src='/images/shopBg.webp' rel='HomeTitleImg' /></div>
      
      <div className='homeBody'>
          <h1 className='homeBodyTitle'>Popular Products</h1>
          <p className='homepharag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
          </p>
      </div>

      <div className='homeFooter container-fluid'>
          <div className='homeContainer'> 
              <ul className='homeComponentsList'>
                {categories.map((category) => (
                    <li
                        key={category}
                        className={`homeList ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick(category)}
                    >
                        {category}
                    </li>
                ))}
                
              </ul>
              <hr className='homeHr'/>
          </div>
          <ProductComponent filteredItems={filteredItems} />
         

          </div>        
       
      <div className='homeContainerFooter'>
        <div className='homeFooterContext'>
          <h1 className='homeFootertitle'>About</h1>
          <p className='homeFooterPharag' >Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.
          It helps designers plan out where the content will sit, without needing  to wait for the content to be written and approved. 
          It originally comes  from a Latin text, but to today's reader, it's seen as gibberish.</p>
        </div>      
      </div>
      

    </div>
  )
}

export default ClientHome