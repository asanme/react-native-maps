import React from 'react';
import { Animated } from 'react-native';
declare class LegalLabel extends React.Component<any, any> {
    state: {
        _legalLabelPositionY: Animated.Value;
        legalLabelPositionY: number;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onPressAnimate: () => void;
    render(): React.JSX.Element;
}
export default LegalLabel;
