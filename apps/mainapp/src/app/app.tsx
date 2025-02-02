import { components } from '@mono/components';
import { moreComponents } from '@mono/more-components';

export function App() {
  return (
    <div>
      <p>{components()}</p>
      <p>{moreComponents()}</p>
    </div>
  );
}

export default App;
