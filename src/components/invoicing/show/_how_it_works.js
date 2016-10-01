import React from 'react';
import Universals from '../../universal_styles';

const HowItWorks = (props) => {
  
  // styles
  const s = {
    howItWorks: {
      borderTop: '1px solid #9a9a9a',
      //borderBottom: '1px solid #9a9a9a',
      backgroundColor: '#FAF8F8',
      marginTop: '45px',
      padding: '20px',
      position: 'relative',
    },
    sectionTitle: {
      color: Universals.accentColor,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: '14px',
      fontWeight: '700'
    },
    howItWorksText: {
      marginTop: '10px',
      fontWeight: '300',
      fontSize: '17px',
      textAlign: 'center',
    },
    arrowIcon: {
      height: '80px',
      position: 'absolute',
      top: '-50px',
      left: '43%',
    }
  }
  
  return (
    <div>
      <div style={s.howItWorks}>
        <img src="/img/arrow.png" style={s.arrowIcon} />
        <div style={s.howItWorksText}>You'll receive access to the entire photo collection <br />immediately after payment has been made.</div>
      </div>
    </div>
  );
}

export default HowItWorks;