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
let id = 0;
class PolygonCreator extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            polygons: [],
            editing: null,
            creatingHole: false,
        };
    }
    finish() {
        const { polygons, editing } = this.state;
        this.setState({
            polygons: [...polygons, editing],
            editing: null,
            creatingHole: false,
        });
    }
    createHole() {
        const { editing, creatingHole } = this.state;
        if (!creatingHole) {
            this.setState({
                creatingHole: true,
                editing: {
                    ...editing,
                    holes: [...editing.holes, []],
                },
            });
        }
        else {
            const holes = [...editing.holes];
            if (holes[holes.length - 1].length === 0) {
                holes.pop();
                this.setState({
                    editing: {
                        ...editing,
                        holes,
                    },
                });
            }
            this.setState({ creatingHole: false });
        }
    }
    onPress(e) {
        const { editing, creatingHole } = this.state;
        if (!editing) {
            this.setState({
                editing: {
                    id: id++,
                    coordinates: [e.nativeEvent.coordinate],
                    holes: [],
                },
            });
        }
        else if (!creatingHole) {
            this.setState({
                editing: {
                    ...editing,
                    coordinates: [...editing.coordinates, e.nativeEvent.coordinate],
                },
            });
        }
        else {
            const holes = [...editing.holes];
            holes[holes.length - 1] = [
                ...holes[holes.length - 1],
                e.nativeEvent.coordinate,
            ];
            this.setState({
                editing: {
                    ...editing,
                    id: id++,
                    coordinates: [...editing.coordinates],
                    holes,
                },
            });
        }
    }
    render() {
        const mapOptions = {
            scrollEnabled: true,
        };
        if (this.state.editing) {
            mapOptions.scrollEnabled = false;
            mapOptions.onPanDrag = (e) => this.onPress(e);
        }
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} style={styles.map} mapType={react_native_maps_1.MAP_TYPES.HYBRID} initialRegion={this.state.region} onPress={e => this.onPress(e)} {...mapOptions}>
          {this.state.polygons.map((polygon) => (<react_native_maps_1.Polygon key={polygon.id} coordinates={polygon.coordinates} holes={polygon.holes} strokeColor="#F00" fillColor="rgba(255,0,0,0.5)" strokeWidth={1}/>))}
          {this.state.editing && (<react_native_maps_1.Polygon key={this.state.editing.id} coordinates={this.state.editing.coordinates} holes={this.state.editing.holes} strokeColor="#000" fillColor="rgba(255,0,0,0.5)" strokeWidth={1}/>)}
        </react_native_maps_1.default>
        <react_native_1.View style={styles.buttonContainer}>
          {this.state.editing && (<react_native_1.TouchableOpacity onPress={() => this.createHole()} style={[styles.bubble, styles.button]}>
              <react_native_1.Text>
                {this.state.creatingHole ? 'Finish Hole' : 'Create Hole'}
              </react_native_1.Text>
            </react_native_1.TouchableOpacity>)}
          {this.state.editing && (<react_native_1.TouchableOpacity onPress={() => this.finish()} style={[styles.bubble, styles.button]}>
              <react_native_1.Text>Finish</react_native_1.Text>
            </react_native_1.TouchableOpacity>)}
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
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
exports.default = PolygonCreator;
