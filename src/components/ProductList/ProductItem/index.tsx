import cx from 'classnames';
import * as React from 'react';
import './styles.css';

class ProductItem extends React.Component<any, any> {
  public state = {
    active: false
  };

  public updateActive = (): void => {
    this.setState((state: any) => ({
      active: !state.active
    }), () => {
      this.props.updateLayout();
    });
  };

  public render() {
    const props = this.props;
    return (
      <div
        key={props.id}
        className={cx('category', {
          'active': this.state.active
        })}
        onClick={this.updateActive}>
        <img src={props.images['400'].src} alt={props.title}/>
        <div className="content">
          <h3 className="title">{props.title}</h3>
          <p className="description">{props.description}</p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
