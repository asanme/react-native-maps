import React from 'react';
declare class EventListener extends React.Component<any, any> {
    constructor(props: any);
    makeEvent(e: any, name: any): {
        id: number;
        name: any;
        data: any;
    };
    recordEvent(name: any): (e: any) => void;
    render(): React.JSX.Element;
}
export default EventListener;
