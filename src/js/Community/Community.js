import React from 'react';
import Slide from 'js/Community/Slide';
import PostList from 'js/Community/PostList';
import './Community.scss';

const Community = () => {
    return (
        <div id="community-container">
            <div id="community">
                <div>
                    <Slide />
                </div>
                <div>
                    Category
                </div>
                <div>
                    <PostList />
                </div>
            </div>
        </div>
    );
};

export default Community;
