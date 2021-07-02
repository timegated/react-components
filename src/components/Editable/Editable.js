import React, { useEffect, useRef } from 'react';

/**
 * Renders children that have the contentEditable attribute set to true if the user is an admin
 *
 * @param {object} props
 *
 * @returns {React.Component}
 */
const Editable = (props) => {
  const { onChange, children } = props;
  const element = useRef();
  let elements = React.Children.toArray(children);

  if (elements.length > 1) {
    throw Error('More than one child rendered');
  }

  useEffect(() => {
    const value = element.current?.value || element.current?.innerText;
    onChange(value);
  }, []);

  elements = React.cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
  });

  return elements;
};

export default Editable;
