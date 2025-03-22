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
const CustomCallout_1 = __importDefault(require("./CustomCallout"));
const { width, height } = react_native_1.Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
class Callouts extends react_1.default.Component {
    marker1;
    marker2;
    marker4;
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0,
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: [
                {
                    coordinate: {
                        latitude: LATITUDE + SPACE,
                        longitude: LONGITUDE + SPACE,
                    },
                },
                {
                    coordinate: {
                        latitude: LATITUDE + SPACE,
                        longitude: LONGITUDE - SPACE,
                    },
                },
                {
                    coordinate: {
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                    },
                },
                {
                    coordinate: {
                        latitude: LATITUDE,
                        longitude: LONGITUDE - SPACE / 2,
                    },
                },
            ],
        };
    }
    show() {
        this.marker1.showCallout();
    }
    hide() {
        this.marker1.hideCallout();
    }
    render() {
        const { region, markers } = this.state;
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} style={styles.map} initialRegion={region} zoomTapEnabled={false}>
          <react_native_maps_1.Marker ref={ref => {
                this.marker1 = ref;
            }} coordinate={markers[0].coordinate} title="This is a native view" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"/>
          <react_native_maps_1.Marker coordinate={markers[1].coordinate}>
            <react_native_maps_1.Callout style={styles.plainView}>
              <react_native_1.View>
                <react_native_1.Text>This is a plain view</react_native_1.Text>
              </react_native_1.View>
            </react_native_maps_1.Callout>
          </react_native_maps_1.Marker>
          <react_native_maps_1.Marker coordinate={markers[2].coordinate} calloutOffset={{ x: -8, y: 28 }} calloutAnchor={{ x: 0.5, y: 0.4 }} ref={ref => {
                this.marker2 = ref;
            }}>
            <react_native_maps_1.Callout alphaHitTest tooltip onPress={_ => {
                react_native_1.Alert.alert('callout pressed');
            }} style={styles.customView}>
              <CustomCallout_1.default>
                <react_native_1.Text>{`This is a custom callout bubble view ${this.state.cnt}`}</react_native_1.Text>
                <react_native_maps_1.CalloutSubview onPress={() => {
                this.setState({ cnt: this.state.cnt + 1 }, () => {
                    this.marker2.redrawCallout();
                });
            }} style={[styles.calloutButton]}>
                  <react_native_1.Text>Click me</react_native_1.Text>
                </react_native_maps_1.CalloutSubview>
              </CustomCallout_1.default>
            </react_native_maps_1.Callout>
          </react_native_maps_1.Marker>
          <react_native_maps_1.Marker ref={ref => {
                this.marker4 = ref;
            }} coordinate={markers[3].coordinate} title="You can also open this callout" description="by pressing on transparent area of custom callout"/>
        </react_native_maps_1.default>
        <react_native_1.View style={styles.buttonContainer}>
          <react_native_1.View style={styles.bubble}>
            <react_native_1.Text>Tap on markers to see different callouts</react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>
        <react_native_1.View style={styles.buttonContainer}>
          <react_native_1.TouchableOpacity onPress={() => this.show()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text>Show</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.hide()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text>Hide</react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
      </react_native_1.View>);
    }
}
const styles = react_native_1.StyleSheet.create({
    customView: {
        width: 140,
        height: 140,
    },
    plainView: {
        width: 60,
    },
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
    calloutButton: {
        width: 'auto',
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },
});
exports.default = Callouts;
