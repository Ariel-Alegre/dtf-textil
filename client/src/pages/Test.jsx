import React from 'react';
import { QRCode, Space } from 'antd';
const App = () => (
  <Space>
    <QRCode type="canvas" value="https://elaritech.com/" />
    <QRCode type="svg" value="https://elaritech.com/" />
  </Space>
);
export default App;