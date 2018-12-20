import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './Try.css';
import TableContent from '../table/TableContent';
import StepOne from '../steps/StepOne';
import TrianglePractice from '../exercices/TrianglePractice';

const Try = ({
  foundWord,
  handleDatas,
  handleSymetricWord,
  handleVerify,
  isPolygonActive,
  isSquareActive,
  isTriangleActive,
  symOfAFound,
  symOfCFound,
  toggleLine,
}) => (
  <div className="testing-container">
    <StepOne />
    <TableContent
      handleDatas={handleDatas}
      isPolygonActive={isPolygonActive}
      isSquareActive={isSquareActive}
    />
    { isTriangleActive ? (
      <TrianglePractice
        toggleLine={toggleLine}
        foundWord={foundWord}
        symOfAFound={symOfAFound}
        symOfCFound={symOfCFound}
        handleSymetricWord={handleSymetricWord}
      />
    ) : ''
    }

    <Button
      color="secondary"
      onClick={handleVerify}
      className="verfy-answer"
    >
      Vérifier mes réponses
    </Button>
  </div>
);

Try.propTypes = {
  foundWord: PropTypes.bool.isRequired,
  handleDatas: PropTypes.func.isRequired,
  handleSymetricWord: PropTypes.func.isRequired,
  handleVerify: PropTypes.func.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  symOfAFound: PropTypes.bool.isRequired,
  symOfCFound: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
};
export default Try;
