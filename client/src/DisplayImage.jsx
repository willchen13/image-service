import React from 'react';
import {ImageModal} from './Imagemodal.jsx'
import { imageData } from '../dist/fakeData';
import ImageSlider from './ImageSlider.jsx';
import { ChildDiv, ParentDiv,
   ImageModalChildDiv, ImageButton, ImageWrapper} from './styling';

   
   class SliderParent extends React.Component {
      constructor(props) {
         super(props)
         this.state = {
            isShowing: false,
         }
         this.handleClick = this.handleClick.bind(this);
      }


      handleClick() {
         event.preventDefault()
         this.setState({
            isShowing: true
         })
      }
      closeModalHandler = () => {
         console.log("clicked")
         event.preventDefault();
         this.setState({
             isShowing: false
         });
     }
      
      render() {
     let data = imageData;

     return (
      <ParentDiv>
         {!this.state.isShowing && 
       <ImageSlider>
        {data.map((image, index) => {
         return (
          <ChildDiv key={index} className="child">
             <ImageButton onClick={this.handleClick}>
           <ImageWrapper src={image.images[0]+".jpg"}></ImageWrapper>
           </ImageButton>
          </ChildDiv>
         );
        })}
       </ImageSlider>
      }

      <ImageModal
      show={this.state.isShowing}
      close={this.closeModalHandler}
      currentImage={data[0].images[0]}
      images={imageData}
      >
      </ImageModal>
      
       </ParentDiv>
      
     )
     

    }
   }

   export default SliderParent