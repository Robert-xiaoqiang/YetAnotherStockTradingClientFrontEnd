import React from 'react';

import { Carousel } from 'antd';


class APPCarousel extends React.Component {

    render() {
        return (
            <div className="carousel-wrap">
                <Carousel autoplay>
                    <div><img src="../static/img/logo.jpg" /></div>
                    <div><img src="../static/img/logo.jpg" /></div>
                    <div><img src="../static/img/logo.jpg" /></div>
                    <div><img src="../static/img/logo.jpg" /></div>
                </Carousel>
            </div>
        )
    }

}

export default APPCarousel;