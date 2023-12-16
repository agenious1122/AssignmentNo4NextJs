import React from 'react'
import Button from '../(components)/button/Button'
import Card from '../(components)/card/Card';
import Tag from '../(components)/tag/Tag';

const Props = () => {
  return (
    <>
    
    <Button title="submit"/>
    <Button title="search"/>
    <Button title="Find"/>
    <div className='flex-container'>
    <Card/>
    
    <div>
      <Card /><Tag title='HoJa'/>
    </div>
    <Card/>
    
    </div>
    </>
  )
}

export default Props