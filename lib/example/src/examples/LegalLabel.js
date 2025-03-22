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
const screen = react_native_1.Dimensions.get('window');
class LegalLabel extends react_1.default.Component {
    state = {
        _legalLabelPositionY: new react_native_1.Animated.Value(10),
        legalLabelPositionY: 10,
    };
    componentDidMount() {
        this.state._legalLabelPositionY.addListener(({ value }) => {
            this.setState({
                legalLabelPositionY: value,
            });
        });
    }
    componentWillUnmount() {
        this.state._legalLabelPositionY.removeAllListeners();
    }
    onPressAnimate = () => {
        react_native_1.Animated.sequence([
            react_native_1.Animated.spring(this.state._legalLabelPositionY, {
                toValue: 100,
                useNativeDriver: true,
            }),
            react_native_1.Animated.spring(this.state._legalLabelPositionY, {
                toValue: 10,
                useNativeDriver: true,
            }),
        ]).start();
    };
    render() {
        const latlng = {
            latitude: 37.78825,
            longitude: -122.4324,
        };
        const ASPECT_RATIO = screen.width / screen.height;
        const LATITUDE_DELTA = 0.0922;
        const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
        return (<react_native_1.View style={{ ...react_native_1.StyleSheet.absoluteFillObject }}>
        <react_native_maps_1.default provider={this.props.provider} style={styles.map} legalLabelInsets={{
                top: 0,
                left: 0,
                bottom: this.state.legalLabelPositionY,
                right: 10,
            }} initialRegion={{
                ...latlng,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}>
          <react_native_maps_1.Marker coordinate={latlng}/>
        </react_native_maps_1.default>

        <react_native_1.View style={styles.username}>
          <react_native_1.TouchableOpacity onPress={this.onPressAnimate}>
            <react_native_1.Text style={styles.usernameText}>Animate</react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>

        <react_native_1.View style={styles.bio}>
          <react_native_1.Text style={styles.bioText}>
            Bio description lorem ipsum Ullamco exercitation aliqua ullamco
            nostrud dolor et aliquip fugiat do aute fugiat velit in aliqua sit.
          </react_native_1.Text>
        </react_native_1.View>

        <react_native_1.View style={styles.photo}>
          <react_native_1.View style={styles.photoInner}>
            <react_native_1.Text style={styles.photoText}>Profile Photo</react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.View>);
    }
}
const padding = 10;
const photoSize = 80;
const mapHeight = screen.height - 130;
const styles = react_native_1.StyleSheet.create({
    bio: {
        marginHorizontal: padding,
        marginBottom: 0,
        paddingVertical: padding / 2,
    },
    bioText: {
        fontSize: 16,
        lineHeight: 16 * 1.5,
    },
    username: {
        paddingLeft: photoSize + padding + padding,
        paddingTop: padding,
    },
    usernameText: {
        fontSize: 36,
        lineHeight: 36,
        color: 'blue',
        textDecorationLine: 'underline',
    },
    photo: {
        padding: 2,
        position: 'absolute',
        top: mapHeight - photoSize / 2,
        left: padding,
        borderRadius: 5,
        borderWidth: react_native_1.StyleSheet.hairlineWidth,
        backgroundColor: '#ccc',
        width: photoSize,
        height: photoSize,
    },
    photoInner: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    photoText: {
        fontSize: 9,
        textAlign: 'center',
    },
    map: {
        height: mapHeight,
    },
});
exports.default = LegalLabel;
