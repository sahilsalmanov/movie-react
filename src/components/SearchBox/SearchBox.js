import React  from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/actions';
import './SearchBox.css';

const SearchBox = ({ setdata }) => {


    const dispatch = useDispatch()
    const [state, setState] = useState({
        searchLine: '',

    })


    const searchLineChangeHandler = (e) => {
        setState({ ...state, searchLine: e.target.value });
    }



    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
         dispatch(getMovies(state.searchLine))
    }

    const { searchLine } = state;


    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Please enter the film name:
                    <input
                        value={state.searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Search"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}

                >
                    Search
                </button>
            </form>
        </div>
    );

}

export default SearchBox;