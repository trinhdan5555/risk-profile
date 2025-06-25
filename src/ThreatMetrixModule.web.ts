import { registerWebModule, NativeModule } from 'expo';

import { ThreatMetrixModuleEvents } from './ThreatMetrix.types';

class ThreatMetrixModule extends NativeModule<ThreatMetrixModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ThreatMetrixModule, 'ThreatMetrixModule');
