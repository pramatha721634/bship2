import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {
    render() {
        return (
          <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.bship.biz/images/walkathonBanner2.jpg" width="100%" height="400"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2></h2>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      src="http://www.bship.biz/images/walkathonBanner2.jpg"
      width="100%" height="400"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2></h2>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.bship.biz/images/walkathonBanner2.jpg"
      width="100%" height="400"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2></h2>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="container ml-5 " >
<div class="row justify-content-around">
    <div className="col-6 py-3 ">
<h2 className="text-danger font-italic">INTRODUCTION</h2>
<p className=" text-justify font-weight-normal">When like minded people get along, great things happen. Dreams become reality, giving rise to newer dreams and achievement looks positive. More likely collaborations happen and new business are formed, old businesses become stronger than ever by trust worthy vendors coming in as your suppliers. Isn’t it interesting? To add more to the development, your business gets recognised in our community.</p>
<button type="button" class="btn btn-danger">Read More</button>
</div>

<div className="col-4 py-3 ">
 <img id="brand-image"src="http://bship.azurewebsites.net/images/Ecmem.JPG" alt="Website Logo" className="img-responsive"style={{width:'600px'}}/>
 </div>

</div>
</div>


</div>

        );
    }
}

export default Home;