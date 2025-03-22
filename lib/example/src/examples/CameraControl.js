"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_maps_1 = __importDefault(require("react-native-maps"));
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
class CameraControl extends react_1.default.Component {
    map;
    async getCamera() {
        const camera = await this.map.getCamera();
        react_native_1.Alert.alert('Current camera', JSON.stringify(camera), [{ text: 'OK' }], {
            cancelable: true,
        });
    }
    async setCamera() {
        const camera = await this.map.getCamera();
        // Note that we do not have to pass a full camera object to setCamera().
        // Similar to setState(), we can pass only the properties you like to change.
        this.map.setCamera({
            heading: camera.heading + 10,
        });
    }
    async animateCamera() {
        const camera = await this.map.getCamera();
        camera.heading += 40;
        camera.pitch += 10;
        camera.altitude += 1000;
        camera.zoom -= 1;
        camera.center.latitude += 0.5;
        this.map.animateCamera(camera, { duration: 2000 });
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} ref={ref => {
                this.map = ref;
            }} style={styles.map} initialCamera={{
                center: {
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                },
                pitch: 45,
                heading: 90,
                altitude: 1000,
                zoom: 10,
            }}/>
        <react_native_1.View style={styles.buttonContainer}>
          <react_native_1.TouchableOpacity onPress={() => this.getCamera()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text>Get current camera</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.setCamera()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text>Set Camera</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={() => this.animateCamera()} style={[styles.bubble, styles.button]}>
            <react_native_1.Text>Animate Camera</react_native_1.Text>
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
    button: {
        marginTop: 12,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
exports.default = CameraControl;
