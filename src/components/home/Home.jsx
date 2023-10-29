import React from 'react';
import './home.css'
import Topbar from '../topbar/Topbar';
import Navbar from '../leftNavbar/Navbar';
import RightCardBar from '../rightCards/RightCardBar';
import Post from '../posts/Post';


const Home = () => {
    return (
        <div className='home'>
            <Topbar />
            <div className="homepagecontent">
                <Navbar />
                <Post />
                <RightCardBar />
            </div>
            <div className="footer">
                <div className="footerinner">
                    <div>2022©logo name</div>
                    <div>Developed by ivan Infotech</div>
                </div>
                <div className="footerinner">
                    <div>Privacy </div>
                    <div>Terms of Service</div>
                    <div>Cookie Notice</div>
                </div>
            </div>
        </div>
    )
}

export default Home
