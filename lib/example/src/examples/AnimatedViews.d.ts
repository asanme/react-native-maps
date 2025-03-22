import React from 'react';
declare class AnimatedViews extends React.Component<any, any> {
    constructor(props: any);
    componentDidMount(): void;
    onStartShouldSetPanResponder: (e: any) => boolean;
    onMoveShouldSetPanResponder: (e: any) => boolean;
    onPanXChange: ({ value }: any) => void;
    onPanYChange: ({ value }: any) => void;
    onRegionChange(): void;
    render(): React.JSX.Element;
}
export default AnimatedViews;
