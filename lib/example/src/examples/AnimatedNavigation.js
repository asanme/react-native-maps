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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_maps_1 = __importStar(require("react-native-maps"));
// @ts-ignore
const car_png_1 = __importDefault(require("./assets/car.png"));
class NavigationMap extends react_1.Component {
    map;
    constructor(props) {
        super(props);
        this.state = {
            prevPos: null,
            curPos: { latitude: 37.420814, longitude: -122.081949 },
            curAng: 45,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };
        this.changePosition = this.changePosition.bind(this);
        this.getRotation = this.getRotation.bind(this);
        this.updateMap = this.updateMap.bind(this);
    }
    changePosition(latOffset, lonOffset) {
        const latitude = this.state.curPos.latitude + latOffset;
        const longitude = this.state.curPos.longitude + lonOffset;
        this.setState({
            prevPos: this.state.curPos,
            curPos: { latitude, longitude },
        });
        this.updateMap();
    }
    getRotation(prevPos, curPos) {
        if (!prevPos) {
            return 0;
        }
        const xDiff = curPos.latitude - prevPos.latitude;
        const yDiff = curPos.longitude - prevPos.longitude;
        return (Math.atan2(yDiff, xDiff) * 180.0) / Math.PI;
    }
    updateMap() {
        const { curPos, prevPos, curAng } = this.state;
        const curRot = this.getRotation(prevPos, curPos);
        this.map.animateCamera({ heading: curRot, center: curPos, pitch: curAng });
    }
    render() {
        return (<react_native_1.View style={styles.flex}>
        <react_native_maps_1.default ref={el => (this.map = el)} style={styles.flex} minZoomLevel={15} initialRegion={{
                ...this.state.curPos,
                latitudeDelta: this.state.latitudeDelta,
                longitudeDelta: this.state.longitudeDelta,
            }}>
          <react_native_maps_1.Marker coordinate={this.state.curPos} anchor={{ x: 0.5, y: 0.5 }} image={car_png_1.default}/>
        </react_native_maps_1.default>
        <react_native_1.View style={styles.buttonContainerUpDown}>
          <react_native_1.TouchableOpacity style={[styles.button, styles.up]} onPress={() => this.changePosition(0.0001, 0)}>
            <react_native_1.Text>+ Lat</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity style={[styles.button, styles.down]} onPress={() => this.changePosition(-0.0001, 0)}>
            <react_native_1.Text>- Lat</react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
        <react_native_1.View style={styles.buttonContainerLeftRight}>
          <react_native_1.TouchableOpacity style={[styles.button, styles.left]} onPress={() => this.changePosition(0, -0.0001)}>
            <react_native_1.Text>- Lon</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity style={[styles.button, styles.right]} onPress={() => this.changePosition(0, 0.0001)}>
            <react_native_1.Text>+ Lon</react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
      </react_native_1.View>);
    }
}
exports.default = NavigationMap;
const styles = react_native_1.StyleSheet.create({
    flex: {
        flex: 1,
        width: '100%',
    },
    buttonContainerUpDown: {
        ...react_native_1.StyleSheet.absoluteFillObject,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainerLeftRight: {
        ...react_native_1.StyleSheet.absoluteFillObject,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'rgba(100,100,100,0.2)',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 50,
        width: 50,
    },
    up: {
        alignSelf: 'flex-start',
    },
    down: {
        alignSelf: 'flex-end',
    },
    left: {
        alignSelf: 'flex-start',
    },
    right: {
        alignSelf: 'flex-end',
    },
});
