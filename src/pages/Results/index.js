import React from 'react'
import { connect } from 'react-redux'
import GifList from '../../components/GifList'
import { Link } from 'react-router-dom'
import { reset } from '../Main/actions'
import { bindActionCreators } from 'redux'
import './styles.css'

const Results = ({ likedGifs, reset }) => {
  let sum = 0
  likedGifs.forEach(likedGif => {
    sum += parseInt(likedGif.weirdness)
  });
  const avg = Math.round((sum / 5));
  return (
    <>
      <section className="result_page component">
        <h4> Your Liked Gifs </h4>
        <h4> You scored a
					<span className="result_page_avg_weirdness"> {avg} </span>
          out of 10 on the weirdness scale!
				</h4>
        <GifList title="The GIFs you liked" gifs={likedGifs} includeWeirdness={true} />
        <div className="result_page_start_over">
          <Link to="/" onClick={() => reset()}>
            <button>
              START OVER
						</button>
          </Link>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state, props) => ({
  likedGifs: state.MainReducer.likedGifs
});

const mapDispatchToProps = (dispatch) => ({
  reset: bindActionCreators(reset, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Results);