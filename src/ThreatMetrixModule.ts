import { NativeModule, requireNativeModule } from 'expo';

import { ThreatMetrixModuleEvents } from './ThreatMetrix.types';

declare class ThreatMetrixModule extends NativeModule<ThreatMetrixModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ThreatMetrixModule>('ThreatMetrix');
