import React, {useEffect, useState} from 'react';
import axios from 'axios';
import eventBus from '../../../eventBus';

const InputField: React.FC = () => {

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [image, setImage] =useState<string>('');
  const [price, setPrice] = useState<string>('');

  const handleAddButton = () => {
    axios
      .post("http://localhost:3001/books/", {
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

    eventBus.emit('add');

    setTitle('');
    setAuthor('');
    setImage('');
    setPrice('');
  }

  return (
    <>
    <div className='input'>
      <input 
        type='input'
        className='input__title' 
        placeholder='Title' 
        value = {title}
        onChange={(e) => {setTitle(e.target.value)}}
        />
      <input 
        type='input'
        className='input__author' 
        placeholder='Author' 
        value={author}
        onChange={(e) => setAuthor(e.target.value)}/>
      <input 
        type='input'
        className='input__image' 
        placeholder='Image URL'
        value={image}
        onChange={(e) => setImage(e.target.value)}/>
      <input 
        type='input'
        className='input__price' 
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}/>
      </div>
    <div className='submit'>
      <button 
      className='submit__button'
        onClick={handleAddButton}>Add</button>
    </div>
    </>
  )
}

export default InputField;