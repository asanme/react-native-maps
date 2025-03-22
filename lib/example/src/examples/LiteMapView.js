"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_maps_1 = __importDefault(require("react-native-maps"));
const { width, height } = react_native_1.Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SAMPLE_REGION = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
};
class LiteMapView extends react_1.default.Component {
    render() {
        const maps = [];
        for (let i = 0; i < 10; i++) {
            maps.push(<react_native_maps_1.default liteMode key={`map_${i}`} style={styles.map} initialRegion={SAMPLE_REGION}/>);
        }
        return (<react_native_1.ScrollView style={react_native_1.StyleSheet.absoluteFillObject}>{maps}</react_native_1.ScrollView>);
    }
}
const styles = react_native_1.StyleSheet.create({
    map: {
        height: 200,
        marginVertical: 50,
    },
});
exports.default = LiteMapView;
