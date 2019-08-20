import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

export default class DashCollapsibleTree extends Component {

    render() {
      const {id, data, onChange, onAction, onNodeToggle} = this.props;

      return (
        <DropdownTreeSelect
          data={data}
          onChange={onChange}
          onAction={onAction}
          onNodeToggle={onNodeToggle}
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

    data: PropTypes.object,

    onChange: PropTypes.func,

    onAction: PropTypes.func,

    onNodeToggle: PropTypes.func,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
