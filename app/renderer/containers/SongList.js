import React, { Component } from 'react';
import ReactTable from "react-table";
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return { songs: state.songs };
};


class SongList extends Component {

    render() {
        return (
          <div>
            <h2>Test</h2>
            { this.props.songs.length > 0 &&
                <ReactTable
                    showPageSizeOptions={false}
                    columns={[{Header: "Title", accessor: "title"},
                            {Header: "Artist", accessor: "artist"},
                            {Header: "Album", accessor: "album"},
                            {Header: "Genre", accessor: "genre"},
                            {Header: "Track", accessor: "track", maxWidth: 100},
                            ] }
                    data={this.props.songs}>
                </ReactTable>
            }
            
          </div>
        );
      }

}


export default connect(mapStateToProps)(SongList)
