import React from 'react';
import news_1 from '../../images/news-1.png';
import news_2 from '../../images/news-2.png';
import news_3 from '../../images/news-3.png'
const News = () =>{
    return(<div class="the-news">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>The News</h2>

                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="the-news-wrap">
                            <figure class="post-thumbnail">
                                <a href="#"><img src={news_1} alt=""/></a>
                            </figure>

                            <header class="entry-header">
                                <h3>The latest in Medicine</h3>

                                <div class="post-metas d-flex flex-wrap align-items-center">
                                    <div class="posted-date"><label>Date: </label><a href="#">April 12, 2018</a></div>

                                    <div class="posted-by"><label>By: </label><a href="#">Dr. Jake Williams</a></div>

                                    <div class="post-comments"><a href="#">2 Comments</a></div>
                                </div>
                            </header>

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="the-news-wrap">
                            <figure class="post-thumbnail">
                                <a href="#"><img src={news_2} alt=""/></a>
                            </figure>

                            <header class="entry-header">
                                <h3>All you need to know about pills</h3>

                                <div class="post-metas d-flex flex-wrap align-items-center">
                                    <div class="posted-date"><label>Date: </label><a href="#">April 12, 2018</a></div>

                                    <div class="posted-by"><label>By: </label><a href="#">Dr. Jake Williams</a></div>

                                    <div class="post-comments"><a href="#">2 Comments</a></div>
                                </div>
                            </header>

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="the-news-wrap">
                            <figure class="post-thumbnail">
                                <a href="#"><img src={news_3} alt=""/></a>
                            </figure>

                            <header class="entry-header">
                                <h3>Marketing and Medicine</h3>

                                <div class="post-metas d-flex flex-wrap align-items-center">
                                    <div class="posted-date"><label>Date: </label><a href="#">April 12, 2018</a></div>

                                    <div class="posted-by"><label>By: </label><a href="#">Dr. Jake Williams</a></div>

                                    <div class="post-comments"><a href="#">2 Comments</a></div>
                                </div>
                            </header>

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
}
export default News