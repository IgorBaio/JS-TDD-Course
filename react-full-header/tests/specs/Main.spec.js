import React from "react";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import { shallow } from "enzyme";
import FullHeader from "../../src/Main";

chai.use(chaiEnzyme())

describe("<FullHeader />", () => {
    it("should have header tag when mount", () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find("header")).to.have.length(1);
    });
    context("title", () => {
        it("should have h1 tag when title passed", () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find("h1")).to.have.length(1);
        });
        it("should not have h1 tag when title not passed", () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find("h1")).to.have.length(0);
        });
        it("should have h1 tag with the title passed", () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find("h1").props().children).to.be.equal("TDD");
        });
    });

    context("title and subTitle", () => {
        it("should have h2 tag when subTitle passed", () => {
            const wrapper = shallow(
                <FullHeader
                    title="TDD"
                    subTitle="Curso de JS com TDD na prática"
                />
            );
            expect(wrapper.find("h2")).to.have.length(1);
        });
        it("should not have h2 tag when subTitle not passed", () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find("h2")).to.have.length(0);
        });
        it("should have h1 tag with the subTitle passed", () => {
            const wrapper = shallow(
                <FullHeader
                    title="TDD"
                    subTitle="Curso de JS com TDD na prática"
                />
            );
            expect(wrapper.find("h2").props().children).to.be.equal(
                "Curso de JS com TDD na prática"
            );
        });
    });
    context("bgColor", () => {
        it("should have background-color equal #ccc when none is passed", () => {
            const wrapper = shallow(
                <FullHeader
                    title="TDD"
                    subTitle="Curso de JS com TDD na prática"
                />
            );
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });
        it("should have background-color equal #000 when is passed", () => {
            const wrapper = shallow(
                <FullHeader
                    title="TDD"
                    subTitle="Curso de JS com TDD na prática"
                    bgColor='#000'
                />
            );
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
       
    });
    context("textColor", () => {
        it("should have color equal #fff when none is passed", () => {
            const wrapper = shallow(
                <FullHeader
                    title="TDD"
                    subTitle="Curso de JS com TDD na prática"
                />
            );
            expect(wrapper).to.have.style('color').equal('#fff');
        });
        it("should have color equal #ff0000 when is passed", () => {
            const wrapper = shallow(
                <FullHeader
                    title="TDD"
                    subTitle="Curso de JS com TDD na prática"
                    bgColor='#000'
                    textColor='#ff0000'
                />
            );
            expect(wrapper).to.have.style('color').equal('#ff0000');
        });
       
    });
    context("font", () => {
        it("should have font equal sans-serif when none is passed", () => {
            const wrapper = shallow(
                <FullHeader
                    title="TDD"
                    subTitle="Curso de JS com TDD na prática"
                />
            );
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });
        it("should have color equal cursive when is passed", () => {
            const wrapper = shallow(
                <FullHeader
                    title="TDD"
                    subTitle="Curso de JS com TDD na prática"
                    bgColor='#000'
                    textColor='#ff0000'
                    font='cursive'
                />
            );
            expect(wrapper).to.have.style('font-family').equal('cursive');
        });
       
    });
    context("BgImg", () => {
        it("should have background-image empty when none is passed", () => {
            const wrapper = shallow(
                <FullHeader
                    title="TDD"
                    subTitle="Curso de JS com TDD na prática"
                />
            );
            expect(wrapper).to.have.style('background-image').equal('url()');
        });
        it("should have background-image equal bg.jpg when passed", () => {
            const wrapper = shallow(
                <FullHeader
                    title="TDD"
                    subTitle="Curso de JS com TDD na prática"
                    bgColor='#000'
                    textColor='#ff0000'
                    font='cursive'
                    bgImg={'bg.jpg'}
                />
            );
            expect(wrapper).to.have.style('background-image').equal('url(bg.jpg)');
        });
       
    });

    context("video", () => {
        it("should have video tag when video is passed", () => {
            const wrapper = shallow(<FullHeader video='myVideo.mp4'/>);
            expect(wrapper.find("video")).to.have.length(1);
        });
        it("should not have video tag when video not passed", () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find("video")).to.have.length(0);
        });
        it("should have video tag with the video passed", () => {
            const wrapper = shallow(<FullHeader video='myVideo.mp4' />);
            expect(wrapper.find("video").props().src).to.be.equal("myVideo.mp4");
        });
    });
});
