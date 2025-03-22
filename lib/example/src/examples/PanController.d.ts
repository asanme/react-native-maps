import React from 'react';
declare class PanController extends React.Component<any, any> {
    _responder: any;
    _listener: any;
    _direction: any;
    deceleration: any;
    constructor(props: any);
    handleResponderMove(anim: any, delta: any, min: any, max: any, overshoot: any): void;
    handleResponderRelease(anim: any, min: any, max: any, velocity: any, overshoot: any, mode: any, snapSpacing: any): void;
    handleResponderGrant(anim: any, mode: any): void;
    handleMomentumScroll(anim: any, min: any, max: any, velocity: any, overshoot: any): void;
    handleSnappedScroll(anim: any, min: any, max: any, velocity: any, spacing: any): void;
    closestCenter(x: any, spacing: any): any;
    momentumCenter(x0: any, vx: any, spacing: any): any;
    velocityAtBounds(x0: any, vx: any, bounds: any): number;
    render(): React.JSX.Element;
}
export default PanController;
