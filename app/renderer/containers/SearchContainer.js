import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../components/Search';
import searchActions from '../actions/search';

const mapStateToProps = (state) => {
  return {
    searchValue: state.search.searchValue,
    searchTypeValue: state.search.searchTypeValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  const search = bindActionCreators(searchActions, dispatch);
  return {
    handleSearchInput: (data) => {
      search.handleSearchInput(data);
    },
    handleSearchType: (data) => {
      search.handleSearchType(data);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
