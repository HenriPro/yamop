import React, { Component } from 'react';
import ReactTable from "react-table";
const fs = require('fs');
const jsmediatags = require("jsmediatags");
const path = require('path');





export default class SongList extends Component {
    state = {
        files : []
    }

    componentDidMount() {
        this.readFilesInDir('/home/henri/Music')
    }


    readFilesInDir(dir) {
        const that = this;
        fs.readdir(dir, { encoding: 'utf8', withFileTypes: true} , (err, files) => {
            if (err) throw  err;
            
            files.forEach(file => {
                const filePath = path.resolve(dir, file);

                fs.stat(filePath, (err, stat) => {
                    if (stat && stat.isDirectory()) {
                        that.readFilesInDir(filePath);
                        return;
                    } 

                    jsmediatags.read( filePath, {
                        onSuccess: function(tag) {
                            console.log(tag);
                            tag.tags.fileName = file;
                            that.setState(prev => {
                                return {files: [...prev.files, tag.tags]}
                            });
                        
                        },
                        onError: function(error) {
                            console.log(':(', error.type, error.info);
                        }
                    });
                    
                
                });

                
               
            });
        }); 
        
    }


    render() {
        return (
          <div>
            <h2>Test</h2>
            <ReactTable
                showPageSizeOptions={false}
                columns={[{Header: "Title", accessor: "title"},
                        {Header: "Artist", accessor: "artist"},
                        {Header: "Album", accessor: "album"},
                        {Header: "Genre", accessor: "genre"},
                        {Header: "Track", accessor: "track", maxWidth: 100},
                        ] }
                data={this.state.files}>
            </ReactTable>
          </div>
        );
      }

}