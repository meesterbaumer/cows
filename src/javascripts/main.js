import 'bootstrap';
import '../styles/main.scss';
import cowList from './components/cowList/cowList';

const init = () => {
  cowList.buildCows();
};

init();
