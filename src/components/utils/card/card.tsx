import React, { useState } from 'react';
import './card.scss';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import eventBus from '../../../eventBus';

const Card: React.FC<any> = ({book, id, visibility}) => {

  const [title, setTitle] = useState<string>(book.name);
  const [author, setAuthor] = useState<string>(book.author_name);
  const [image, setImage] =useState<string>(book.ava_link);
  const [price, setPrice] = useState<number>(parseFloat(book.price));
  const [editable, setEditable] = useState(false);

  const clickEdit = (e: any) => {
    setEditable(!editable);
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      axios
      .patch(`http://localhost:3001/books/${id}`, {
        "name": title, 
        "summary": "Lorem Ipsum",
        "author_id": 1, 
        "quantity": 1,
        "price": price, 
        "sold": 1,
        "ava_link": image, 
        "author_name": author
      })
      .catch((error: any) => {
        console.log('Caught an error: ', error)
      })
    }
    eventBus.emit('entered');
  }

  const clickRemove = (e: React.MouseEvent) => {
    console.log("this id:", id );
    console.log('click event: ', e)
    axios
      .delete(`http://localhost:3001/books/${id}`)
      .catch((error: any) => {
        console.log('Caught an error: ', error)
      });
      e.stopPropagation();
      eventBus.emit('removed');
      // console.log('have listener: ',  eventBus.emit('removed'))
  }

  return (
    <div className='card'>
      <div className="card__image">
        <img src={book.ava_link} alt=""/>
      </div>
      <div className="card__info">
        {
          editable? 
          <>
            <label>Title</label>
            <input 
              className='edit-box' 
              type="input" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={handleKeyPress}
               />
            <label>Author</label>
            <input 
              className='edit-box' 
              type="text" 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)}
              onKeyPress={handleKeyPress} />
            <label>Cover URL</label>
            <input 
              className='edit-box' 
              type="text" 
              value={image} 
              onChange={(e) => setImage(e.target.value)}
              onKeyPress={handleKeyPress} />
            <label>Price</label>
            <input 
              className='edit-box' 
              type="text" 
              value={price} 
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              onKeyPress={handleKeyPress} />
          </> : 
          <>
            <div className='card__info__title'>
              <h2>{book.name}</h2>
            </div>
            <div className='card__info__author'>
              <h3>{book.author_name}</h3>
            </div>
            <div>${book.price}</div>
          </>
        }
      </div>
      <div className="card__func">
        {visibility? 
        <>
          <button className="card__func__edit" onClick={clickEdit}>
            <AiFillEdit/>
          </button>
          <button className='card__func__remove' onClick={clickRemove}>
            <AiFillDelete/>
          </button>
        </>
        : <></>}
      </div>
    </div>
  )
}

export default Card;