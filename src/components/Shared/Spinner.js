import React from 'react'
import styled from 'styled-components'

const Spinner = () => (
  <Wrapper>
    <Icon className='fa fa-spin fa-spinner' />
  </Wrapper>
)

export default Spinner

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 180px;
`

const Icon = styled.span`
  color: white;
  font-size: 48px !important;
`
