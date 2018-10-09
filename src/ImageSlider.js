import React, { Component } from 'react';


export default class ImageSlider extends Component {
  state = {
    currentSlideIndex:0
  }

  current_slide = () => {
    const newCurrentSlide =  this.state.currentSlideIndex + 1
    this.setState({
      currentSlideIndex: newCurrentSlide
    })
  }

  render() {
  return (
    <div>I am on slide {this.state.currentSlideIndex}</div>
  )
  }
}
