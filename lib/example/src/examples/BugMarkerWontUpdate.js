"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_maps_1 = __importDefault(require("react-native-maps"));
const MyLocationMapMarker_1 = __importDefault(require("./MyLocationMapMarker"));
const { width, height } = react_native_1.Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class BugMarkerWontUpdate extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            coordinate: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
            },
            amount: 0,
            enableHack: false,
        };
    }
    increment() {
        this.setState({ amount: this.state.amount + 10 });
    }
    decrement() {
        this.setState({ amount: this.state.amount - 10 });
    }
    toggleHack() {
        this.setState({ enableHack: !this.state.enableHack });
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} style={styles.map} initialRegion={this.state.region}>
          <MyLocationMapMarker_1.default />
        </react_native_maps_1.default>
        <react_native_1.View style={styles.buttonContainer}>
          <react_native_1.TouchableOpacity onPress={() => this.toggleHack()} style={[styles.bubble, styles.button, styles.hackButton]}>
            <react_native_1.Text style={styles.toggleHack}>
              {this.state.enableHack ? 'Disable Hack' : 'Enable Hack'}
            </react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
        <react_native_1.View style={styles.buttonContainer}>
          <react_native_1.TouchableOpacity onPress={() => this.decrement()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text style={styles.ammountButton}>-</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.increment()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text style={styles.ammountButton}>+</react_native_1.Text>
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
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    hackButton: {
        width: 200,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    toggleHack: { fontSize: 12, fontWeight: 'bold' },
    ammountButton: { fontSize: 20, fontWeight: 'bold' },
});
exports.default = BugMarkerWontUpdate;
