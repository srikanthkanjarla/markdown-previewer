/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const Preview = ({ markdown }) => {
  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

Preview.propTypes = {
  markdown: PropTypes.string.isRequired
};

export default Preview;
