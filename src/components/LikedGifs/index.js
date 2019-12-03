import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GifList from '../../components/GifList';
import './styles.css'
export default function LikedGifs({ likedGifs, onUnlike }) {
  const likeGifsLength = likedGifs.length;
  const helperText = 5 - likeGifsLength > 0 ? `You must like ${5 - likeGifsLength} more gif(s) to calculate your score` : "";
  return (
    <section data-test="Liked-Gifs" className="liked_gifs component">
      <h1 className="component-title">Your Liked Gifs</h1>
      <section className="gif_list component">
        <GifList onUnlikeGif={onUnlike} gifs={likedGifs} />
        <div className="liked_gifs_weirdness_button">
          <Link data-test="Link-To-Results" to={{
            pathname: "/results"
          }}>
            <button disabled={likedGifs.length === 5 ? false : true}>
              CALCULATE MY WEIRDNESS SCORE
					</button>
          </Link>
        </div>
        <p><b>{helperText}</b></p>
      </section>
    </section>
  );
};

LikedGifs.propTypes = {
  likedGifs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    weirdness: PropTypes.number,
    meta: PropTypes.object,
    searchTerm: PropTypes.string
  })),
  onUnlike: PropTypes.func
}