import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>Linkedin News</h2>
            <InfoIcon />
        </div>
        {newsArticle('Tesla hits new highs', 'Cars and auto - 300 readers')}
        {newsArticle('Coronavirus: UK updates', 'Top news - 886 readers')}
        {newsArticle('Tesla hits new highs', 'Cars and auto - 300 readers')}
        {newsArticle('Bitcoin breaks 22k', 'Crypto - 8000 readers')}
        {newsArticle('Is redux too good?', 'Code - 123 readers')}
        {newsArticle('Bitcoin breaks 22k', 'Crypto - 8000 readers')}
        {newsArticle('Coronavirus: UK updates', 'Top news - 886 readers')}
        {newsArticle('Coronavirus: UK updates', 'Top news - 886 readers')}
        {newsArticle('Is redux too good?', 'Code - 123 readers')}
        {newsArticle('Is redux too good?', 'Code - 123 readers')}
    </div>
    
  );
}

export default Widgets;
