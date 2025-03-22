import React from 'react';
declare class MassiveCustomMarkers extends React.Component<any, any> {
    constructor(props: any);
    generateMarkers(fromCoordinate: any): {
        coordinate: {
            latitude: any;
            longitude: any;
        };
        key: string;
    }[];
    onMapPress(e: any): void;
    render(): React.JSX.Element;
}
export default MassiveCustomMarkers;
