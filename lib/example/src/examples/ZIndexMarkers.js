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
const LATITUDE = 37.733858;
const LONGITUDE = -122.446549;
const MARKERS_LATITUDE_DELTA = 0.03;
const MARKERS_LONGITUDE_DELTA = MARKERS_LATITUDE_DELTA * ASPECT_RATIO;
const MAP_LATITUDE_DELTA = 0.3;
const MAP_LONGITUDE_DELTA = MAP_LATITUDE_DELTA * ASPECT_RATIO;
const NUM_MARKERS = 100;
const PERCENT_SPECIAL_MARKERS = 0.1;
class ZIndexMarkers extends react_1.default.Component {
    map;
    constructor(props) {
        super(props);
        const markerInfo = [];
        for (let i = 1; i < NUM_MARKERS; i++) {
            markerInfo.push({
                latitude: (Math.random() * 2 - 1) * MARKERS_LATITUDE_DELTA + LATITUDE,
                longitude: (Math.random() * 2 - 1) * MARKERS_LONGITUDE_DELTA + LONGITUDE,
                isSpecial: Math.random() < PERCENT_SPECIAL_MARKERS,
                id: i,
            });
        }
        this.state = {
            markerInfo,
        };
    }
    render() {
        const markers = this.state.markerInfo.map((markerInfo) => (<react_native_maps_1.Marker coordinate={markerInfo} key={markerInfo.id} pinColor={markerInfo.isSpecial ? '#c5a620' : undefined} style={markerInfo.isSpecial ? styles.specialMarker : null}/>));
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} ref={ref => {
                this.map = ref;
            }} style={styles.map} initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: MAP_LATITUDE_DELTA,
                longitudeDelta: MAP_LONGITUDE_DELTA,
            }}>
          {markers}
        </react_native_maps_1.default>
        <react_native_1.View style={styles.textContainer}>
          <react_native_1.Text>
            The yellow markers have a higher zIndex and appear above other
            markers.
          </react_native_1.Text>
        </react_native_1.View>
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
    textContainer: {
        backgroundColor: 'white',
        borderRadius: 4,
        marginHorizontal: 40,
        marginVertical: 20,
        padding: 10,
    },
    specialMarker: {
        zIndex: 1,
    },
});
exports.default = ZIndexMarkers;
