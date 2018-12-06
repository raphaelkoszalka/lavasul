import './BlogComponent';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";

class BlogComponent extends Component {

    request = new HttpRequest();

    constructor(props) {
        super(props);
        this.state = { posts: props['blog'] };
    }

    render() {
        const { posts } = this.state;

        const postPanels = posts.map(function(post) {

            const coverStyle = {
                width: '100%',
                height: '175px',
                backgroundImage: 'url("' + post['cover'] + '")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            };

            return (
                <div className="col-md-4" key={post['id']}>
                    <div className="panel">
                        <div className="panel-body">
                            <h4>{ post['title'].substring(0, 30) }...</h4>
                            <hr/>
                            <div style={coverStyle} />
                            <hr/>
                            <p>{ post['full_content'].substring(0, 300) }...</p>
                            <hr/>
                            <div className="text-center">
                                <button className="btn btn-info">Leia Mais</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });


        return (
            <section id="blocSection">
                <div className="container">
                    <div className="col-md-12">
                        <h1 className="text-center">Últimas do Blog</h1>
                        <hr/>
                    </div>
                    <div className="row">
                        {postPanels}
                    </div>
                </div>
            </section>
        )
    }
}

export default BlogComponent;