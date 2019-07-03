import React, { Component } from 'react'

import axios from 'axios'
import './ReadFiles.css'

const url_path = "http://localhost:3000/";

export class ReadFiles extends Component {
    
    constructor(props){
        super(props)
    }
    sendUrl = (url) => {
        axios.POST()

    }
   
    onChangeHandler =(e)=>{
        const file=e.target.files

      
         
         for(let i = 0; i < file.length; i++) {
             console.log(file[i])
          console.log(file[i].webkitRelativePath);
        //   var temp_path = file[i].webkitRelativePath;
        //   var absolute_path= url_path + temp_path;
        //   console.log(absolute_path);

         }

    //    console.log(tempPath);
       
    
    //  reader.readAsDataURL(file[0])
    //  console.log(file[0])
    
    //    console.log(file);
    //    const __dirname= 'D:\angularjs\Angular-Gulp-Boilerplate'
    //    listReactFiles('D:\\angularjs\\Angular-Gulp-Boilerplate').then(files => console.log(files));
    // RNFS.readDir(RNFS.DocumentDirectoryPath).then(files=>{

    //     console.log(files)
    // })
    // .catch(err => {
    //     console.log(err.message,err.code);
    // }

    // );
    
       
    }
    render() {
        return (
            <div className="container">
            <div className="Upload">
         <input type="file" name="file" onChange={this.onChangeHandler}  webkitdirectory="" directory="" /> 
            
            </div>
        
            {/* <FileTree directory={directory} /> */}
            </div>
          
          

            
        )
    }
}

export default ReadFiles
