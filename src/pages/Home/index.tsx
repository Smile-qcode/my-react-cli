import { useTitle } from 'ahooks';
import { Button, DatePicker, Space } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

import { setCount } from '@/redux/actions';
import { storeState } from '@/redux/interface';

interface Props {
  count?: number;
  setCount?: Function;
}

const Home: React.FC<Props> = ({ count, setCount }) => {
  useTitle('Home');

  const add = () => {
    setCount?.(count! + 1);
  };

  const sub = () => {
    setCount?.(count! - 1);
  };

  return (
    <div>
      <DatePicker />
      <div>
        <h2>{count}</h2>
        <Space>
          <Button type='primary' onClick={add}>
            ADD
          </Button>
          <Button type='primary' onClick={sub}>
            SUB
          </Button>
        </Space>
      </div>
    </div>
  );
};
// * connect高阶函数，传入mapStateToProps和mapDispatchToProps，返回的组件，可以在props获取传递来的store的state
export default connect(
  (state: storeState) => ({
    count: state.count
  }),
  { setCount }
)(Home);
