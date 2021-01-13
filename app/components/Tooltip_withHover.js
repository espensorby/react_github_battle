// Unused - replaced by Tooltip.js. Shows how to format Tooltip if using withHover HOC instead of Hover Wrapper.

import React from 'react';
import PropTypes from 'prop-types';
import withHover from './withHover';

const styles = {
  container: {
    display: 'flex',
    position: 'relative',
  },
  tooltip: {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    width: '140px',
    marginBottom: '5px',
    marginLeft: '-70px',
    padding: '7px',
    boxSizing: 'border-box',
    borderRadius: '3px',
    color: '#fff',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    fontSize: '14px',
    textAlign: 'center',
  }
};

function Tooltip ({ text, children, hover }) {
  return (
    <div style={styles.container}>
      {hover === true && <div style={styles.tooltip}>{text}</div>}

      {children}
    </div>
  )
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default withHover(Tooltip, 'hover');
