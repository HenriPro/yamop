import React, { Component } from 'react';
import ReactTable from "react-table";
const fs = require('fs');




export default class SongList extends Component {
    state = {
        files : [{title: 'test', artist: 'lol'},{title: 'test2', artist: 'lol'}]
    }

    componentDidMount() {
        this.readFiles()
    }

    readFiles() {
        fs.readdir('/home/henri/Music', (err, files) => {
            if (err) throw  err;
            const mappedFiles = files.map(ele => ({title: ele}));
            this.setState({files: mappedFiles })
        }); 
    }


    render() {
        return (
          <div>
            <h2>Test</h2>
            <ReactTable
                columns={[{Header: "Title", accessor: "title"}, {Header: "Artist", accessor: "artist"}] }
                data={this.state.files}>
            </ReactTable>
          </div>
        );
      }

}