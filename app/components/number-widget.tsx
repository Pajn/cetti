import * as Colors from 'material-ui/lib/styles/colors';
import * as React from 'react';

import { stateful } from '../redux/helpers';
import {
  BucketCollection,
  NumberType,
  NumberWidgetConfiguration,
  WidgetConfiguration,
} from '../entites';

import { Widget } from './widget';

const styles = Object.freeze({
  number: {
    position: 'absolute',
    right: 24,
    bottom: -4,
    margin: 0,

    color: Colors.teal500,

    fontSize: 72,
  },
});

type Properties = {
  configuration: WidgetConfiguration,
  grid: {cols: number, rows: number},
  key?: any,
}

type State = {
  buckets?: BucketCollection,
};

@stateful(state => ({buckets: state.buckets}))
export class NumberWidget extends React.Component<Properties, State> {

  getData() {
    const configuration = this.props.configuration.typeConfiguration as NumberWidgetConfiguration;
    let dataPoints = this.state.buckets[this.props.configuration.bucket];

    if (configuration.filter) {
        dataPoints = dataPoints.filter(configuration.filter);
    }

    switch (configuration.type) {
      case NumberType.count: return dataPoints.length;
      case NumberType.last: return dataPoints[dataPoints.length - 1].value;
      case NumberType.sum: return dataPoints.reduce((sum, data) => sum + data.value, 0);
    }

    throw new Error('Invalid number type!');
  }

  render() {
    const { configuration, grid } = this.props;

    return (
      <Widget grid={grid} configuration={configuration}>
        <h1 style={styles.number}>{this.getData()}</h1>
      </Widget>
    );
  }
}
