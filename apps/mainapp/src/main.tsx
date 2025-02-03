import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // @ts-expect-error I don't know why this is broken
  <StrictMode>
    {/* @ts-expect-error I don't know why this is broken */}
    <App />
  </StrictMode>
);
