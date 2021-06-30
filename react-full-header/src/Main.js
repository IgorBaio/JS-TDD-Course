import React from "react";
import PropTypes from "prop-types";
import { headerStyle, containerStyle, titleStyle, subtitleStyle, videoStyle } from './Styles';

const FullHeader = ({ title, subTitle, bgColor, textColor, font, bgImg, video }) => {
    
    const headerStyleCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        color: textColor,
        fontFamily: font,
    };
    return (
        <header style={headerStyleCombined}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subTitle && <h2 style={subtitleStyle}>{subTitle}</h2>}
            </div>
            {video && <video style={videoStyle} autoPlay muted loop src={video} />}
        </header>
    );
};
FullHeader.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImg: PropTypes.string,
    video: PropTypes.string,
};

FullHeader.defaultProps = {
    bgColor: "#ccc",
    textColor: "#fff",
    font:'sans-serif',
    bgImg:''
};
export default FullHeader;
