import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions ({options, onLeaveFeedback}) {
  const classes = [s.button];
  return (
    <>
      {Object.keys(options).map(option => (
    <button 
    key={option}
    onClick={() => onLeaveFeedback(option)}
    type="button"
    className={
      classes.concat(
      (option === 'good' && s.button_good) ||
      (option === 'bad' && s.button_bad)
      ).join(' ')}
    >
    {option}
    </button>
  ))}
  </>
)}
FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
}