import React, { useState } from 'react';
import { render } from 'react-panorama';

import { enableDefaultUI } from '../utils/ui'

import './style.less'

enableDefaultUI()

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <Panel style={{ flowChildren: 'down' }}>
      <Label className="name" text={`count: ${count}`} />
      <TextButton className="ButtonBevel" text="Increment" onactivate={increment} />
    </Panel>
  );
}

render(<Counter />, $.GetContextPanel());
