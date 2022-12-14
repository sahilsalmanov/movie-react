
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeMovieFromList } from '../../store/actions';
import './Favorites.css';
import { useNavigate } from "react-router-dom";

const Favorites = () => {
    const navigate = useNavigate();
    const [response,setResponse]=useState({})
  
    const link = 'https://acb-api.algoritmika.org/api/movies/list'
    const [input, setInput] = useState("")

    const { my_list } = useSelector(state => state.mylist)
    const dispatch = useDispatch()

    const handleLink = ()=>{
  
        navigate(`/list/${response.id}`,{ state: { title: response.title} })
    }

    const handleRemove = (id) => {
        dispatch(removeMovieFromList(id))
    }

    const handleInput = (e) => {

        setInput(e.target.value)
    }

    const handleSave = () => {
        const headers = {
            'Content-Type': 'application/json',

        }
        const data = {
            "title": input,
            "movies": my_list.map(item => {
                return item.imdbID
            })
        }

        axios.post(link, data, {
            headers: headers
        }).then(response => setResponse(response.data))

        
    }


    return (
        <div className="favorites">
            <input value={input} className="favorites__name" onChange={handleInput} />
            <ul className="favorites__list">
                {my_list.map((item) => {
                    return  <li style={{ display: "flex", justifyContent: "space-between" }} key={item.imdbID}>{item.Title} ({item.Year})   <button onClick={() => handleRemove(item.imdbID)} style={{ display: "inline-block" }}>x</button>  </li>

                    

                })}

            </ul>
           
            {
                response.id? <div onClick={handleLink}>List</div>: <button onClick={handleSave} type="button" disabled={input?false:true} className="favorites__save">{input ? "save" : "insert"}</button>
            }
           
        </div>
    );

}

export default Favorites;