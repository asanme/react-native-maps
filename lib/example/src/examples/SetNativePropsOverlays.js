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
class SetNativePropsOverlays extends react_1.default.Component {
    circle;
    polygon;
    polyline;
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            circle: {
                center: {
                    latitude: LATITUDE + SPACE,
                    longitude: LONGITUDE + SPACE,
                },
                radius: 700,
            },
            polygon: [
                {
                    latitude: LATITUDE + SPACE,
                    longitude: LONGITUDE + SPACE,
                },
                {
                    latitude: LATITUDE - SPACE,
                    longitude: LONGITUDE - SPACE,
                },
                {
                    latitude: LATITUDE - SPACE,
                    longitude: LONGITUDE + SPACE,
                },
            ],
            polyline: [
                {
                    latitude: LATITUDE + SPACE,
                    longitude: LONGITUDE - SPACE,
                },
                {
                    latitude: LATITUDE - 2 * SPACE,
                    longitude: LONGITUDE + 2 * SPACE,
                },
                {
                    latitude: LATITUDE - SPACE,
                    longitude: LONGITUDE - SPACE,
                },
                {
                    latitude: LATITUDE - 2 * SPACE,
                    longitude: LONGITUDE - SPACE,
                },
            ],
        };
    }
    handleColorChange(color) {
        const props = { strokeColor: color };
        this.circle.setNativeProps(props);
        this.polygon.setNativeProps(props);
        this.polyline.setNativeProps(props);
    }
    render() {
        const { region, circle, polygon, polyline } = this.state;
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} style={styles.map} initialRegion={region}>
          <react_native_maps_1.Circle ref={ref => {
                this.circle = ref;
            }} center={circle.center} radius={circle.radius} fillColor="rgba(255, 255, 255, 0.6)" strokeColor="green" zIndex={3} strokeWidth={3}/>
          <react_native_maps_1.Polygon ref={ref => {
                this.polygon = ref;
            }} coordinates={polygon} fillColor="rgba(255, 255, 255, 0.6)" strokeColor="green" strokeWidth={2}/>
          <react_native_maps_1.Polyline ref={ref => {
                this.polyline = ref;
            }} coordinates={polyline} strokeColor="green" strokeWidth={3}/>
        </react_native_maps_1.default>
        <react_native_1.View style={styles.buttonContainer}>
          <react_native_1.TouchableOpacity onPress={() => {
                this.handleColorChange('green');
            }}>
            <react_native_1.View style={styles.bubble}>
              <react_native_1.Text>Green</react_native_1.Text>
            </react_native_1.View>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => {
                this.handleColorChange('black');
            }}>
            <react_native_1.View style={styles.bubble}>
              <react_native_1.Text>Black</react_native_1.Text>
            </react_native_1.View>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => {
                this.handleColorChange('red');
            }}>
            <react_native_1.View style={styles.bubble}>
              <react_native_1.Text>Red</react_native_1.Text>
            </react_native_1.View>
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
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
exports.default = SetNativePropsOverlays;
