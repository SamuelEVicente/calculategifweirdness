import React from 'react';
import { Button } from 'reactstrap';
import { AiFillDislike } from 'react-icons/ai'
import PropTypes from 'prop-types';
import './styles.css'

const Gif = (props) => {
  const unLikeable = props.onUnlikeGif ? <Button data-test="Gif-Unlike" id={props.gif.searchTerm} onClick={e => props.onUnlikeGif(e)}><AiFillDislike /> </Button> : null;
  return (
    <section data-test="Gif" className="gif">
      <h5 data-test="Gif-Title">{props.gif.title}</h5>
      <img data-test="Gif-Image" width={props.width} height={props.height} src={props.gif.url} alt={props.gif.title} />
      {unLikeable}
    </section>
  );
}

Gif.propTypes = {
  onUnlikeGif: PropTypes.func,
  gif: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string
}

export default Gif