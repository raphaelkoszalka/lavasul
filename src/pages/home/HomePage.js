import React, { Component } from 'react';
import GalleryComponent from "../../components/gallery/GalleryComponent";

class HomePage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <section>
          <GalleryComponent />
          <h2>home-page</h2>
        </section>

    )
  }
}

export default HomePage;