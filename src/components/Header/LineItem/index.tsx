import cx from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import when from "recompose/branch";
import compose from "recompose/compose";
import renderNothing from "recompose/renderNothing";
import { getProducts } from '../../../store/selectors/components/categoryPage';
import './styles.css'

function LineItem(props: any): JSX.Element {
  return (
    <span
      className={cx('line-item', {
        'active': props.activeCategory === props.id
      })}
      onClick={props.updateCategory(props.id)}
    >
      <a href="#">
        {props.title}
        <span className="count">{props.products.length}</span>
      </a>
    </span>
  )
}

export default compose<any, any>(
  connect(
    (state, props: any) => ({
      products: getProducts(state, props.id)
    })
  ),
  when((props: any) => props.products.length === 0, renderNothing)
)(LineItem);
