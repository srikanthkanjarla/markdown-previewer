import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Editor = props => {
  const { markdown, handleChange, handleClick } = props;

  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <Button name="Clear" handleClick={handleClick} className="clr-btn" />
      <textarea className="editor" onChange={handleChange} value={markdown} />
    </div>
  );
};

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Editor;
