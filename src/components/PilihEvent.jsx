import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tambahallevent from '../pages/Tambahallevent';
import Draftevent from '../pages/Draftevent';
import Finishevent from '../pages/Finishevent';


function ControlledTabsExample() {
  const [key, setKey] = useState();

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mt-4" style={{color:'black',}} >
      <Tab className='thisTab' eventKey="Allevent" title="ALL EVENT " > 
        <Tambahallevent/>
      </Tab>
      <Tab className='thisTab' eventKey="Draftevent" title="DRAFT EVENT">
        <Draftevent/>
      </Tab>
      <Tab className='thisTab' eventKey="Finishevent" title="EVENT FINISH">
        <Finishevent/>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;