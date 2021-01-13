import React from 'react';
import PropTypes from 'prop-types';
import Hover from './Hover';

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

export default function Tooltip ({ text, children }) {
  return (
    <Hover>
      {(hovering) => (
        <div style={styles.container}>
          {hovering === true && <div style={styles.tooltip}>{text}</div>}

          {children}
        </div>
      )}
    </Hover>
  )
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};
