import { requireNativeView } from 'expo';
import * as React from 'react';

import { ThreatMetrixViewProps } from './ThreatMetrix.types';

const NativeView: React.ComponentType<ThreatMetrixViewProps> =
  requireNativeView('ThreatMetrix');

export default function ThreatMetrixView(props: ThreatMetrixViewProps) {
  return <NativeView {...props} />;
}
