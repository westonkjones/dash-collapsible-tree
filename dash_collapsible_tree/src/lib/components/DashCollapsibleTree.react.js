import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SuperTreeView from 'react-super-treeview';
import './styles.css';

export default class DashCollapsibleTree extends Component {

    constructor(props) {
      super(props);

      this.state = {
        data: props.data
      }
    }

    render() {
        const {id, data} = this.props;

        return (
          <SuperTreeView
            data={ this.state.data }
            onUpdateCb={(updatedData) => {
              this.setState({data: updatedData})
            }}
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

    data: PropTypes.array,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
