"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_maps_1 = __importDefault(require("react-native-maps"));
const CustomOverlayXMarksTheSpot_1 = __importDefault(require("./CustomOverlayXMarksTheSpot"));
const { width, height } = react_native_1.Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class CustomOverlay extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            coordinates: [
                {
                    longitude: -122.442753,
                    latitude: 37.79879,
                },
                {
                    longitude: -122.424728,
                    latitude: 37.801232,
                },
                {
                    longitude: -122.422497,
                    latitude: 37.790651,
                },
                {
                    longitude: -122.440693,
                    latitude: 37.788209,
                },
            ],
            center: {
                longitude: -122.4326648935676,
                latitude: 37.79418561114521,
            },
        };
    }
    render() {
        const { coordinates, center, region } = this.state;
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} style={styles.map} initialRegion={region}>
          <CustomOverlayXMarksTheSpot_1.default coordinates={coordinates} center={center}/>
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
});
exports.default = CustomOverlay;
