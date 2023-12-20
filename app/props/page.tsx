import React from 'react'
import Button from '../(components)/button/Button'
import Card from '../(components)/card/Card';
import Tag from '../(components)/tag/Tag';
import Card2 from '../(components)/card2/card2';

const Props = () => {
  return (
    <>
    
    <Button title="submit"/>
    <Button title="search"/>
    <Button title="Find"/>
    <Button/>
    <Button title='copy'/>
    <Button title='paste'/>
    <div className='flex-container'>
    <Card/>
    
    <div>
      <Card /><Tag title='HoJa'/>
    </div>
    <Card/><br />
    <Card2 Name='Adnan' Desig='SI'/>
    <Card2 Name='Ghani' Desig='JCO'/>
    </div>
    </>
  )
}

export default Props