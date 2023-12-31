import React from "react";
import PropTypes from 'prop-types'; 
import classNames from 'classnames';
import "./styles.css" 

export const Button = ({
    children, onClick, className, disabled, fullWidth, ...attrs
}) => {

    const onClickAction = e =>{
        if (disabled){
            e.preventDefault();
        } else{
          return onClick(e);
        }
    }

    const classes = classNames(
        'btn',
        {fullWidth}

    );

const Tag = attrs.href ? 'a' : 'button';

  return(
    <Tag
      {...attrs}
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      >{children}</Tag>
  );
};

Button.propTypes ={
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool

};

Button.defaultProps ={
    children: 'Войти',
    onClick: () =>{},
    className: '',
    disabled: false,


};
