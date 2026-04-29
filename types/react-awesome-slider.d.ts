declare module 'react-awesome-slider/dist/autoplay' {
  import AwesomeSlider from 'react-awesome-slider';

  type AutoplayOptions = {
    play?: boolean;
    cancelOnInteraction?: boolean;
    interval?: number;
  };

  export default function withAutoplay(
    slider: typeof AwesomeSlider
  ): React.ComponentType<any>;
}