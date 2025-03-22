"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class AnimatedPriceMarker extends react_1.default.Component {
    render() {
        const { amount, selected, style } = this.props;
        const background = selected.interpolate({
            inputRange: [0, 1],
            outputRange: ['#FF5A5F', '#4da2ab'],
        });
        const border = selected.interpolate({
            inputRange: [0, 1],
            outputRange: ['#D23F44', '#007a87'],
        });
        return (<react_native_1.Animated.View style={[styles.container, style]}>
        <react_native_1.Animated.View style={[
                styles.bubble,
                {
                    backgroundColor: background,
                    borderColor: border,
                },
            ]}>
          <react_native_1.Text style={styles.dollar}>$</react_native_1.Text>
          <react_native_1.Text style={styles.amount}>{amount}</react_native_1.Text>
        </react_native_1.Animated.View>
        <react_native_1.Animated.View style={[styles.arrowBorder, { borderTopColor: border }]}/>
        <react_native_1.Animated.View style={[styles.arrow, { borderTopColor: background }]}/>
      </react_native_1.Animated.View>);
    }
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    bubble: {
        flex: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#FF5A5F',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 3,
        borderColor: '#D23F44',
        borderWidth: 0.5,
    },
    dollar: {
        color: '#fff',
        fontSize: 10,
    },
    amount: {
        color: '#fff',
        fontSize: 13,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 4,
        borderTopColor: '#FF5A5F',
        alignSelf: 'center',
        marginTop: -9,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 4,
        borderTopColor: '#D23F44',
        alignSelf: 'center',
        marginTop: -0.5,
    },
    selectedBubble: {
        backgroundColor: '#4da2ab',
        borderColor: '#007a87',
    },
    selectedArrow: {
        borderTopColor: '#4da2ab',
    },
    selectedArrowBorder: {
        borderTopColor: '#007a87',
    },
});
exports.default = AnimatedPriceMarker;
