import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const SquarePractice = ({
  foundWord,
  handleSymetricWord,
  toggleLine,
  sqSymOfAFound,
  sqSymOfBFound,
  sqSymOfDFound,
}) => (
  <div>
    <p className="testing-message">
      <b>2-</b>
      &nbsp;
      Le point
      &nbsp;
      <b>A&apos; : ( 11;12 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      { toggleLine ? (
        <b>C</b>
      ) : (
        <b>B</b>
      )
      }
      &nbsp;
      par rapport &nbsp;
      { toggleLine ? (
        <b>au point N</b>
      ) : (
        <b>à la droite</b>
      )
      }
      .
    </p>
    <p>
      Complète donc les points de symétrie:
    </p>
    <p>
      <b>B&apos; : ( 11;8 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      <span className="handle-result">
        { sqSymOfAFound ? (
          <b>A</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricOfD', 'square')}
          />
        )
        }
      </span>
    </p>
    <p>
      <b>C&apos; : ( 15;8 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      <span className="handle-result">
        { sqSymOfBFound ? (
          <b>B</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricOfC', 'square')}
          />
        )
        }
      </span>
    </p>
    <p>
      <b>D&apos; : ( 15;12 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      <span className="handle-result">
        { sqSymOfDFound ? (
          <b>D</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricOfB', 'square')}
          />
        )
        }
      </span>
    </p>

    <p>
      Le carré&nbsp;
      <b>ABCD</b>
      &nbsp;et le carré&nbsp;
      <b>A&apos;B&apos;C&apos;D&apos;</b>
      &nbsp;sont&nbsp;
      <span className={`${foundWord ? 'symetric-found' : 'check-symetric-word'}`}>
        { foundWord ? (
          <b>SYMÉTRIQUES</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricWord', 'square')}
          />
        )
        }
      </span>
      &nbsp;par rapport &nbsp;
      { toggleLine ? (
        <b>au point M</b>
      ) : (
        <b>à la droite</b>
      )
      }
      .
    </p>
  </div>
);

SquarePractice.propTypes = {
  foundWord: PropTypes.bool.isRequired,
  handleSymetricWord: PropTypes.func.isRequired,
  sqSymOfAFound: PropTypes.bool.isRequired,
  sqSymOfBFound: PropTypes.bool.isRequired,
  sqSymOfDFound: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
};

export default SquarePractice;
