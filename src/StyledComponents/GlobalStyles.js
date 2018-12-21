import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --realert-btn-confirm: #7cd1f9;
    --realert-btn-confirm-hover: #4fc7ff;
    --realert-btn-confirm-active: #4fc7ff;

    --realert-btn-cancel: #EFEFEF;
    --realert-btn-cancel-hover: #d8d8d8;
    --realert-btn-cancel-active: #d8d8d8;

    --realert-btn-danger: #e64942;
    --realert-btn-danger-hover: #e03d36;
    --realert-btn-danger-active: #e03d36;

    --realert-focus-color: rgba(43, 114, 165, 0.3);

    --realert-green: #A5DC86;
    --realert-green-light: rgba(165, 220, 134, 0.2);

    --realert-orange: #F8BB86;

    --realert-red: #F27474;

    --realert-blue: #C9DAE1;
  }
`;

export default GlobalStyles;
