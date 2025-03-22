import React, { Component } from 'react';
export default class NavigationMap extends Component<any, any> {
    map: any;
    constructor(props: any);
    changePosition(latOffset: number, lonOffset: number): void;
    getRotation(prevPos: any, curPos: any): number;
    updateMap(): void;
    render(): React.JSX.Element;
}
