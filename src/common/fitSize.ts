import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const currentDeviceHeight = Dimensions.get('window').height;
const iPhonePlusHeight = 763;
const scalingMultiplier = currentDeviceHeight / iPhonePlusHeight;
const currentDeviceWidth = Dimensions.get('window').width;

const ScaleWidth = function (value: number | any) {
  if (typeof value === 'number') {
    return value * scalingMultiplier;
  } else {
    let valueNumber = parseFloat(value) / 100;
    return currentDeviceWidth * valueNumber;
  }
};

const ScaleHeight = function (value: number | any) {
  if (typeof value === 'number') {
    return value * scalingMultiplier + (value - value * scalingMultiplier) / 4;
  } else {
    let valueNumber = parseFloat(value) / 100;
    return currentDeviceHeight * valueNumber;
  }
};

const Spacings = {
  wSpace: Math.ceil(width * 0.12),
  wSpace1: Math.ceil(width * 0.1),
  wSpace2: Math.ceil(width * 0.08),
  wSpace3: Math.ceil(width * 0.06),
  wSpace4: Math.ceil(width * 0.04),
  wSpace5: Math.ceil(width * 0.035),
  wSpace6: Math.ceil(width * 0.03),
  wSpace7: Math.ceil(width * 0.025),
  wSpace8: Math.ceil(width * 0.02),
  wSpace9: Math.ceil(width * 0.01),
  hSpace1: Math.ceil(height * 0.1),
  hSpace2: Math.ceil(height * 0.08),
  hSpace3: Math.ceil(height * 0.06),
  hSpace4: Math.ceil(height * 0.05),
  hSpace5: Math.ceil(height * 0.04),
  hSpace6: Math.ceil(height * 0.035),
  hSpace7: Math.ceil(height * 0.03),
  hSpace8: Math.ceil(height * 0.02),
  hSpace9: Math.ceil(height * 0.01),
  hSpace10: Math.ceil(height * 0.002),
  borderWidth: Math.ceil(width * 0.002),
};

export {
  ScaleHeight,
  ScaleWidth,
  width as ScreenW,
  height as ScreenH,
  Spacings,
};
