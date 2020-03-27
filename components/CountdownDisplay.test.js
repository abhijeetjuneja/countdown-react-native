import React from 'react';
import CountdownDisplay from './CountdownDisplay';

import renderer from 'react-test-renderer';

test('countdowndisplay renders correctly with countdown-0 start-false speed-1 pause-false', () => {
    const tree = renderer.create(<CountdownDisplay countdown={0} start={false} speed={1} pause={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdowndisplay renders correctly with countdown-1 start-false speed-1 pause-false', () => {
    const tree = renderer.create(<CountdownDisplay countdown={1} start={false} speed={1} pause={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdowndisplay renders correctly with countdown-1 start-true speed-1 pause-false', () => {
    const tree = renderer.create(<CountdownDisplay countdown={1} start={true} speed={1} pause={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdowndisplay renders correctly with countdown-1 start-true speed-1 pause-true', () => {
    const tree = renderer.create(<CountdownDisplay countdown={1} start={true} speed={1} pause={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdowndisplay renders correctly with countdown-1 start-true speed-1.5 pause-false', () => {
    const tree = renderer.create(<CountdownDisplay countdown={1} start={true} speed={1.5} pause={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdowndisplay renders correctly with countdown-1 start-true speed-2 pause-false', () => {
    const tree = renderer.create(<CountdownDisplay countdown={1} start={true} speed={2} pause={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});