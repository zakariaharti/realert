import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --realert-btn-confirm: #7cd1f9;
    --realert-btn-confirm-hover: var(--alert-btn-confirm);
    --realert-btn-confirm-active: var(--alert-btn-confirm);

    --realert-btn-cancel: #EFEFEF;
    --realert-btn-cancel-hover: var(--alert-btn-cancel);
    --realert-btn-cancel-active: var(--alert-btn-cancel);

    --realert-btn-danger: #e64942;
    --realert-btn-danger-hover: var(--alert-btn-danger);
    --realert-btn-danger-active: var(--alert-btn-danger);

    --realert-focus-color: rgba(43, 114, 165, 0.3);

    --realert-green: #A5DC86;
    --realert-green-light: rgba(165, 220, 134, 0.2);

    --realert-orange: #F8BB86;

    --realert-red: #F27474;

    --realert-blue: #C9DAE1;
  }
`;

export default GlobalStyles;
