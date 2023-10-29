import React from 'react';
import './post.css';
import postData from '../../assets/postdata';
import star from '../../assets/scrollData/star.png';
import scrollData from '../../assets/scrollData';

const Post = () => {
    return (
        <div className='posts'>
            {
                postData.map((n) => (
                    <div className="post" key={n.id}>
                        <div className="postProfile">
                            {/* <div className="postProfileLeft"> */}
                            <img src={n.profileImg} alt="xyz" />
                            {/* </div> */}
                            <div className="postProfileRight">
                                <div className="postname">{n.name}</div>
                                <div className="postId">{n.id}</div>
                            </div>
                        </div>
                        <div className="postContent">{n.content}<span>Read More</span></div>
                        <img src={n.postImg} alt="xyz" />
                        <div className="postIntraction">
                            <div className="postIntractionData">
                                <img src={n.heartImg} alt="xyz" />
                                <div>{n.heart}</div>
                            </div>
                            <div className="postIntractionData">
                                <img src={n.commentImg} alt="xyz" />
                                <div>{n.comment}</div>
                            </div>
                            <div className="postIntractionData">
                                <img src={n.shareImg} alt="xyz" />
                                <div>{n.share}</div>
                            </div>
                        </div>
                    </div>
                ))
            }






            <div className="outer">
                {
                    scrollData.map((n) => (<div className="inner" key={n.id}>
                        <img src={n.scroll} alt="xyz" />
                        <div className='scrollContent'>Modern Wall Decor Framed Painting</div>
                        <div className="scrollPrice">
                            <div className='price'>$199.99</div>
                            <div className="star">
                                <img src={star} alt="xyz" />
                                <img src={star} alt="xyz" />
                                <img src={star} alt="xyz" />
                                <img src={star} alt="xyz" />
                                <img src={star} alt="xyz" />
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}

export default Post
