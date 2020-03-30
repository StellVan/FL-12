import './addSymbol.less';
import check from '../check/check';

export default function addSymbol(node, symbol) {
  if (!node.classList.contains('checked')) {
    switch (symbol) {
      case 'cross':
        node.classList.add('cross');
        node.classList.add('checked');
        check('cross');
        return 'circle';

      case 'circle':
        node.classList.add('circle');
        node.classList.add('checked');
        check('circle');
        return 'cross';

      default:
        break;
    }
  } else {
    return symbol;
  }
}
