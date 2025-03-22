"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const detox_1 = require("detox");
describe('Example', () => {
    beforeAll(async () => {
        await detox_1.device.launchApp();
    });
    beforeEach(async () => {
        await detox_1.device.reloadReactNative();
    });
    it('should show static map', async () => {
        await (0, detox_1.element)(detox_1.by.id('StaticMapButton')).tap();
    });
});
