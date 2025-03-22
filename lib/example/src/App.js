"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_maps_1 = require("react-native-maps");
const DisplayLatLng_1 = __importDefault(require("./examples/DisplayLatLng"));
const ViewsAsMarkers_1 = __importDefault(require("./examples/ViewsAsMarkers"));
const EventListener_1 = __importDefault(require("./examples/EventListener"));
const MarkerTypes_1 = __importDefault(require("./examples/MarkerTypes"));
const DraggableMarkers_1 = __importDefault(require("./examples/DraggableMarkers"));
const PolygonCreator_1 = __importDefault(require("./examples/PolygonCreator"));
const PolylineCreator_1 = __importDefault(require("./examples/PolylineCreator"));
const GradientPolylines_1 = __importDefault(require("./examples/GradientPolylines"));
const GradientPolylinesFunctional_1 = __importDefault(require("./examples/GradientPolylinesFunctional"));
const AnimatedViews_1 = __importDefault(require("./examples/AnimatedViews"));
const AnimatedMarkers_1 = __importDefault(require("./examples/AnimatedMarkers"));
const Callouts_1 = __importDefault(require("./examples/Callouts"));
const Overlays_1 = __importDefault(require("./examples/Overlays"));
const DefaultMarkers_1 = __importDefault(require("./examples/DefaultMarkers"));
const CustomMarkers_1 = __importDefault(require("./examples/CustomMarkers"));
const CachedMap_1 = __importDefault(require("./examples/CachedMap"));
const LoadingMap_1 = __importDefault(require("./examples/LoadingMap"));
const MapBoundaries_1 = __importDefault(require("./examples/MapBoundaries"));
const TakeSnapshot_1 = __importDefault(require("./examples/TakeSnapshot"));
const FitToSuppliedMarkers_1 = __importDefault(require("./examples/FitToSuppliedMarkers"));
const FitToCoordinates_1 = __importDefault(require("./examples/FitToCoordinates"));
const LiteMapView_1 = __importDefault(require("./examples/LiteMapView"));
const CustomTiles_1 = __importDefault(require("./examples/CustomTiles"));
const WMSTiles_1 = __importDefault(require("./examples/WMSTiles"));
const ZIndexMarkers_1 = __importDefault(require("./examples/ZIndexMarkers"));
const StaticMap_1 = __importDefault(require("./examples/StaticMap"));
const ThemeMap_1 = __importDefault(require("./examples/ThemeMap"));
const MapStyle_1 = __importDefault(require("./examples/MapStyle"));
const LegalLabel_1 = __importDefault(require("./examples/LegalLabel"));
const SetNativePropsOverlays_1 = __importDefault(require("./examples/SetNativePropsOverlays"));
const CustomOverlay_1 = __importDefault(require("./examples/CustomOverlay"));
const MapKml_1 = __importDefault(require("./examples/MapKml"));
const BugMarkerWontUpdate_1 = __importDefault(require("./examples/BugMarkerWontUpdate"));
const ImageOverlayWithAssets_1 = __importDefault(require("./examples/ImageOverlayWithAssets"));
const ImageOverlayWithURL_1 = __importDefault(require("./examples/ImageOverlayWithURL"));
const ImageOverlayWithBearing_1 = __importDefault(require("./examples/ImageOverlayWithBearing"));
const AnimatedNavigation_1 = __importDefault(require("./examples/AnimatedNavigation"));
const OnPoiClick_1 = __importDefault(require("./examples/OnPoiClick"));
const TestIdMarkers_1 = __importDefault(require("./examples/TestIdMarkers"));
const IndoorMap_1 = __importDefault(require("./examples/IndoorMap"));
const CameraControl_1 = __importDefault(require("./examples/CameraControl"));
const MassiveCustomMarkers_1 = __importDefault(require("./examples/MassiveCustomMarkers"));
const Geojson_1 = __importDefault(require("./examples/Geojson"));
const CacheURLTiles_1 = __importDefault(require("./examples/CacheURLTiles"));
const CacheWMSTiles_1 = __importDefault(require("./examples/CacheWMSTiles"));
const IOS = react_native_1.Platform.OS === 'ios';
const ANDROID = react_native_1.Platform.OS === 'android';
function makeExampleMapper(useGoogleMaps) {
    if (useGoogleMaps) {
        return (example) => [
            example[0],
            [example[1], example[3]].filter(Boolean).join(' '),
        ];
    }
    return (example) => example;
}
class App extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            Component: null,
            useGoogleMaps: ANDROID,
        };
    }
    renderExample([Component, title]) {
        return (<react_native_1.TouchableOpacity key={title} style={styles.button} onPress={() => this.setState({ Component })}>
        <react_native_1.Text>{title}</react_native_1.Text>
      </react_native_1.TouchableOpacity>);
    }
    renderBackButton() {
        return (<react_native_1.TouchableOpacity style={styles.back} onPress={() => this.setState({ Component: null })}>
        <react_native_1.Text style={styles.backButton}>&larr;</react_native_1.Text>
      </react_native_1.TouchableOpacity>);
    }
    renderGoogleSwitch() {
        return (<react_native_1.View>
        <react_native_1.Text>Use GoogleMaps?</react_native_1.Text>
        <react_native_1.Switch onValueChange={value => this.setState({ useGoogleMaps: value })} style={styles.googleSwitch} value={this.state.useGoogleMaps}/>
      </react_native_1.View>);
    }
    renderExamples(examples) {
        const { Component, useGoogleMaps } = this.state;
        return (<react_native_1.View style={styles.container}>
        {Component && (<Component provider={useGoogleMaps ? react_native_maps_1.PROVIDER_GOOGLE : react_native_maps_1.PROVIDER_DEFAULT}/>)}
        {Component && this.renderBackButton()}
        {!Component && (<react_native_1.ScrollView style={react_native_1.StyleSheet.absoluteFill} contentContainerStyle={styles.scrollview} showsVerticalScrollIndicator={false}>
            {IOS && this.renderGoogleSwitch()}
            {examples.map((example) => this.renderExample(example))}
          </react_native_1.ScrollView>)}
      </react_native_1.View>);
    }
    render() {
        return this.renderExamples([
            // [<component>, <component description>, <Google compatible>, <Google add'l description>]
            [StaticMap_1.default, 'StaticMap', true],
            [ThemeMap_1.default, 'ThemeMap', true],
            [DisplayLatLng_1.default, 'Tracking Position', true, '(incomplete)'],
            [ViewsAsMarkers_1.default, 'Arbitrary Views as Markers', true],
            [EventListener_1.default, 'Events', true, '(incomplete)'],
            [MarkerTypes_1.default, 'Image Based Markers', true],
            [DraggableMarkers_1.default, 'Draggable Markers', true],
            [PolygonCreator_1.default, 'Polygon Creator', true],
            [PolylineCreator_1.default, 'Polyline Creator', true],
            [GradientPolylines_1.default, 'Gradient Polylines', true],
            [GradientPolylinesFunctional_1.default, 'Gradient Polylines Functional', true],
            [AnimatedViews_1.default, 'Animating with MapViews'],
            [AnimatedMarkers_1.default, 'Animated Marker Position'],
            [Callouts_1.default, 'Custom Callouts', true],
            [Overlays_1.default, 'Circles, Polygons, and Polylines', true],
            [DefaultMarkers_1.default, 'Default Markers', true],
            [CustomMarkers_1.default, 'Custom Markers', true],
            [TakeSnapshot_1.default, 'Take Snapshot', true, '(incomplete)'],
            [CachedMap_1.default, 'Cached Map'],
            [LoadingMap_1.default, 'Map with loading', true],
            [MapBoundaries_1.default, 'Get visible map boundaries', true],
            [FitToSuppliedMarkers_1.default, 'Focus Map On Markers', true],
            [FitToCoordinates_1.default, 'Fit Map To Coordinates', true],
            [LiteMapView_1.default, 'Android Lite MapView'],
            [CustomTiles_1.default, 'Custom Tiles', true],
            [WMSTiles_1.default, 'WMS Tiles', true],
            [ZIndexMarkers_1.default, 'Position Markers with Z-index', true],
            [MapStyle_1.default, 'Customize the style of the map', true],
            [LegalLabel_1.default, 'Reposition the legal label', true],
            [SetNativePropsOverlays_1.default, 'Update native props', true],
            [CustomOverlay_1.default, 'Custom Overlay Component', true],
            [TestIdMarkers_1.default, 'Test ID for Automation', true],
            [MapKml_1.default, 'Load Map with KML', true],
            [BugMarkerWontUpdate_1.default, "BUG: Marker Won't Update (Android)", true],
            [ImageOverlayWithAssets_1.default, 'Image Overlay Component with Assets', true],
            [ImageOverlayWithURL_1.default, 'Image Overlay Component with URL', true],
            [ImageOverlayWithBearing_1.default, 'Image Overlay with Bearing', true],
            [AnimatedNavigation_1.default, 'Animated Map Navigation', true],
            [OnPoiClick_1.default, 'On Poi Click', true],
            [IndoorMap_1.default, 'Indoor Map', true],
            [CameraControl_1.default, 'CameraControl', true],
            [MassiveCustomMarkers_1.default, 'MassiveCustomMarkers', true],
            [Geojson_1.default, 'Geojson', true],
            [CacheURLTiles_1.default, 'CacheURLTiles', true],
            [CacheWMSTiles_1.default, 'CacheWMSTiles', true],
        ]
            // Filter out examples that are not yet supported for Google Maps on iOS.
            .filter(example => ANDROID || (IOS && (example[2] || !this.state.useGoogleMaps)))
            .map(makeExampleMapper(IOS && this.state.useGoogleMaps)));
    }
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        ...react_native_1.StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    scrollview: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    button: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'rgba(220,220,220,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    back: {
        position: 'absolute',
        top: 20,
        left: 12,
        backgroundColor: 'rgba(255,255,255,0.4)',
        padding: 12,
        borderRadius: 20,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: { fontWeight: 'bold', fontSize: 30 },
    googleSwitch: { marginBottom: 10 },
});
