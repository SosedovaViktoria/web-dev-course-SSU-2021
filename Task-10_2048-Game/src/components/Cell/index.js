import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './cell.scss';
import { isObjEqual } from '../../utils/helpers';

// Ячейка игрового поля, минимальный компонент на игровом поле,один компонент обозначает число.
export default class Cell extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !isObjEqual(nextProps, this.props) || !isObjEqual(nextState, this.state)
    );
  }

  render() {
    const { props: { value } } = this;

    const color = `color-${value}`;
    return (
      <td>
        <div
          className={classnames([styles.cell, { [styles[color]]: !!value }])}
        >
          <div className={styles.number}>{value || null}</div>
        </div>
      </td>
    );
  }
}
