import React from 'react';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.observer = new IntersectionObserver(([{isIntersecting}]) => {
            isIntersecting && props.handler();
        });
    }
    componentDidMount() {
        this.observer.observe(this.wrapper);
    }
    componentWillUnmount() {
        this.observer.disconnect();
    }
    render() {
        return <div ref={elt => this.wrapper = elt}></div>;
    }
}