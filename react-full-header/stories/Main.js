import React from "react";
import FullHeader from "../src/Main"; // This is our component
import { storiesOf } from "@storybook/react";

storiesOf("Component", module)
    .add("with title", () => {
        return <FullHeader title={"TDD"} />;
    })
    .add("with title and subTitle", () => {
        return <FullHeader title={"TDD"} subTitle="Curso de JS com TDD na prática" />;
    })
    .add("with title, subTitle, bgColor", () => {
        return <FullHeader
            title={"TDD"}
            subTitle="Curso de JS com TDD na prática"
            bgColor="#3299BB"
        />;
    })
    .add("with title, subTitle, bgColor, textColor", () => {
        return <FullHeader
            title={"TDD"}
            subTitle="Curso de JS com TDD na prática"
            bgColor="#3299BB"
            textColor='#ff9900'
        />;
    })
    .add("with title, subTitle, bgColor, textColor, font", () => {
        return <FullHeader
            title={"TDD"}
            subTitle="Curso de JS com TDD na prática"
            bgColor="#3299BB"
            textColor='#ff9900'
            font='cursive'
        />;
    })
    .add("with title, subTitle, bgImg", () => {
        return <FullHeader
            title={"TDD"}
            subTitle="Curso de JS com TDD na prática"
            bgImg='https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg'
        />;
    })
    .add("with title, subTitle, bgColor,textColor, video", () => {
        return <FullHeader
            title={"TDD"}
            subTitle="Curso de JS com TDD na prática"
            bgColor="#3299BB"
            textColor='#ff9900'
            video='https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/apple-motion-5-template-vintage-text_4krp_ozr__p__4947d95929642418481fab06391aadac__P360.mp4'
        />;
    })
