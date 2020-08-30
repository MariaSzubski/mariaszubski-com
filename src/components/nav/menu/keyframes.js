import { css } from "styled-components"

const KeyframeMixin = css`
  @keyframes top {
    0% {
      top: 0;
      transform: rotate(0);
    }
    50% {
      top: 1.1rem;
      transform: rotate(0);
    }
    100% {
      top: 1.1rem;
      transform: rotate(45deg);
    }
  }

  @keyframes top-2 {
    0% {
      top: 1.1rem;
      transform: rotate(45deg);
    }
    40% {
      top: 1.1rem;
      transform: rotate(45deg);
    }
    70% {
      top: 1.1rem;
      transform: rotate(0deg);
    }
    100% {
      top: 0;
      transform: rotate(0deg);
    }
  }

  @keyframes bottom {
    0% {
      bottom: 0;
      transform: rotate(0);
    }
    50% {
      bottom: 1.1rem;
      transform: rotate(0);
    }
    100% {
      bottom: 1.1rem;
      transform: rotate(135deg);
    }
  }

  @keyframes bottom-2 {
    0% {
      bottom: 1.1rem;
      transform: rotate(135deg);
    }
    30% {
      bottom: 1.1rem;
      transform: rotate(135deg);
    }
    70% {
      bottom: 1.1rem;
      transform: rotate(0);
    }
    100% {
      bottom: 0;
      transform: rotate(0);
    }
  }

  @keyframes scaled {
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes scaled-2 {
    0% {
      transform: scale(0);
    }
    70% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes menu {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes menu-2 {
    0% {
      transform: scale(1);
    }
    40% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }
`

export default KeyframeMixin
