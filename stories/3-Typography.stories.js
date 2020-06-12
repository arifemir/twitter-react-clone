import React from 'react'
import TextTitle from '../components/text-title'

export default {
  title: 'Typography'
}

export const Title = () => (
  <div>
    <TextTitle>Merhaba dunya</TextTitle>
    <TextTitle bold={false}>Merhaba dunya</TextTitle>
  </div>
)
