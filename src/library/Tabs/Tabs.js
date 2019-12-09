import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabsContainer } from './Tabs.styles';

const Tabs = ({ tabsList, handleOnClick, children }) => {
  const [activeTab, updateActiveTab] = useState({ index: 0 });

  const onTabClick = (event, tabItem, index) => {
    updateActiveTab({ ...tabItem, index });
    handleOnClick(event, tabItem);
  };

  /* class variables */
  const classNames = {
    list: 'forum-ui-tabs-list',
    listItem: 'forum-ui-tabs-list-item',
    button: 'forum-ui-tabs-list-item-button',
    content: 'forum-ui-tabs-content',
  };

  return (
    <TabsContainer>
      <ul className={classNames.list}>
        {tabsList &&
          tabsList.length > 0 &&
          tabsList.map((tab, index) => {
            const key = `${index}-${tab.name}`;
            let buttonClass = classNames.button;
            if (index === activeTab.index) buttonClass += ` ${classNames.button}--is-active`;
            return (
              <li className={classNames.listItem} key={key} id={tab.name || ''}>
                <button
                  type="button"
                  className={buttonClass}
                  onClick={event => onTabClick(event, tab, index)}
                >
                  {tab.value && tab.value}
                  {tab.node && tab.node}
                </button>
              </li>
            );
          })}
      </ul>
      <div className={classNames.content}>{children}</div>
    </TabsContainer>
  );
};

Tabs.defaultProps = {
  handleOnClick: () => null,
};

Tabs.propTypes = {
  tabsList: PropTypes.shape([
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      content: PropTypes.node,
    }),
  ]).isRequired,
  handleOnClick: PropTypes.func,
};

export default Tabs;
