import * as React from 'react';

import { ThreatMetrixViewProps } from './ThreatMetrix.types';

export default function ThreatMetrixView(props: ThreatMetrixViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
