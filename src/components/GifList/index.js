import React from 'react';
import PropTypes from 'prop-types';
import Gif from '../Gif';
import './styles.css'

const GifList = (props) => {
  const gifs = () => {
    return props.gifs.map(gif => {
      return (
        <li data-test="Gif-Item" key={gif.id}>
          <Gif data-test="Gif" onUnlikeGif={props.onUnlikeGif} height="250" width="250" gif={gif} />
          {props.includeWeirdness ? <div data-test="Gif-Weirdness" className="gif_list_weirdness">{gif.weirdness}/10</div> : ""}
        </li>
      );
    });
  }
  return (
    <section data-test="Gif-Section" className="gif_list component">
      <ul data-test="Gif-List">
        {gifs()}
      </ul>
    </section>
  );
};

GifList.propTypes = {
  gifs: PropTypes.array,
  onUnlikeGif: PropTypes.func,
  includeWeirdness: PropTypes.bool
}

export default GifList