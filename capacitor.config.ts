import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fooddelivery.app',
  appName: 'fooddelivery',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
