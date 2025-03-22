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
    map;
    constructor(props) {
        super(props);
        this.state = {
            mapSnapshot: null,
        };
    }
    takeSnapshot() {
        this.map.takeSnapshot(300, 300, {
            latitude: LATITUDE - SPACE,
            longitude: LONGITUDE - SPACE,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01 * ASPECT_RATIO,
        }, (err, data) => {
            if (err) {
                console.log(err);
            }
            this.setState({ mapSnapshot: data });
        });
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} ref={ref => {
                this.map = ref;
            }} style={styles.map} initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}>
          <react_native_maps_1.Marker coordinate={{
                latitude: LATITUDE + SPACE,
                longitude: LONGITUDE + SPACE,
            }} centerOffset={{ x: -18, y: -60 }} anchor={{ x: 0.69, y: 1 }} image={flag_blue_png_1.default}/>
          <react_native_maps_1.Marker coordinate={{
                latitude: LATITUDE - SPACE,
                longitude: LONGITUDE - SPACE,
            }} centerOffset={{ x: -42, y: -60 }} anchor={{ x: 0.84, y: 1 }} image={flag_pink_png_1.default}/>
        </react_native_maps_1.default>

        <react_native_1.View style={styles.buttonContainer}>
          <react_native_1.TouchableOpacity onPress={() => this.takeSnapshot()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text>Take snapshot</react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
        {this.state.mapSnapshot && (<react_native_1.TouchableOpacity style={[styles.container, styles.overlay]} onPress={() => this.setState({ mapSnapshot: null })}>
            <react_native_1.Image source={{ uri: this.state.mapSnapshot.uri }} style={styles.mapSnapshot}/>
          </react_native_1.TouchableOpacity>)}
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
        width: 140,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
    },
    mapSnapshot: { width: 300, height: 300 },
});
exports.default = MarkerTypes;
