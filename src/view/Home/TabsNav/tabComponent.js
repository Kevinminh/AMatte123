import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabDoor";
import TabDevice from "./tabDevice";
// Tabs Content
import TabComponentTwo from "./tabComponentOne";
import TabComponentOne from "./tabComponentTwo";
import TabComponentThree from "./tabComponentThree";
import TabPrice from "./tabPrice";
import "../../../css/TabsNav.css";

class TabComponent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className="tab-nav-container">
            <Tab
              className={`${
                this.state.tabIndex === 0 ? "tab-selected activeTab" : null
              }`}
            >
              <TabDoor />
              <p className="largeScreen tab2">
                <strong>
                  For alle elever
                  <br />
                </strong>
              </p>
              <br />
              <span className="mediumScreen" style={{ marginTop: "" }}>
                Alle elever
              </span>
            </Tab>

            <Tab
              className={`${
                this.state.tabIndex === 1 ? "tab-selected activeTab" : null
              }`}
            >
              <TabDevice />
              <p className="largeScreen" style={{ marginTop: "-5.3125rem" }}>
                <strong>
                  Tilgjengelig overalt
                  <br />
                  På mobil, nettbrett og og pc
                </strong>
              </p>
              <span
                className="mediumScreen"
                style={{ marginTop: "-5.3125rem" }}
              >
                Alle skjermer
              </span>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 2 ? "tab-selected activeTab" : null
              }`}
            >
              <TabPrice />
              <p className="largeScreen tab3">
                <strong>
                  Velg din plan
                  <br />
                </strong>
              </p>
              <br />
              <span className="mediumScreen" style={{ marginTop: "" }}>
                Priser
              </span>
            </Tab>
          </TabList>
          {/* Tabs Content */}
          <TabPanel>
            <TabComponentTwo />
          </TabPanel>
          <TabPanel>
            <TabComponentOne />
          </TabPanel>
          <TabPanel>
            <TabComponentThree />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
