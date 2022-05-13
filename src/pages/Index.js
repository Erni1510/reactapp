import React, { Component } from 'react';
import Nav from '../components/global/Nav';
import Footer from '../components/global/Footer';
//import Sidebar from '../components/global/Sidebar';
import Content from '../components/index/Content';

class Index extends Component {

    render() {
        return (
            <div>
                <Nav />  
                {/* <Sidebar /> */}
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Index;