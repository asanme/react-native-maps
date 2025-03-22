"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_maps_1 = require("react-native-maps");
class XMarksTheSpot extends react_1.default.Component {
    render() {
        return (<react_native_1.View>
        <react_native_maps_1.Polygon coordinates={this.props.coordinates} strokeColor="rgba(0, 0, 0, 1)" strokeWidth={3}/>
        <react_native_maps_1.Polyline coordinates={[this.props.coordinates[0], this.props.coordinates[2]]}/>
        <react_native_maps_1.Polyline coordinates={[this.props.coordinates[1], this.props.coordinates[3]]}/>
        <react_native_maps_1.Marker coordinate={this.props.center}/>
      </react_native_1.View>);
    }
}
exports.default = XMarksTheSpot;
