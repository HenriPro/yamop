import React, { Component } from 'react';
import ReactTable from "react-table";
import { connect } from 'react-redux';
const Fuse = require('fuse.js');

const mapStateToProps = (state) => {
    return { 
        songs: state.songs,
        searchValue: state.search.searchValue,
        searchType: state.search.searchType
    };
};


class SongList extends Component {

    whatToShow() {
        if (this.props.searchValue.length > 0) {
            let keys;
            if (this.props.searchType === "searchAll") {
                keys = ["title",
                    "artist",
                    "album",
                    "genre",
                    "track"
                ];
            } else {
                keys = this.props.searchType
            }

            var options = {
                shouldSort: true,
                threshold: 0.1,
                tokenize: true,
                location: 0,
                distance: 200,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: keys
              };
              var fuse = new Fuse(this.props.songs, options); // "list" is the item array
              return fuse.search(this.props.searchValue);
        }
        return this.props.songs;
    }


    render() {
        return (
          <div>
            { this.props.songs.length > 0 &&
                <ReactTable
                    showPageSizeOptions={false}
                    columns={[{Header: "Title", accessor: "title"},
                            {Header: "Artist", accessor: "artist"},
                            {Header: "Album", accessor: "album"},
                            {Header: "Genre", accessor: "genre"},
                            {Header: "Track", accessor: "track", maxWidth: 100},
                            ] }
                    data={this.whatToShow()}>
                </ReactTable>
            }
            
          </div>
        );
      }

}


export default connect(mapStateToProps)(SongList)
