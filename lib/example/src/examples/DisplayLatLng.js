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
class DisplayLatLng extends react_1.default.Component {
    map;
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
    onRegionChange(region) {
        this.setState({ region });
    }
    jumpRandom() {
        this.setState({ region: this.randomRegion() });
    }
    animateRandom() {
        this.map.animateToRegion(this.randomRegion());
    }
    animateRandomCoordinate() {
        this.map.animateCamera({ center: this.randomCoordinate() });
    }
    animateToRandomBearing() {
        this.map.animateCamera({ heading: this.getRandomFloat(-360, 360) });
    }
    animateToRandomViewingAngle() {
        this.map.animateCamera({ pitch: this.getRandomFloat(0, 90) });
    }
    getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
    randomCoordinate() {
        const region = this.state.region;
        return {
            latitude: region.latitude + (Math.random() - 0.5) * (region.latitudeDelta / 2),
            longitude: region.longitude + (Math.random() - 0.5) * (region.longitudeDelta / 2),
        };
    }
    randomRegion() {
        return {
            ...this.state.region,
            ...this.randomCoordinate(),
        };
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} ref={ref => {
                this.map = ref;
            }} mapType={react_native_maps_1.MAP_TYPES.TERRAIN} style={styles.map} initialRegion={this.state.region} onRegionChange={region => this.onRegionChange(region)}/>
        <react_native_1.View style={[styles.bubble, styles.latlng]}>
          <react_native_1.Text style={styles.centeredText}>
            {this.state.region.latitude.toPrecision(7)},
            {this.state.region.longitude.toPrecision(7)}
          </react_native_1.Text>
        </react_native_1.View>
        <react_native_1.View style={styles.buttonContainer}>
          <react_native_1.TouchableOpacity onPress={() => this.jumpRandom()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text style={styles.buttonText}>Jump</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.animateRandom()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text style={styles.buttonText}>Animate (Region)</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.animateRandomCoordinate()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text style={styles.buttonText}>Animate (Coordinate)</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.animateToRandomBearing()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text style={styles.buttonText}>Animate (Bearing)</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.animateToRandomViewingAngle()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text style={styles.buttonText}>Animate (View Angle)</react_native_1.Text>
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
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 100,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    buttonText: {
        textAlign: 'center',
    },
    centeredText: { textAlign: 'center' },
});
exports.default = DisplayLatLng;
