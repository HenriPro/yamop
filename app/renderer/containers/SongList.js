import React, { Component } from 'react';
import ReactTable from "react-table";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import search from '../utils/search';
import focusActions from '../actions/inFocus'

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
        searchValue: state.search.searchValue,
        searchTypeValue: state.search.searchTypeValue
    };
};


const mapDispatchToProps = (dispatch) => {
    const focus = bindActionCreators(focusActions, dispatch);
    return {
        createFocus: (data) => {
            focus.createFocus(data);
        },
    }
}

class SongList extends Component {

    whatToShow() {
        if (this.props.searchValue.length > 0) {
            return search(this.props.songs, this.props.searchValue, this.props.searchTypeValue);
        }
        return this.props.songs;
    }


    render() {
        return (
            <div>
                {this.props.songs.length > 0 &&
                    <ReactTable
                        showPageSizeOptions={false}
                        columns={[{ Header: "Title", accessor: "title" },
                        { Header: "Artist", accessor: "artist" },
                        { Header: "Album", accessor: "album" },
                        { Header: "Genre", accessor: "genre" },
                        { Header: "Track", accessor: "track", maxWidth: 100 },
                        ]}
                        data={this.whatToShow()}
                        getTdProps={(state, rowInfo) => {
                            return {
                                onClick: (e, handleOriginal) => {
                                    console.log("It was in this row:", rowInfo.original.filePath);
                                    this.props.createFocus(rowInfo.original);
                                    if (handleOriginal) {
                                        handleOriginal();
                                    }
                                }
                            };
                        }}
                    >
                    </ReactTable>
                }

            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)