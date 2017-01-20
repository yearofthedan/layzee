import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { FlexLayout, SpacedLayout } from '../src';

const Block = ({ style, children }) =>
  <div style={{ height: '100px', borderStyle: 'dashed', boxSizing: 'border-box', ...style }}>{children}</div>;

storiesOf('FlexLayout', module)
  .add('Layout no specific widths', () => (
    <FlexLayout>
      <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
      <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
    </FlexLayout>
  ))
  .add('Nav bar', () => (
    <FlexLayout container="nav" widths={[1, 1, 1, 10, 1]}>
      <a>Home</a>
      <a>Latest news</a>
      <a>FAQs</a>
      <a>Contact</a>
      <a>Logout</a>
    </FlexLayout>
  ))
  .add('Repeating rows', () => (
    <FlexLayout container="section" widths={[1, 1, 1]}>
      <Block style={{ backgroundColor: 'lightblue' }}>1</Block>
      <Block style={{ backgroundColor: 'yellowgreen' }}>2</Block>
      <Block style={{ backgroundColor: 'red' }}>3</Block>
      <Block style={{ backgroundColor: 'papayawhip' }}>4</Block>
      <Block style={{ backgroundColor: 'orange' }}>5</Block>
    </FlexLayout>
  ));
storiesOf('SpacedLayout', module)
  .add('Layout default spacing', () => (
    <SpacedLayout>
      <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
      <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
    </SpacedLayout>
  ))
  .add('Layout spacing types', () => (
    <section>
      <SpacedLayout spacing="begin">
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
      <SpacedLayout spacing="middle">
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
      <SpacedLayout spacing="end">
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
      <SpacedLayout spacing="between">
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
      <SpacedLayout spacing="around">
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
    </section>
  ));
