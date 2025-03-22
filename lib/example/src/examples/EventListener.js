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
const PriceMarker_1 = __importDefault(require("./PriceMarker"));
const { width, height } = react_native_1.Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;
class Event extends react_1.default.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.event.id !== nextProps.event.id;
    }
    render() {
        const { event } = this.props;
        return (<react_native_1.View style={styles.event}>
        <react_native_1.Text style={styles.eventName}>{event.name}</react_native_1.Text>
        <react_native_1.Text style={styles.eventData}>
          {JSON.stringify(event.data, null, 2)}
        </react_native_1.Text>
      </react_native_1.View>);
    }
}
class EventListener extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            events: [],
        };
    }
    makeEvent(e, name) {
        return {
            id: id++,
            name,
            data: e.nativeEvent ? e.nativeEvent : e,
        };
    }
    recordEvent(name) {
        return (e) => {
            if (e.persist) {
                e.persist(); // Avoids warnings relating to https://fb.me/react-event-pooling
            }
            this.setState((prevState) => ({
                events: [this.makeEvent(e, name), ...prevState.events.slice(0, 10)],
            }));
        };
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_maps_1.default provider={this.props.provider} style={styles.map} initialRegion={this.state.region} showsUserLocation showsMyLocationButton onRegionChangeStart={this.recordEvent('Map::onRegionChangeStart')} onRegionChange={this.recordEvent('Map::onRegionChange')} onRegionChangeComplete={this.recordEvent('Map::onRegionChangeComplete')} onPress={this.recordEvent('Map::onPress')} onPanDrag={this.recordEvent('Map::onPanDrag')} onLongPress={this.recordEvent('Map::onLongPress')} onMarkerPress={this.recordEvent('Map::onMarkerPress')} onMarkerSelect={this.recordEvent('Map::onMarkerSelect')} onMarkerDeselect={this.recordEvent('Map::onMarkerDeselect')} onCalloutPress={this.recordEvent('Map::onCalloutPress')} onUserLocationChange={this.recordEvent('Map::onUserLocationChange')}>
          <react_native_maps_1.Marker coordinate={{
                latitude: LATITUDE + LATITUDE_DELTA / 2,
                longitude: LONGITUDE + LONGITUDE_DELTA / 2,
            }}/>
          <react_native_maps_1.Marker coordinate={{
                latitude: LATITUDE - LATITUDE_DELTA / 2,
                longitude: LONGITUDE - LONGITUDE_DELTA / 2,
            }}/>
          <react_native_maps_1.Marker title="This is a title" description="This is a description" coordinate={this.state.region} onPress={this.recordEvent('Marker::onPress')} onSelect={this.recordEvent('Marker::onSelect')} onDeselect={this.recordEvent('Marker::onDeselect')} onCalloutPress={this.recordEvent('Marker::onCalloutPress')}>
            <PriceMarker_1.default amount={99}/>
            <react_native_maps_1.Callout style={styles.callout} onPress={this.recordEvent('Callout::onPress')}>
              <react_native_1.View>
                <react_native_1.Text>Well hello there...</react_native_1.Text>
              </react_native_1.View>
            </react_native_maps_1.Callout>
          </react_native_maps_1.Marker>
          <react_native_maps_1.Polygon fillColor={'rgba(255,0,0,0.3)'} onPress={this.recordEvent('Polygon::onPress')} tappable coordinates={[
                {
                    latitude: LATITUDE + LATITUDE_DELTA / 5,
                    longitude: LONGITUDE + LONGITUDE_DELTA / 4,
                },
                {
                    latitude: LATITUDE + LATITUDE_DELTA / 3,
                    longitude: LONGITUDE + LONGITUDE_DELTA / 4,
                },
                {
                    latitude: LATITUDE + LATITUDE_DELTA / 4,
                    longitude: LONGITUDE + LONGITUDE_DELTA / 2,
                },
            ]}/>
          <react_native_maps_1.Polyline strokeColor={'rgba(255,0,0,1)'} onPress={this.recordEvent('Polyline::onPress')} tappable coordinates={[
                {
                    latitude: LATITUDE + LATITUDE_DELTA / 5,
                    longitude: LONGITUDE - LONGITUDE_DELTA / 4,
                },
                {
                    latitude: LATITUDE + LATITUDE_DELTA / 3,
                    longitude: LONGITUDE - LONGITUDE_DELTA / 4,
                },
                {
                    latitude: LATITUDE + LATITUDE_DELTA / 4,
                    longitude: LONGITUDE - LONGITUDE_DELTA / 2,
                },
            ]}/>
        </react_native_maps_1.default>
        <react_native_1.View style={styles.eventList}>
          <react_native_1.ScrollView>
            {this.state.events.map((event) => (<Event key={event.id} event={event}/>))}
          </react_native_1.ScrollView>
        </react_native_1.View>
      </react_native_1.View>);
    }
}
const styles = react_native_1.StyleSheet.create({
    callout: {
        width: 60,
    },
    container: {
        ...react_native_1.StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    event: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 8,
    },
    eventData: {
        fontSize: 10,
        fontFamily: 'courier',
        color: '#555',
    },
    eventName: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#222',
    },
    eventList: {
        position: 'absolute',
        top: height / 2,
        left: 0,
        right: 0,
        bottom: 0,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: height / 2,
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
exports.default = EventListener;
