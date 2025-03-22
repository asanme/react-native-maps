import React from 'react';
declare class CameraControl extends React.Component<any, any> {
    map: any;
    getCamera(): Promise<void>;
    setCamera(): Promise<void>;
    animateCamera(): Promise<void>;
    render(): React.JSX.Element;
}
export default CameraControl;
