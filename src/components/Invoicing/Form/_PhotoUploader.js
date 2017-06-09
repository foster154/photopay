import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'

class PhotoUploader extends Component {
  handleFinishedUpload (info) {
    console.log('File uploaded with filename', info.filename)
    console.log('Access it on s3 at', info.fileUrl)
  }

  render () {
    const invoiceId = this.props.invoice.id
    const uploadOptions = {
      server: 'http://localhost:3000',
      s3Url: 'https://photoinvoice-dev.s3.amazonaws.com/',
      signingUrlQueryParams: {
        directory: invoiceId
      },
      signingUrl: '/s3/sign'
    }

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        s3Url={'https://photoinvoice-dev.s3.amazonaws.com'}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    invoice: state.invoicing.invoice
  }
}

PhotoUploader.propTypes = {
  invoice: PropTypes.object
}

export default connect(mapStateToProps)(PhotoUploader)
