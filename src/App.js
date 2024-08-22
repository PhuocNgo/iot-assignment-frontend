import { Route, Routes } from "react-router-dom";
import ControlCenter from "./pages/ControlCenter";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  contentStyle,
  headerStyle,
  layoutStyle,
  siderStyle,
} from "./sepecifications";
import Search from "antd/es/transfer/search";

function App() {
  const { Header, Content } = Layout;
  return (
    <>
      <Layout style={layoutStyle}>
        <Sider width="25%" style={siderStyle}>
          <ControlCenter />
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <Search
              placeholder="input search text"
              allowClear
              style={{
                width: 304,
              }}
            />
          </Header>
          <Content style={contentStyle}>Content</Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
