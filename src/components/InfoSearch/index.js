import React from 'react';
import { Jumbotron } from 'reactstrap';
import InputWithButton from '../../components/Input';
import PropTypes from 'prop-types';
import './styles.css'

export default function InfoSearch({ searchValue, onChange, search, toolTipOpen }) {
  return (
    <section data-test="Search-Section" className="search component">
      <div data-test="Search-Body">
        <Jumbotron data-test="Search-Jumbo">
          <p className="lead">Find out how weird you are by selectig the GIFs that make you laugh. We'll show you the least weird ones to start, but you can move the slider to make them weider.</p>
          <hr className="my-2" />
          <p>When you find a gif you like, press the like button. Once you like 5 gifs we we'll show you how weird you are.</p>
          <div className="lead">
            <InputWithButton data-test="Search-Button" search={search} onChange={onChange} placeholder="Enter Weird Term" toolTipOpen={toolTipOpen} value={searchValue} />
          </div>
        </Jumbotron>
      </div>
    </section>
  );
};

InfoSearch.propTypes = {
  searchValue: PropTypes.string,
  onChange: PropTypes.func,
  search: PropTypes.func,
  toolTipOpen: PropTypes.bool
}
