// src/pages/home/HomeContainer.ts

import { connect } from 'react-redux';
import Home from './Home';
import { increment, decrement } from './HomeActions';

const mapStateToProps = (state: any) => ({
  count: state.home.count, // Assuming 'home' is the correct property in your Redux state
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
