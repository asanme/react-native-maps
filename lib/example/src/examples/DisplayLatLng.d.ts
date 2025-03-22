import React from 'react';
declare class DisplayLatLng extends React.Component<any, any> {
    map: any;
    constructor(props: any);
    onRegionChange(region: any): void;
    jumpRandom(): void;
    animateRandom(): void;
    animateRandomCoordinate(): void;
    animateToRandomBearing(): void;
    animateToRandomViewingAngle(): void;
    getRandomFloat(min: any, max: any): any;
    randomCoordinate(): {
        latitude: any;
        longitude: any;
    };
    randomRegion(): any;
    render(): React.JSX.Element;
}
export default DisplayLatLng;
