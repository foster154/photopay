import React, {Component, PropTypes} from 'react'
import Select from 'react-select'

class CustomerSelect extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    if (this.props.input.onChange) {
      // To align with how redux-form publishes its CHANGE action payload.
      // The event received is an object with 2 keys: "value" and "label"
      this.props.input.onChange(event.value)
    }
  }

  render () {
    // if editing an existing invoice, the customer object has been populated,
    // so customerId is in this.props.input.value._id
    // if input has been changed/updated, customerId is in this.props.input.value
    const value = this.props.input.value._id || this.props.input.value

    return (
      <Select
        {...this.props}
        value={value}
        onBlur={() => this.props.input.onBlur(this.props.input.value)}
        onChange={this.onChange}
        options={this.props.options} // <-- Receive options from the form
      />
    )
  }
}

CustomerSelect.propTypes = {
  input: PropTypes.object,        // from redux-form (?)
  options: PropTypes.array        // from component declaration
}

export default CustomerSelect
