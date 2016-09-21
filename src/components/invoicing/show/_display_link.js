import React from 'react';
import Universals from '../../universal_styles';
import { Link } from 'react-router';

const DisplayLink = (props) => {
  
  // styles
  const s = {
    howItWorks: {
      borderTop: '1px solid #9a9a9a',
      //borderBottom: '1px solid #9a9a9a',
      backgroundColor: '#FAF8F8',
      marginTop: '45px',
      padding: '20px'
    },
    sectionTitle: {
      color: Universals.accentColor,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: '14px',
      fontWeight: '700'
    },
    sectionText: {
      marginTop: '20px',
      fontWeight: '300',
      fontSize: '17px',
      textAlign: 'center'
    },
    link: {
      color: Universals.accentColor
    }
  }
  
  return (
    <div>
      <div style={s.howItWorks}>
        <div style={s.sectionTitle}>Thank You!</div>
        <div style={s.sectionText}>
          Your photos can be accessed via <a style={s.link} href={props.invoice.shareLink}>this link</a>.
        </div>
      </div>
    </div>
  );
}

export default DisplayLink;