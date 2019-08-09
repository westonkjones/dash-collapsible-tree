import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tree from 'react-collapsible-tree';

export default class DashCollapsibleTree extends Component {
    render() {
        const {id, items, topIds, onSelection } = this.props;

        return (
          <Tree
            id={id}
            items={items}
            topIds={topIds}
            onSelection={onSelection}
          />
        );
    }
}

DashCollapsibleTree.defaultProps = {};

DashCollapsibleTree.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    items: PropTypes.object,

    topIds: PropTypes.array,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
