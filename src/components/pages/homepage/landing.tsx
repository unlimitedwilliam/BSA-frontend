import React, { useEffect, useState } from 'react';
import './landing.scss';
import Card from '../../utils/card/card';
import { BiSearch } from 'react-icons/bi';
import { TbBooks } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { boundActionCreators } from '../../redux/actions/boundActionCreators';
import { searchKeySelector, totalSelector } from '../../redux/selectors/selectors';
import axios from 'axios';
import { Book } from '../../../models/books';

const Landing: React.FC = () => {

  const searchKey = useSelector(searchKeySelector)
  const total = useSelector(totalSelector)

  const [productList, setProductList] = useState<Book[]>([]);
  const [searchText, setSearchText] = useState<string>('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/books/')
      .then((res) => {
        const data = res.data;
        setProductList([...data]);
      })
      .catch((error: any) => {
        console.log('Caught an error: ', error)
      })
  },[])

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
    boundActionCreators.search(e.target.value);
  }

  const handleAddTotal = (book: any) => {
    boundActionCreators.total(book.price)
  }

  const [defaultNum, setDefaultNum] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const el = document.getElementById("content") as HTMLElement
    el.addEventListener('scroll', (e)=>{
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        console.log('reached end');
        loadMore();
      }
    },true)
  })

  const display = () => {
    const displayContent: any[] = []
    for(let i = 0; i < defaultNum; i++) {
      displayContent[i] = productList[i];
    }
    return displayContent
  }

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setDefaultNum(defaultNum + 10);
      setLoading(false);
    }, 3000)
  }

  return (
      <div className='landing'>
        <div className="header">
          <h1 className='header__heading'>
            <TbBooks/>
            Store
          </h1>
          <div className='search'>
            <input className='search__box' placeholder='Search by name' value={searchText} onChange={handleSearchChange}/>
            <button className='search__button' type='submit' ><BiSearch color='#E2DCC8'/></button>
          </div>
        </div>
        <h2 className='direction'>Click on Cards below to add to Cart!</h2>
        <div className="cart-total">
          <h2>Cart Total: ${total.toFixed(2)} </h2>
        </div>
        <div id="bookshelf" className="bookshelf">
          {productList.map((book: any, index: number) => (
            <div key={index} className='bookshelf__item' onClick={(e) => handleAddTotal(book)}>
              <Card book={book}/>
            </div>
          )).slice(0,defaultNum)}
        </div>
        {loading? <p className='loading'>Loading more books...</p>: <></>}
      </div>
  )
}
export default Landing;