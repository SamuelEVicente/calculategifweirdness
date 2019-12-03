import React from 'react'
import { Spinner } from 'reactstrap';
import { AiFillLike } from 'react-icons/ai';
import Gif from '../../components/Gif';
import { isEmpty } from '../../utils/appUtils';
import { Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';
import './styles.css'

export default function SearchResult({ currentGif, weirdValue, onWeirdValueChange, loading, onLike, count }) {
  const renderResultOrError = () => {
    if (isEmpty(currentGif)) {
      return <p>No results found for search term entered. Please try another search term</p>
    } else if (currentGif.meta && currentGif.meta.status === 200) {
      return (
        <Gif width="250" height="250" gif={currentGif} />
      );
    } else if (currentGif.meta && currentGif.meta.status !== 200) {
      return (
        <p>There was an error processing your request. The error message is: {currentGif.meta.status} {currentGif.meta.msg} </p>
      );
    } else {
      const display = loading ? <Spinner size="lg" color="primary" /> : <p>Please enter a search term in the box above and click Search to find a GIF.</p>
      return (
        <>
          {display}
        </>
      );
    }
  }
  return (
    <section data-test="Search-Result" className="search_result component">
      <div className="jumbotron flex-fill">
        <h4 className="component-title">Your Result</h4>
        <div className="search_result_image">
          <div className="search_result_image_wrapper">
            {renderResultOrError()}
            <div id="search_result" className="search_result_like_gif">
              <button data-test="Like-Button" onClick={onLike} disabled={isEmpty(currentGif) || count === 5 ? true : false}>
                <AiFillLike />
              </button>
              <Tooltip data-test="Search-Result-ToolTip" placement="bottom" trigger={"focus"} isOpen={count === 5 ? true : false} target="search_result">
                Only allowed to like 5 gifs.
              </Tooltip>
            </div>
            <div data-test="Search-Result-Slider" className="search_result_weirdness">
              <input type="range"
                min="0" max="10"
                value={weirdValue}
                onChange={onWeirdValueChange} />
              <label htmlFor="customRange1">Weirdness: {weirdValue}</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SearchResult.propTypes = {
  currentGif: PropTypes.object,
  weirdValue: PropTypes.number,
  onWeirdValueChange: PropTypes.func,
  loading: PropTypes.bool,
  onLike: PropTypes.func,
  count: PropTypes.number
}