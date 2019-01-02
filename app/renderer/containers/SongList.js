import React, { Component } from 'react';
import ReactTable from "react-table";
import { connect } from 'react-redux';
import search from '../utils/search';

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
        searchValue: state.search.searchValue,
        searchTypeValue: state.search.searchTypeValue
    };
};


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
                        data={this.whatToShow()}>
                    </ReactTable>
                }

            </div>
        );
    }

}


export default connect(mapStateToProps)(SongList)
