/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layer, Circle, Line, Text, Shape,
} from 'react-konva';
import { AppState } from '../../../config/AppState';
import {
  POLY_POINT_X_1,
  POLY_POINT_Y_1,
  POLY_POINT_X_2,
  POLY_POINT_Y_2,
  POLY_POINT_X_3,
  POLY_POINT_Y_3,
  POLY_POINT_X_4,
  POLY_POINT_Y_4,
  POLY_POINT_X_5,
  POLY_POINT_Y_5,
} from '../../../constants/Common';

class PolyOnePoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...AppState,
      A: {
        stroke: AppState.triangleStroke,
        color: AppState.color,
      },
      B: {
        stroke: AppState.triangleStroke,
        color: AppState.color,
      },
      C: {
        stroke: AppState.triangleStroke,
        color: AppState.color,
      },
      D: {
        stroke: AppState.triangleStroke,
        color: AppState.color,
      },
      E: {
        stroke: AppState.triangleStroke,
        color: AppState.color,
      },
    };
  }

    handleMouseEnter = (point) => {
      document.body.style.cursor = 'pointer';
      this.setState(prevState => ({
        ...prevState,
        [point]: {
          stroke: 10,
          color: 'red',
        },
      }));
    };

    handleMouseLeave = (point) => {
      const { triangleStroke, color } = this.state;
      document.body.style.cursor = 'default';

      this.setState(prevState => ({
        ...prevState,
        [point]: {
          stroke: triangleStroke,
          color,
        },
      }));
    };

    condCheck = (condition, then, otherwise) => (condition ? then : otherwise)

    render() {
      const {
        radius, handlePointClick, tracedLines, pointClicked, mouseMoving,
      } = this.props;
      const {
        A, B, C, D, E,
      } = this.state;
      const symmetricLines = Object.values(tracedLines);

      return (
        <Layer>
          <Circle
            x={POLY_POINT_X_1}
            y={POLY_POINT_Y_1}
            fill={A.color}
            stroke={A.stroke}
            radius={radius}
            strokeWidth={4}
            onMouseMove={() => this.handleMouseEnter('A')}
            onMouseLeave={() => this.handleMouseLeave('A')}
            onClick={e => handlePointClick(e, 'A')}
          />
          <Circle
            x={POLY_POINT_X_2}
            y={POLY_POINT_Y_2}
            fill={B.color}
            stroke={B.stroke}
            radius={radius}
            strokeWidth={4}
            onMouseMove={() => this.handleMouseEnter('B')}
            onMouseLeave={() => this.handleMouseLeave('B')}
            onClick={e => handlePointClick(e, 'B')}
          />
          <Circle
            x={POLY_POINT_X_3}
            y={POLY_POINT_Y_3}
            fill={C.color}
            stroke={C.stroke}
            radius={radius}
            strokeWidth={4}
            onMouseMove={() => this.handleMouseEnter('C')}
            onMouseLeave={() => this.handleMouseLeave('C')}
            onClick={e => handlePointClick(e, 'C')}
          />
          <Circle
            x={POLY_POINT_X_4}
            y={POLY_POINT_Y_4}
            fill={D.color}
            stroke={D.stroke}
            radius={radius}
            strokeWidth={4}
            onMouseMove={() => this.handleMouseEnter('D')}
            onMouseLeave={() => this.handleMouseLeave('D')}
            onClick={e => handlePointClick(e, 'D')}
          />
          <Circle
            x={POLY_POINT_X_5}
            y={POLY_POINT_Y_5}
            fill={E.color}
            stroke={E.stroke}
            radius={radius}
            strokeWidth={4}
            onMouseMove={() => this.handleMouseEnter('E')}
            onMouseLeave={() => this.handleMouseLeave('E')}
            onClick={e => handlePointClick(e, 'E')}
          />

          {symmetricLines.map(
            ({
              startPoint,
              endPoint,
              symmetryLabel,
              distanceFromClickedToSymPoint,
              distanceFromSymPointToEnd,
              xDistance1,
              yDistance1,
              rotation,
              subXDistance1,
              subYDistance2,
            }) => (
                    <>
                      <Line
                        key={JSON.stringify(startPoint)}
                        x={this.condCheck(startPoint, startPoint ? startPoint.x : 0,
                          this.condCheck(pointClicked, pointClicked ? pointClicked.x : 0, null))}
                        y={this.condCheck(startPoint, startPoint ? startPoint.y : 0,
                          this.condCheck(pointClicked, pointClicked ? pointClicked.y : 0, null))}
                        points={[
                          0,
                          0,
                          this.condCheck(endPoint, endPoint ? endPoint.x : 0,
                            this.condCheck(mouseMoving, mouseMoving ? mouseMoving.x : 0, 0)),
                          this.condCheck(endPoint, endPoint ? endPoint.y : 0,
                            this.condCheck(mouseMoving, mouseMoving ? mouseMoving.y : 0, 0)),
                        ]}
                        stroke="#2196f3"
                      />
                      {endPoint
                        && (
                        <Text
                          fontSize={20}
                          x={endPoint.x + startPoint.x}
                          y={endPoint.y + startPoint.y}
                          text={symmetryLabel}
                        />
                        )
                    }
                      {distanceFromClickedToSymPoint
                    && (
                    <Text
                      fontSize={14}
                      x={xDistance1}
                      y={yDistance1}
                      rotation={rotation}
                      text={distanceFromClickedToSymPoint}
                    />
                    )
                    }
                      {distanceFromSymPointToEnd
                    && (
                    <Text
                      fontSize={14}
                      rotation={rotation}
                      x={endPoint
                        ? endPoint.x + startPoint.x + subXDistance1
                        : mouseMoving ? mouseMoving.x + startPoint.x + subXDistance1 : 0}
                      y={endPoint
                        ? endPoint.y + startPoint.y + subYDistance2
                        : mouseMoving ? mouseMoving.y + startPoint.y + subYDistance2 : 0}
                      text={distanceFromSymPointToEnd}
                    />
                    )
                    }
                    </>
            ),
          )
          }

          {symmetricLines.every(line => line.endPoint)
                && (
                <Shape
                  sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(
                      symmetricLines[0].endPoint.x + symmetricLines[0].startPoint.x,
                      symmetricLines[0].endPoint.y + symmetricLines[0].startPoint.y,
                    );
                    context.lineTo(
                      symmetricLines[1].endPoint.x + symmetricLines[1].startPoint.x,
                      symmetricLines[1].endPoint.y + symmetricLines[1].startPoint.y,
                    );
                    context.lineTo(
                      symmetricLines[2].endPoint.x + symmetricLines[2].startPoint.x,
                      symmetricLines[2].endPoint.y + symmetricLines[2].startPoint.y,
                    );
                    context.lineTo(
                      symmetricLines[3].endPoint.x + symmetricLines[3].startPoint.x,
                      symmetricLines[3].endPoint.y + symmetricLines[3].startPoint.y,
                    );
                    context.lineTo(
                      symmetricLines[4].endPoint.x + symmetricLines[4].startPoint.x,
                      symmetricLines[4].endPoint.y + symmetricLines[4].startPoint.y,
                    );
                    context.closePath();
                    context.fillStrokeShape(shape);
                  }}
                  stroke="#FF8A65"
                  strokeWidth={4}
                  opacity={0.7}
                />
                )
            }
        </Layer>
      );
    }
}

PolyOnePoints.propTypes = {
  radius: PropTypes.number.isRequired,
  handlePointClick: PropTypes.func.isRequired,
  pointClicked: PropTypes.shape({}).isRequired,
  mouseMoving: PropTypes.shape({}).isRequired,
  tracedLines: PropTypes.shape({}).isRequired,
};

export default PolyOnePoints;
