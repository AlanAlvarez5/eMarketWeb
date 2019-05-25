import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/ejemplo.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/ejemplo2.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/ejemplo3.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
export default ControlledCarousel;