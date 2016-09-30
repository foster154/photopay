import React from 'react';
import Universals from '../../universal_styles';

const LineItem = (props) => {
  
  // styles
  const s = {
    label: {
      color: Universals.dkGrey,
      fontWeight: '600',
    },
    textInput: {
      "width": "100%",
      "padding": "8px",
      "borderRadius": "5px",
      "border": "1px solid #ccc",
      "fontSize": "18px",
      marginBottom: "10px",
    },
    itemField: {
      width: '48%',
      float: 'left',
      marginRight: '2%',
      '@media (max-width: 600px)': {
        width: '100%',
      }
    },
    amountField: {
      float: 'right',
      '@media (max-width: 600px)': {
        width: '100%',
      }
    }
  }
  
  return (
    <div className="clearfix">
      <fieldset style={s.itemField}>
        <label style={s.label}>Item:</label>
        <input style={s.textInput} {...item} />
      </fieldset>
      <fieldset style={s.amountField}>
        <label style={s.label}>Amount:</label>
        <input style={s.textInput} {...amount} />
      </fieldset>
    </div>
  );
}

export default LineItem;