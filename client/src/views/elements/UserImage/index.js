import React, {Component} from 'react';
import "./style.css";
import DemoImage from '../images/CARMATE-USERIMAGE.jpg'
// import ReactDOM from 'react-dom'

export default class UserImage extends Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt='User Profile'/>);
      } else {
        $imagePreview = (<div className="previewText"><img src={DemoImage} alt='User Profile'/></div>);
      }
  
      return (
        <div className="previewComponent">
         <div className="imgPreview">
            {$imagePreview}
          </div>
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
              <div>
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
              </div>
          </form>
         
        </div>
      )
    }
  }
    
//   ReactDOM.render(<UserImage/>, document.getElementById("UserImage"));