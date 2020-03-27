import React from 'react';
import CountdownSpeed from './CountdownSpeed';

import renderer from 'react-test-renderer';

test('countdownspeed renders correctly with start-false speed-1 pause-false', () => {
    const tree = renderer.create(<CountdownSpeed start={false} speed={1} pause={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdownspeed renders correctly with start-true speed-1 pause-false', () => {
    const tree = renderer.create(<CountdownSpeed start={true} speed={1} pause={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdownspeed renders correctly with start-true speed-1 pause-true', () => {
    const tree = renderer.create(<CountdownSpeed start={true} speed={1} pause={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdownspeed renders correctly with start-true speed-1.5 pause-true', () => {
    const tree = renderer.create(<CountdownSpeed start={true} speed={1.5} pause={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdownspeed renders correctly with start-true speed-2 pause-true', () => {
    const tree = renderer.create(<CountdownSpeed start={true} speed={2} pause={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('countdownspeed renders correctly with start-true speed-1.5 pause-false', () => {
    const tree = renderer.create(<CountdownSpeed start={true} speed={1.5} pause={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdownspeed renders correctly with start-true speed-2 pause-false', () => {
    const tree = renderer.create(<CountdownSpeed start={true} speed={2} pause={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});