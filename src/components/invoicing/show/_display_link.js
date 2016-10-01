import React from 'react';
import Universals from '../../universal_styles';
import { Link } from 'react-router';

const DisplayLink = (props) => {
  
  // styles
  const s = {
    howItWorks: {
      borderTop: '1px solid #9a9a9a',
      backgroundColor: Universals.accentColor,
      marginTop: '45px',
      padding: '20px'
    },
    sectionTitle: {
      color: 'white',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: '14px',
      fontWeight: '700'
    },
    sectionText: {
      marginTop: '20px',
      fontWeight: '300',
      fontSize: '17px',
      textAlign: 'center',
      color: 'white',
    },
    link: {
      color: 'white',
    }
  }
  
  return (
    <div>
      <div style={s.howItWorks}>
        <div style={s.sectionTitle}>Thank You!</div>
        <div style={s.sectionText}>
          <a style={s.link} href={props.invoice.shareLink}>Click here to access the photos</a>.
        </div>
      </div>
    </div>
  );
}

export default DisplayLink;