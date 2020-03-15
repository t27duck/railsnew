import React from "react";
import { Card, Input, Form, Layout, Select, Tabs } from 'antd';
import Rails52 from './data/rails52.js';
import Rails60 from './data/rails60.js';
import './App.css';

const { TabPane } = Tabs;
const { Header, Content } = Layout;
const { Option } = Select;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switches: {},
      appName: "MyApp",
      config: Rails60,
      railsVersion: "60"
    };
  }

  setSwitch(identifier, value) {
    let { switches } = this.state;
    switches[identifier] = value;
    this.setState({ switches });
  }

  setAppName(value) {
    this.setState({ appName: value });
  }

  setRailsVersion(value) {
    let newConfig;
    switch (value) {
      case "52":
        newConfig = Rails52;
        break;
      default:
        newConfig = Rails60;
    }
    this.setState({ switches: {}, railsVersion: value, config: newConfig });
  }

  render () {
    const { appName, config, railsVersion, switches } = this.state;
    const controlWidth = 240;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <Layout>
        <Header style={{ color: 'white' }}>
          RailsNew
          <div style={{ float: 'right', textAlign: 'right' }}>
            by <a href="https://twitter.com/t27duck">@t27duck</a>
            &nbsp;|&nbsp;
            <a href="https://github.com/t27duck/railsnew">Fork me on Github</a>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Card style={{ margin: '10px 0' }}>
            <p><strong>What is this?</strong></p>
            Rails has a lot of switches for customizing how you make a new app. RailsNew constructs the "rails new" command for you!
            Go through all the options for your new app below and copy/paste the resulting command straight into your terminal.
          </Card>
          <Card style={{ margin: '10px 0' }}>
            rails new {appName}
            {switches && Object.keys(switches).map((key, i) => {
              return <span key={i}> {switches[key]}</span>;
            })}
          </Card>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Info" key="1">
              <Form {...formItemLayout}>
                <Form.Item label="App Name">
                  <Input value={appName} style={{ width: controlWidth }} onChange={(e) => { this.setAppName(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Rails Version">
                  <Select
                    defaultValue={railsVersion}
                    style={{ width: controlWidth }}
                    onChange={(e) => { this.setRailsVersion(e) }}
                  >
                    <Option value="52">5.2</Option>
                    <Option value="60">6.0</Option>
                  </Select>
                </Form.Item>
              </Form>
            </TabPane>
            {Object.entries(config).map(([label, setConfig], i) => {
              return(
                <TabPane tab={label} key={i+2}>
                  <Form {...formItemLayout}>
                    {setConfig.map(config => {
                      let defaultValue = switches[config.identifier] || config.options[0].value;
                      return (
                        <Form.Item label={config.label} key={config.identifier}>
                          <Select
                            value={defaultValue}
                            style={{ width: controlWidth }}
                            onChange={(selection) => { this.setSwitch(config.identifier, selection) }}
                          >
                            {config.options.map((option, i) => {
                            return <Option key={i} value={option.value}>{option.name}</Option>;
                          })}
                          </Select>
                        </Form.Item>
                      );
                    })}
                  </Form>
                </TabPane>
              );
            })}
          </Tabs>
        </Content>
      </Layout>
    );
  }
};

export default App;
