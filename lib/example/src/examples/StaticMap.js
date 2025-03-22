"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_maps_1 = __importStar(require("react-native-maps"));
const { width, height } = react_native_1.Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class StaticMap extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        };
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_1.ScrollView style={react_native_1.StyleSheet.absoluteFill} contentContainerStyle={styles.scrollview}>
          <react_native_1.Text>Clicking</react_native_1.Text>
          <react_native_1.Text>and</react_native_1.Text>
          <react_native_1.Text>dragging</react_native_1.Text>
          <react_native_1.Text>the</react_native_1.Text>
          <react_native_1.Text>map</react_native_1.Text>
          <react_native_1.Text>will</react_native_1.Text>
          <react_native_1.Text>cause</react_native_1.Text>
          <react_native_1.Text>the</react_native_1.Text>
          <react_native_maps_1.default provider={this.props.provider} style={styles.map} scrollEnabled={false} zoomEnabled={false} pitchEnabled={false} rotateEnabled={false} initialRegion={this.state.region}>
            <react_native_maps_1.Marker title="This is a title" description="This is a description" coordinate={this.state.region}/>
          </react_native_maps_1.default>
          <react_native_1.Text>parent</react_native_1.Text>
          <react_native_1.Text>ScrollView</react_native_1.Text>
          <react_native_1.Text>to</react_native_1.Text>
          <react_native_1.Text>scroll.</react_native_1.Text>
          <react_native_1.Text>When</react_native_1.Text>
          <react_native_1.Text>using</react_native_1.Text>
          <react_native_1.Text>a Google</react_native_1.Text>
          <react_native_1.Text>Map</react_native_1.Text>
          <react_native_1.Text>this only</react_native_1.Text>
          <react_native_1.Text>works</react_native_1.Text>
          <react_native_1.Text>if you</react_native_1.Text>
          <react_native_1.Text>disable:</react_native_1.Text>
          <react_native_1.Text>scroll,</react_native_1.Text>
          <react_native_1.Text>zoom,</react_native_1.Text>
          <react_native_1.Text>pitch,</react_native_1.Text>
          <react_native_1.Text>rotate.</react_native_1.Text>
          <react_native_1.Text>...</react_native_1.Text>
          <react_native_1.Text>It</react_native_1.Text>
          <react_native_1.Text>would</react_native_1.Text>
          <react_native_1.Text>be</react_native_1.Text>
          <react_native_1.Text>nice</react_native_1.Text>
          <react_native_1.Text>to</react_native_1.Text>
          <react_native_1.Text>have</react_native_1.Text>
          <react_native_1.Text>an</react_native_1.Text>
          <react_native_1.Text>option</react_native_1.Text>
          <react_native_1.Text>that</react_native_1.Text>
          <react_native_1.Text>still</react_native_1.Text>
          <react_native_1.Text>allows</react_native_1.Text>
          <react_native_1.Text>zooming.</react_native_1.Text>
        </react_native_1.ScrollView>
      </react_native_1.View>);
    }
}
const styles = react_native_1.StyleSheet.create({
    container: {
        ...react_native_1.StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    scrollview: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    map: {
        width: 250,
        height: 250,
    },
});
exports.default = StaticMap;
