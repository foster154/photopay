import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import Radium from 'radium';
import Universals from '../universal_styles';

@Radium
class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    this.props.signinUser({ email, password });
  }
  
  renderAlert() {
    
    const s = {
      msgRed: Universals.msgRed
    }
    
    if (this.props.errorMessage) {
      return (
        <div style={s.msgRed}>
          {this.props.errorMessage}
        </div>
      );
    }
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    const s = {
      background: {
        "top": "80px",
        "left": "0",
        "right": "0",
        "bottom": "0",
        "position": "absolute",
        "width": "auto",
        "height": "auto",
        background: 'url("/img/camera.jpeg") no-repeat center center fixed',
      },
      overlay: {
        "top": "0",
        "left": "0",
        "right": "0",
        "bottom": "0",
        "position": "absolute",
        "width": "auto",
        "height": "auto",
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingTop: '100px',
        '@media (max-width: 460px)': {
          paddingTop: '10px',
        }
      },
      form: {
        width: '600',
        maxWidth: '96%',
        backgroundColor: Universals.whiteBg,
        margin: '0 auto',
        padding: '20px 50px 50px',
        borderRadius: '5px',
      },
      signinText: {
        textAlign: 'center',
        marginBottom: '30px',
      },
      input: {
        "width": "100%",
        "padding": "8px",
        "borderRadius": "5px",
        "border": "none",
        "fontSize": "18px",
        marginBottom: "10px",
      },
      button: {
        "float": "right",
        "marginTop": "10px",
        "border": "none",
        "backgroundColor": Universals.accentColor,
        "borderRadius": "5px",
        "padding": "8px 40px",
        "color": "white",
      }
    }
    
    return (
      <div style={s.background}>
        <div style={s.overlay}>
          <form 
            style={s.form}
            onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <h2 style={s.signinText}>Sign In</h2>
            {this.renderAlert()}
            <fieldset>
              <label htmlFor="email">Email:</label>
              <Field style={s.input} name="email" component="input" type="input" />
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password:</label>
              <Field style={s.input} name="password" component="input" type="password" />
            </fieldset>
            <button style={s.button} type="submit">Sign In</button>
            <div style={{clear: "both"}}></div>
          </form>
          
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
}, mapStateToProps, actions)(Signin);