import React from 'react';
import { Link } from 'react-router';
require('../../../styles/invoicing/show.scss');

const DisplayLink = (props) => {
  
  return (
    <div>
      <div className="display-link-wrapper">
        <div className="title">Thank You!</div>
        <div className="text">
          Your photos can be accessed here:<br />
          <a href={props.invoice.shareUrl}>{props.invoice.shareUrl}</a>
        </div>
      </div>
    </div>
  );
}

export default DisplayLink;