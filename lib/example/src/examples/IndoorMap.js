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
const LATITUDE = 1.3039991;
const LONGITUDE = 103.8316911;
const LATITUDE_DELTA = 0.003;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class IndoorMap extends react_1.default.Component {
    map;
    constructor(props) {
        super(props);
        this.setIndoorLevel = this.setIndoorLevel.bind(this);
    }
    handleIndoorFocus(event) {
        const { indoorBuilding } = event.nativeEvent;
        const { defaultLevelIndex, levels } = indoorBuilding;
        const levelNames = levels.map((lv) => lv.name || '');
        const msg = `Default Level: ${defaultLevelIndex}\nLevels: ${levelNames.toString()}`;
        react_native_1.Alert.alert('Indoor building focused', msg);
    }
    setIndoorLevel(level) {
        this.map.setIndoorActiveLevelIndex(level);
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} style={styles.map} initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }} showsIndoors showsIndoorLevelPicker onIndoorBuildingFocused={this.handleIndoorFocus} ref={map => {
                this.map = map;
            }}/>
        <react_native_1.Button title="go to level 5" onPress={() => {
                this.setIndoorLevel(5);
            }}/>
        <react_native_1.Button title="go to level 1" onPress={() => {
                this.setIndoorLevel(1);
            }}/>
      </react_native_1.View>);
    }
}
exports.default = IndoorMap;
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
