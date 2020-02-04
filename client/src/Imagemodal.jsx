import React from 'react';
import { ModalWrapper, ModalCloseButton,ImageModalWrapper,ImageModalButton,
     ModalWrapperDiv, ImageModalMainImg, ImageButton, 
     ImageModalChildDiv, ImageModalRightColumn, ImageWrapper,
     ImageModalRightColumnImg } from './styling'

export class ImageModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data || []
        }
    }

    render() {
        let data = this.props.images;
        return (
            <ModalWrapper
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-500vh)',
                    opacity: this.props.show ? '1' : '0',
                    
                }}>
                    <ImageModalMainImg>
                    <ImageModalWrapper src={this.props.currentImage+".jpg"}></ImageModalWrapper>
                    
                    </ImageModalMainImg>
                <ImageModalRightColumn>

                {data.map((image, index) => {
         return (
          <ImageModalChildDiv key={index}>
             <ImageModalButton onClick={this.handleClick}>
           <ImageModalRightColumnImg src={image.images[0]+".jpg"}></ImageModalRightColumnImg>
           </ImageModalButton>
          </ImageModalChildDiv>
         );
        })}
                    

                </ImageModalRightColumn>




            </ModalWrapper>

        )
    }
};