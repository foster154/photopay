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
      padding: '20px'
    },
    sectionTitle: {
      color: Universals.accentColor,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: '14px',
      fontWeight: '700'
    },
    contentWrapper: {

    },
    icon: {
      float: 'left',
      width: '15%',
      textAlign: 'center',
      height: '30',
      fontSize: '34'
    },
    howItWorksText: {
      marginTop: '10px',
      fontWeight: '300',
      fontSize: '17px'
    }
  }
  
  return (
    <div>
      <div style={s.howItWorks}>
        <div style={s.sectionTitle}>How It Works</div>
        <div style={s.contentWrapper}>
          <div style={s.icon}><i className="fa fa-question-circle-o" aria-hidden="true"></i></div>
          <div style={s.howItWorksText}>As soon as payment has been made, the entire 
            photo collection will be immediately made available to you.</div>
        </div>

      </div>
    </div>
  );
}

export default HowItWorks;