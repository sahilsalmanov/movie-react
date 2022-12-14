import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToList } from '../../store/actions';
import './MovieItem.css';

const MovieItem =(props)=> {
  
    const {my_list} = useSelector(state=>state.mylist) 

        const { Title, Year, Poster } = props;
        const dispatch = useDispatch()

        const addToList = ()=>{
            dispatch(addMovieToList(props))
           
        }

        const isTrue = my_list.some((item)=>{
            return item.imdbID===props.imdbID
        })

        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button disabled={isTrue} type="button" className="movie-item__add-button" onClick={addToList}>Добавить в список</button>
                </div>
            </article>
        );
    
}
 
export default MovieItem;