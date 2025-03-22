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
const LATITUDE = 63.5;
const LONGITUDE = 23.5;
const LATITUDE_DELTA = 0.152;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class CustomTiles extends react_1.default.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        };
    }
    get mapType() {
        // MapKit does not support 'none' as a base map
        return this.props.provider === react_native_maps_1.PROVIDER_DEFAULT
            ? react_native_maps_1.MAP_TYPES.STANDARD
            : react_native_maps_1.MAP_TYPES.NONE;
    }
    render() {
        const { region } = this.state;
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} mapType={react_native_maps_1.MAP_TYPES.SATELLITE} style={styles.map} initialRegion={region}>
          <react_native_maps_1.WMSTile urlTemplate="https://julkinen.vayla.fi/inspirepalvelu/wms?service=WMS&version=1.1.1&request=GetMap&layers=avoin:TL137&format=image/png&transparent=true&styles=&bbox={minX},{minY},{maxX},{maxY}&width={width}&height={height}&srs=EPSG:3857" zIndex={2} tileSize={256} 
        // Test steps:
        // 1) Without new tile provider properties: comment out tileCachePath & maximumNativeZ
        // 2) With maximumNativeZ only to test scaling past maxNativeZoom level
        // 3) With tileCachePath too - test caching performance with cutting & throttling network connectivity
        // 4) With tileCacheMaxAge too
        // 5) With offlineMode=true too - zoom in to test scaling of lower zoom level tiles to higher zoom levels
        //
        maximumNativeZ={12} 
        // For testing activate different tile cache paths, examples below
        // work for simulator / emulator testing
        // This is for iOS simulator, both as fileURL and directory paths to be tested separately
        tileCachePath="file:///Users/suomimar/Library/Developer/CoreSimulator/wms_tiles" 
        //tileCachePath="/Users/suomimar/Library/Developer/CoreSimulator/wms_tiles"
        // This is for Android simulator, both as fileURL and directory paths to be tested separately
        //tileCachePath="file:///data/user/0/com.airbnb.android.react.maps.example/files/wms_tiles"
        //tileCachePath="/data/user/0/com.airbnb.android.react.maps.example/files/wms_tiles"
        tileCacheMaxAge={20} opacity={1.0}/>
        </react_native_maps_1.default>
        <react_native_1.View style={styles.buttonContainer}>
          <react_native_1.View style={styles.bubble}>
            <react_native_1.Text>Cached WMSTiles</react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.View>);
    }
}
const styles = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    bubble: {
        flex: 1,
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
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
exports.default = CustomTiles;
