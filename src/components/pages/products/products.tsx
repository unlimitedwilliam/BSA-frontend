import React, { useEffect, useState } from 'react';
import { Book } from '../../../models/books';
import './products.scss';
import InputField from '../../utils/inputField/inputField';
import Card from '../../utils/card/card';
import axios from 'axios';
import eventBus from '../../../eventBus';
import { MdAddBusiness } from 'react-icons/md'

const Products: React.FC = () => {

  const [productList, setProductList] = useState<Book[]>([]);
  
  const getData = () => {
    axios
    .get('http://localhost:3001/books/')
    .then((res) => {
      const data = res.data;
      setProductList(data);
    })
    .catch((error: any) => {
      console.log('Caught an error: ', error)
    })
  }
  
  useEffect(() => {
    console.log('component mounted');
    getData();
  },[])

  eventBus.once('entered', () => {
    console.log('listener enter')
    getData();
  })
  eventBus.once('removed', () => {
    console.log('listened');
    getData();
  })
  eventBus.once('add', () => {
    getData();
  })

  return (
    <div className="products">
      <div className="products__add">
        <h2 className='products__add__title'>
          <MdAddBusiness/>
          Add New Products
        </h2>
        <InputField/>
      </div>
      <div className="products__list">
        {
          productList.map((book: Book, index) => (
            <Card key={index} book={book} visibility={true} id={book.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Products;