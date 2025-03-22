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
const SPACE = 0.01;
function createMarker(modifier = 1) {
    return {
        latitude: LATITUDE - SPACE * modifier,
        longitude: LONGITUDE - SPACE * modifier,
    };
}
const MARKERS = [
    createMarker(),
    createMarker(2),
    createMarker(3),
    createMarker(4),
];
const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };
class FitToCoordinates extends react_1.default.Component {
    map;
    async logFrames() {
        const visMarkersFrames = await this.map.getMarkersFrames(true);
        console.log('Visible markers frames:', visMarkersFrames);
        const allMarkersFrames = await this.map.getMarkersFrames();
        console.log('All markers frames:', allMarkersFrames);
    }
    fitPadding() {
        this.map.fitToCoordinates([MARKERS[2], MARKERS[3]], {
            edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
            animated: true,
        });
    }
    fitBottomTwoMarkers() {
        this.map.fitToCoordinates([MARKERS[2], MARKERS[3]], {
            edgePadding: DEFAULT_PADDING,
            animated: true,
        });
    }
    fitAllMarkers() {
        this.map.fitToCoordinates(MARKERS, {
            edgePadding: DEFAULT_PADDING,
            animated: true,
        });
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default ref={ref => {
                this.map = ref;
            }} style={styles.map} initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}>
          {MARKERS.map((marker, i) => (<react_native_maps_1.Marker key={i} identifier={`id${i}`} coordinate={marker}/>))}
        </react_native_maps_1.default>
        <react_native_1.View style={styles.buttonContainer}>
          <react_native_1.TouchableOpacity onPress={() => this.fitPadding()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text>Fit Bottom Two Markers with Padding</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.fitBottomTwoMarkers()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text>Fit Bottom Two Markers</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.fitAllMarkers()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text>Fit All Markers</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.logFrames()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text>Log markers frames</react_native_1.Text>
          </react_native_1.TouchableOpacity>
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
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    button: {
        marginTop: 12,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
exports.default = FitToCoordinates;
