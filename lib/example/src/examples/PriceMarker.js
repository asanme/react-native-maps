"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class PriceMarker extends react_1.default.Component {
    render() {
        const { fontSize, amount } = this.props;
        return (<react_native_1.View style={styles.container}>
        <react_native_1.View style={styles.bubble}>
          <react_native_1.Text style={styles.dollar}>$</react_native_1.Text>
          <react_native_1.Text style={[styles.amount, { fontSize }]}>{amount}</react_native_1.Text>
        </react_native_1.View>
        <react_native_1.View style={styles.arrowBorder}/>
        <react_native_1.View style={styles.arrow}/>
      </react_native_1.View>);
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
        padding: 2,
        borderRadius: 3,
        borderColor: '#D23F44',
        borderWidth: 0.5,
    },
    dollar: {
        color: '#FFFFFF',
        fontSize: 10,
    },
    amount: {
        color: '#FFFFFF',
        fontSize: 13,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'transparent',
        borderTopColor: '#FF5A5F',
        alignSelf: 'center',
        marginTop: -9,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'transparent',
        borderTopColor: '#D23F44',
        alignSelf: 'center',
        marginTop: -0.5,
    },
});
exports.default = PriceMarker;
