import * as React from 'react';
import * as Scrivito from 'scrivito';
import InputRange from 'react-input-range';


function updateState(value){
  this.setState({value})
}


class RangeSliderGroupComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 1,
    }
    this.updateState = updateState.bind(this)

  }

render() {
    const widget = this.props.widget;
    const items = widget.get('items');

    if (!items.length && Scrivito.isInPlaceEditingActive()) {
      return (
          <h4 className="text-center">
            Provide the range slider values in the widget properties.
          </h4>
      );
    }

      return (

        <div>

          {items.map((item, index) =>
          <div key={index}>
          <div className='row'>
            <div className='col col-sm-3'>&nbsp;</div>
            <div className='col col-sm-9'><h3>{item.get('headline')}</h3></div>
          </div>
            <div className='mb-3 row'>
              <div className='col col-sm-3'>{item.get('targetEntity')}: {this.state.value * item.get('factor')}</div>
              <div className='col col-sm-9'>
                <InputRange key={index}

                  maxValue={item.get('max')||100}
                  minValue={item.get('min')||0}
                  value={this.state.value}
                  onChange={value => this.setState({ value })}


                />
              <div className='mt-3'>{item.get('baseEntity')}</div>
              </div>
            </div>
            </div>
          )
        }

        </div>

      )


}
}

Scrivito.provideComponent('RangeSliderGroupWidget', RangeSliderGroupComponent);




