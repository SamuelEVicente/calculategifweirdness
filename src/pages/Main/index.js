import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import * as actions from './actions'
import { bindActionCreators } from 'redux';
import InfoSearch from '../../components/InfoSearch';
import SearchResult from '../../components/SearchResult';
import LikedGifs from '../../components/LikedGifs';
class Main extends PureComponent {
  onLike = async () => {
    if (new Set(this.props.likedSearchTerms).has(this.props.searchValue.toLowerCase())) {
      window.setTimeout(() => {
        this.props.actions.dupLikeError(false)
      }, 7000)
      this.resetSearchFields()
      return this.props.actions.dupLikeError(true)
    }
    await this.props.actions.addToLikedGifs({
      likedGifs: [...this.props.likedGifs, this.props.currentGif],
      likedSearchTerms: [...this.props.likedSearchTerms, this.props.searchValue.toLowerCase()]
    })
    this.resetSearchFields()
    this.props.likedGifs.length !== 5 && this.props.actions.openToolTip(true)
  }

  onSearchChange = (e) => {
    this.props.actions.searchValueChanged(e.currentTarget.value)
    if (this.props.toolTipOpen) {
      this.props.actions.openToolTip(false)
    }
  }

  onWeirdValueChange = async (e) => {
    this.props.actions.isLoading(true)
    await this.props.actions.onWeirdValueChange(e.currentTarget.value)
    await this.searchTerm()
  }


  searchTerm = async () => {
    await this.props.actions.isLoading(true)
    await this.props.actions.apiRequest(this.props.searchValue, this.props.weirdValue)
    await this.props.actions.isLoading(false)
  }

  unlikeGif = (e) => {
    this.props.actions.unlikeGif({
      likedGifs: this.props.likedGifs.filter((el) => { return el.searchTerm !== e.currentTarget.id }),
      likedSearchTerms: this.props.likedSearchTerms.filter((el) => {
        return el !== e.currentTarget.id.toLowerCase()
      })
    })
  }

  resetSearchFields = () => {
    this.props.actions.resetResult({})
    this.props.actions.searchValueChanged('')
    this.props.actions.onWeirdValueChange(0)
  }

  render() {
    return (
      <>
        <div className="App">
          <Col xs="6">
            <InfoSearch search={this.searchTerm} onChange={this.onSearchChange} searchValue={this.props.searchValue} toolTipOpen={this.props.toolTipOpen} />
            <SearchResult count={this.props.likedGifs.length} onLike={this.onLike} loading={this.props.loading} onWeirdValueChange={this.onWeirdValueChange} currentGif={this.props.currentGif} weirdValue={this.props.weirdValue} />
          </Col>
          <Col xs="6">
            <LikedGifs likedGifs={this.props.likedGifs} onUnlike={this.unlikeGif} />
          </Col>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchValue: state.MainReducer.searchValue,
    likedGifs: state.MainReducer.likedGifs,
    weirdValue: state.MainReducer.weirdValue,
    currentGif: state.MainReducer.currentGif,
    loading: state.MainReducer.loading,
    toolTipOpen: state.MainReducer.toolTipOpen,
    likedSearchTerms: state.MainReducer.likedSearchTerms
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)