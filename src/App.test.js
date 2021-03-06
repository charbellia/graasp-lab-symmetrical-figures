import React from 'react';
import { shallow } from 'enzyme';
import { App } from './components/App';

describe('<App />', () => {
  const props = {
    i18n: {
      defaultNS: '',
      changeLanguage: jest.fn(),
    },
    t: jest.fn(),
    loading: true,
    dispatchGetContext: jest.fn(),
    dispatchToggleLoader: jest.fn(),
    dispatchGetAppInstance: jest.fn(),
  };
  const component = shallow(<App {...props} />);
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
