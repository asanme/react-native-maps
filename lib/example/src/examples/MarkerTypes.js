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
const flag_blue_png_1 = __importDefault(require("./assets/flag-blue.png"));
const flag_pink_png_1 = __importDefault(require("./assets/flag-pink.png"));
const { width, height } = react_native_1.Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
class MarkerTypes extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            marker1: true,
            marker2: false,
        };
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} style={styles.map} initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}>
          <react_native_maps_1.Marker onPress={() => this.setState({ marker1: !this.state.marker1 })} coordinate={{
                latitude: LATITUDE + SPACE,
                longitude: LONGITUDE + SPACE,
            }} centerOffset={{ x: -18, y: -60 }} anchor={{ x: 0.69, y: 1 }} image={this.state.marker1 ? flag_blue_png_1.default : flag_pink_png_1.default}>
            <react_native_1.Text style={styles.marker}>X</react_native_1.Text>
          </react_native_maps_1.Marker>
          <react_native_maps_1.Marker onPress={() => this.setState({ marker2: !this.state.marker2 })} coordinate={{
                latitude: LATITUDE - SPACE,
                longitude: LONGITUDE - SPACE,
            }} centerOffset={{ x: -42, y: -60 }} anchor={{ x: 0.84, y: 1 }} image={this.state.marker2 ? flag_blue_png_1.default : flag_pink_png_1.default}/>
          <react_native_maps_1.Marker onPress={() => this.setState({ marker2: !this.state.marker2 })} coordinate={{
                latitude: LATITUDE + SPACE,
                longitude: LONGITUDE - SPACE,
            }} centerOffset={{ x: -42, y: -60 }} anchor={{ x: 0.84, y: 1 }} opacity={0.6} image={this.state.marker2 ? flag_blue_png_1.default : flag_pink_png_1.default}/>
        </react_native_maps_1.default>
      </react_native_1.View>);
    }
}
const styles = react_native_1.StyleSheet.create({
    container: {
        ...react_native_1.StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...react_native_1.StyleSheet.absoluteFillObject,
    },
    marker: {
        marginLeft: 46,
        marginTop: 33,
        fontWeight: 'bold',
    },
});
exports.default = MarkerTypes;
