import React from 'react';
import CountdownInput from './CountdownInput';

import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native'

//Snapshot tests
test('countdowninput renders correctly with countdown-0 and start-false', () => {
    const tree = renderer.create(<CountdownInput countdown={0} start={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdowninput renders correctly with countdown-1 and start-false', () => {
    const tree = renderer.create(<CountdownInput countdown={0} start={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('countdowninput renders correctly with countdown-1 and start-true', () => {
    const tree = renderer.create(<CountdownInput countdown={0} start={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});