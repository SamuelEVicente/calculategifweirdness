import React from 'react'
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';
export default function InputWithButton(props) {
  return (
    <>
      <input data-test="Search-Field" id="tooltip" placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
      <button data-test="Search-Button" onClick={props.search} disabled={props.value.length === 0 ? true : false} color="primary">Search</button>
      <Tooltip data-test="Search-ToolTip" placement="bottom" trigger={"focus"} isOpen={props.toolTipOpen} target="tooltip">
        Try another search term!
      </Tooltip>
    </>
  )
};

InputWithButton.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  search: PropTypes.func,
  onChange: PropTypes.func,
  toolTipOpen: PropTypes.bool
}