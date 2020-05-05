import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image, className, ...props } = imageInfo;
  const classes = `protected-image ${className ? className : ''}`;
  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        fluid={image.childImageSharp.fluid}
        alt={alt}
        draggable={false}
        className={classes}
        {...props}
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <Img
        fluid={childImageSharp.fluid}
        alt={alt} draggable={false}
        className={classes}
        {...props}
      />
    )
  }

  if (!!image && typeof image === 'string') {
    return (
      <img
        style={props.imgStyle}
        src={image}
        alt={alt}
        onClick={e => e.preventDefault()}
        onContextMenu={e => e.preventDefault()}
      />
    )
  }

  return null
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
