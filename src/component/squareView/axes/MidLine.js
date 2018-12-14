import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Line,
} from 'react-konva';

const MidLine = ({
  blackStroke,
  color,
  circlePointsX,
  circlePointsY,
  stroke,
  lineStrokeWidth,
  middleLinePoint,
  shadowBlur,
  radius,
  strokeWidth,
}) => (
  <Layer>
    <Circle
      x={circlePointsX}
      y={circlePointsY}
      radius={radius}
      fill={color}
      stroke={stroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Line
      points={
        [
          middleLinePoint[0],
          middleLinePoint[1],
          middleLinePoint[2],
          middleLinePoint[3],
        ]
      }
      stroke={blackStroke}
      strokeWidth={lineStrokeWidth}
    />
  </Layer>
);

MidLine.propTypes = {
  circlePointsX: PropTypes.number.isRequired,
  circlePointsY: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  stroke: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  lineStrokeWidth: PropTypes.number.isRequired,
  shadowBlur: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  blackStroke: PropTypes.string.isRequired,
  middleLinePoint: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default MidLine;
