import React from 'react';
import Twitter from '../icons/Twitter';
import Facebook from '../icons/Facebook';
import LinkedIn from '../icons/LinkedIn';

const SocialIcons = () => (
  <div>
    <a href="#">
      <Twitter
        width="50px"
        height="50px"
        style={{ margin: '0 20px' }}
        // fill="white"
      />
    </a>
    <a href="#">
      <Facebook
        width="50px"
        height="50px"
        style={{ margin: '0 20px' }}
        // fill="white"
      />
    </a>
    <a href="#">
      <LinkedIn
        width="50px"
        height="50px"
        style={{ margin: '0 20px' }}
        // fill="white"
      />
    </a>
  </div>
);

export default SocialIcons;
