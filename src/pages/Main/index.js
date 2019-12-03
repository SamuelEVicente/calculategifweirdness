import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import * as actions from './actions'
import { bindActionCreators } from 'redux';
import InfoSearch from '../../components/InfoSearch';
class Main extends PureComponent {
  onSearchChange = (e) => {
    this.props.actions.searchValueChanged(e.currentTarget.value)
    if (this.props.toolTipOpen) {
      this.props.actions.openToolTip(false)
    }
  }

  searchTerm = async () => {
    await this.props.actions.isLoading(true)
    await this.props.actions.apiRequest(this.props.searchValue, this.props.weirdValue)
    await this.props.actions.isLoading(false)
  }

  render() {
    return (
      <>
        <div className="App">
          <Col xs="6">
            <InfoSearch search={this.searchTerm} onChange={this.onSearchChange} searchValue={this.props.searchValue} toolTipOpen={this.props.toolTipOpen} />
          </Col>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchValue: state.MainReducer.searchValue,
    weirdValue: state.MainReducer.weirdValue,
    toolTipOpen: state.MainReducer.toolTipOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)