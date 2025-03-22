"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const AnimatedRegion_1 = __importDefault(require("../src/AnimatedRegion"));
const VALUES = {
    latitude: 5,
    longitude: 5,
    latitudeDelta: 0,
    longitudeDelta: 0,
};
describe('AnimatedRegion', () => {
    it('converts numbers to instances of Animated.Value', () => {
        const animatedRegion = new AnimatedRegion_1.default(VALUES);
        expect(animatedRegion.latitude instanceof react_native_1.Animated.Value).toBe(true);
        expect(animatedRegion.longitude instanceof react_native_1.Animated.Value).toBe(true);
        expect(animatedRegion.latitudeDelta instanceof react_native_1.Animated.Value).toBe(true);
        expect(animatedRegion.longitudeDelta instanceof react_native_1.Animated.Value).toBe(true);
        const values = animatedRegion.__getValue();
        expect(values.latitude).toEqual(VALUES.latitude);
        expect(values.longitude).toEqual(VALUES.longitude);
        expect(values.longitudeDelta).toEqual(VALUES.longitudeDelta);
        expect(values.latitudeDelta).toEqual(VALUES.latitudeDelta);
    });
    it('uses Animated.Value instances', () => {
        const animatedRegion = new AnimatedRegion_1.default({
            latitude: new react_native_1.Animated.Value(VALUES.latitude),
            longitude: new react_native_1.Animated.Value(VALUES.longitude),
        });
        expect(animatedRegion.latitude instanceof react_native_1.Animated.Value).toBe(true);
        expect(animatedRegion.longitude instanceof react_native_1.Animated.Value).toBe(true);
        expect(animatedRegion.latitudeDelta instanceof react_native_1.Animated.Value).toBe(true);
        expect(animatedRegion.longitudeDelta instanceof react_native_1.Animated.Value).toBe(true);
        const values = animatedRegion.__getValue();
        expect(values.latitude).toEqual(VALUES.latitude);
        expect(values.longitude).toEqual(VALUES.longitude);
        expect(values.longitudeDelta).toEqual(VALUES.longitudeDelta);
        expect(values.latitudeDelta).toEqual(VALUES.latitudeDelta);
    });
    it('uses defaults converted to Animated.Value instances when none are supplied', () => {
        const animatedRegion = new AnimatedRegion_1.default({});
        expect(animatedRegion.latitude instanceof react_native_1.Animated.Value).toBe(true);
        expect(animatedRegion.longitude instanceof react_native_1.Animated.Value).toBe(true);
        expect(animatedRegion.latitudeDelta instanceof react_native_1.Animated.Value).toBe(true);
        expect(animatedRegion.longitudeDelta instanceof react_native_1.Animated.Value).toBe(true);
        const values = animatedRegion.__getValue();
        expect(values.latitude).toEqual(0);
        expect(values.longitude).toEqual(0);
        expect(values.longitudeDelta).toEqual(VALUES.longitudeDelta);
        expect(values.latitudeDelta).toEqual(VALUES.latitudeDelta);
    });
});
