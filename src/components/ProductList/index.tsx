import * as React from 'react';
import StackGrid from "react-stack-grid";
import {IProduct} from '../../facades/gousto/types';
import ProductItem from './ProductItem';
import './styles.css';

class ProductList extends React.Component<any, any> {
  public grid: any = {};
  public gridRef = (grid: any) => this.grid = grid;


  public componentDidUpdate(prevProps: Readonly<any>): void {
    if (prevProps.items !== this.props.items) {
      this.grid.updateLayout();
    }
  }

  public updateLayout = (): void => {
    this.grid.updateLayout();
  };

  public render() {
    const props = this.props;

    if (props.items.length === 0) {
        return (
          <p>No products found.</p>
        );
    }

    return (
      <StackGrid
        className="categories"
        columnWidth="33%"
        gridRef={this.gridRef}
        gutterWidth={10}
        gutterHeight={15}>
        {props.items.map((item: IProduct) => (
          <ProductItem key={item.id} updateLayout={this.updateLayout} {...item} />
        ))}
      </StackGrid>
    );
  }
}

export default ProductList;
