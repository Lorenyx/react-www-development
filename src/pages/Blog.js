import React from 'react';

class Blog extends React.Component {
  render() {
  return (
    <div>
      {/* Start Content */}
        <h1 className="major" id="blog">Medium Publication</h1>
        <p>Our <a href="https://medium.com/usefulcoin" target="_medium">Medium Publication</a> reflects our views on the industry:</p>
        <p>Please follow the publication if you subscribe to our views.</p>
      {/* End Content */}
    </div>
  );
  }
}

export default Blog;
