import React from 'react';
import './WrapCommunity.scss';
import FloatPost from "js/Community/FloatPost/FloatPost";
import PostList from "js/Community/PostList/PostList";
import Category from '../Category/Category';

const WrapCommunity = () => {
    return (
        <div>
            <div id="box">             
                <FloatPost />
            </div>
            <div>
                <div>
                    <Category/>
                </div>
                <div>
                    <PostList />
                </div>
            </div>
            
        </div>
    );
}

export default WrapCommunity;