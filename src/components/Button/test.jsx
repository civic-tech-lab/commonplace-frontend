// @flow
/* eslint-env jest */
import FaCommentingO from 'react-icons/lib/fa/commenting-o';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaExclamationTriangle from 'react-icons/lib/fa/exclamation-triangle';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaShareSquareO from 'react-icons/lib/fa/share-square-o';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '.';

describe('Button', () => {
  test('renders expected output', () => {
    const tree = renderer
      .create(
        <div>
          <Button>Regular button</Button>
          <Button primary>Primary button</Button>
          <Button block>Full width button</Button>
          <Button icon={<FaCommentingO />} primary>
            Reply
          </Button>
          <Button icon={<FaEnvelopeO />}>Message</Button>
          <Button icon={<FaShareSquareO />}>Share</Button>
          <Button icon={<FaHeartO />}>Thank</Button>
          <Button icon={<FaExclamationTriangle />}>Flag</Button>
        </div>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
