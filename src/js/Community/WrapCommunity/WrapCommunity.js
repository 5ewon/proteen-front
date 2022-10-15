import React from 'react';
import './WrapCommunity.scss';
import FloatPost from "js/Community/FloatPost/FloatPost";
import PostList from "js/Community/PostList/PostList";
import Category from '../Category/Category';
import PostingBtn from '../PostingBtn/PostingBtn';

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
            <PostingBtn />
        </div>
    );
}

export default WrapCommunity;